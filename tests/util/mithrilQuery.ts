import * as m from 'mithril';
import * as cssauron from 'cssauron';

export const language = cssauron({
    tag: (node: any) => {
        return node.instance ? node.instance.tag : node.tag;
    },
    contents: (node) => {
        return node.dom.textContent || '';
    },
    id: (node) => {
        return node.dom.id;
    },
    class: (node) => {
        return node.dom.className;
    },
    parent: (node) => {
        return node.parent || node.instance && node.instance.parent || '';
    },
    children: (node) => {
        var children = (node.instance && node.instance.children) || node.children || []
        children.forEach((c: any) => c.parent = node);
        return children
    },
    attr: (node, attr) => {
        const value = node.dom && node.dom.getAttribute(attr) || node.attrs[attr];
        return value === '' ? true : value;
    }
});

function join(arrays: any[]) {
    return arrays.reduce(function (result, array) {
        return result.concat(array)
    }, [])
}

//TODO: add event triggering
export class MithrilQuery {
    private vnodes: m.Vnode<any, any> | m.Vnode<any, any>[];
    private parentElement: HTMLElement;

    get vnode() { return this.vnodes; }

    // inArray = true is needed if component has an input as the first element of the view. Only happens outside of browser and returning an array from the view breaks redraw.
    constructor(vnode: m.Vnode<any, any> | m.Vnode<any, any>[] | m.ComponentTypes<any, any>, inArray: boolean = false) {
        if (typeof vnode === 'function' || typeof (<any>vnode).view === 'function')
            this.vnodes = m(<m.ComponentTypes<any, any>>vnode);
        else if (Array.isArray(vnode))
            this.vnodes = <m.Vnode<any, any>[]>vnode;
        else
            this.vnodes = <m.Vnode<any, any>>vnode;

        this.parentElement = document.createElement('div');
        // m.render(this.parentElement, this.vnodes);
        if (inArray)
            m.mount(this.parentElement, { view: () => [this.vnodes] });
        else
            m.mount(this.parentElement, { view: () => this.vnodes });
    }

    redraw() {
        m.redraw();
    }

    private _matchesInternal(selector: (node: any) => any, vnode: m.Attributes): m.Attributes[] {
        var nodes: m.Attributes[] = [];
        if (selector(vnode.instance ? vnode.instance : vnode))
            nodes.push(vnode);
        if (vnode.instance ? !vnode.instance.children : !vnode.children)
            return nodes;

        if (vnode.instance)
            return nodes.concat(join(vnode.instance.children.map((node: any) => {
                if (node === undefined)
                    return undefined;
                node.parent = vnode;
                return this._matchesInternal(selector, node);
            }).filter((n: any) => n !== undefined)));
        else
            return nodes.concat(join(vnode.children.map((node: any) => {
                node.parent = vnode;
                return this._matchesInternal(selector, node);
            })));
    }

    matches(selector: string, vnode?: m.VnodeDOM<any, any> | m.VnodeDOM<any, any>[]): m.Attributes[] {
        var _selector: (node: any) => any;
        if (typeof selector === 'string')
            _selector = language(selector);
        else
            _selector = selector;
        if (Array.isArray(vnode))
            return join(vnode.map((node) => this._matchesInternal(_selector, node)));
        return this._matchesInternal(_selector, vnode || <m.VnodeDOM<any, any>>this.vnodes);
    }

    find(selector: string) {
        return this.matches(selector, <m.VnodeDOM<any, any>>this.vnodes);
    }

    first(selector: string) {
        var node = this.find(selector)[0];
        if (!node)
            throw new Error('No element matches ' + selector);
        return node;
    }

    has(selector: string) {
        return this.find(selector).length > 0;
    }

    contains(value: string) {
        return !!this.find(':contains(' + value + ')').length;
    }

    getTags() {
        return (Array.isArray(this.vnodes) ? this.vnodes
            : [this.vnodes]).join(', ');
    }

    toHtml() {
        return (this.parentElement.innerHTML.trim());
    }
}
