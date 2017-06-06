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
        const value = node.dom && node.dom.getAttribute(attr) || node.attrs && node.attrs[attr];
        return value === '' ? true : value; 
    }
});

function join(arrays: any[]) {
    return arrays.reduce(function (result, array) {
        return result.concat(array)
    }, [])
}

const keyCodeMap: {[key: string]: any} = {
    backspace: 8
    , command: 91
    , tab: 9
    , clear: 12
    , enter: 13
    , shift: 16
    , ctrl: 17
    , alt: 18
    , capslock: 20
    , escape: 27
    , esc: 27
    , space: 32
    , pageup: 33
    , pagedown: 34
    , end: 35
    , home: 36
    , left: 37
    , up: 38
    , right: 39
    , down: 40
    , del: 46
    , comma: 188
    , f1: 112
    , f2: 113
    , f3: 114
    , f4: 115
    , f5: 116
    , f6: 117
    , f7: 118
    , f8: 119
    , f9: 120
    , f10: 121
    , f11: 122
    , f12: 123
    , ',': 188
    , '.': 190
    , '/': 191
    , '`': 192
    , '-': 189
    , '=': 187
    , ';': 186
    , '[': 219
    , '\\': 220
    , ']': 221
    , '\'': 222
};

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

    trigger(selector: string,
        eventName: string,
        event?: Event,
        silent: boolean = false) {
        var attrs = this.first(selector).attrs
        if (attrs[eventName]) {
            attrs.eventName(event)
            silent = silent || <boolean>(event && (<any>event).redraw === false)
            silent || this.redraw()
        }
    }

    triggerKey(selector: string,
        eventName: string,
        key: string | number,
        options?: { [key: string]: any }) {
        options = options || {}
        var keyCode = typeof key === 'string' ? keyCodeMap[key.toLowerCase()] || key.toUpperCase().charCodeAt(0) : key;
        this.trigger(selector,
            'on' + eventName,
            <KeyboardEvent>{
                target: options.target || { value: options.value },
                altKey: !!options.altKey,
                shiftKey: !!options.shiftKey,
                ctrlKey: !!options.ctrlKey,
                type: eventName,
                keyCode: keyCode,
                which: keyCode
            }, !!options.silent)
    }

    focus(selector: string, event?: Event, silent: boolean = false) {
        this.trigger(selector, 'focus', event, silent);
    }

    click(selector: string, event?: Event, silent: boolean = false) {
        this.trigger(selector, 'click', event, silent);
    }

    blur(selector: string, event?: Event, silent: boolean = false) {
        this.trigger(selector, 'blur', event, silent);
    }

    mousedown(selector: string, event?: Event, silent: boolean = false) {
        this.trigger(selector, 'mousedown', event, silent);
    }

    mouseup(selector: string, event?: Event, silent: boolean = false) {
        this.trigger(selector, 'mouseup', event, silent);
    }

    mouseover(selector: string, event?: Event, silent: boolean = false) {
        this.trigger(selector, 'mouseover', event, silent);
    }

    mouseout(selector: string, event?: Event, silent: boolean = false) {
        this.trigger(selector, 'mouseout', event, silent);
    }

    mouseenter(selector: string, event?: Event, silent: boolean = false) {
        this.trigger(selector, 'mouseenter', event, silent);
    }

    mouseleave(selector: string, event?: Event, silent: boolean = false) {
        this.trigger(selector, 'mouseleave', event, silent);
    }

    contextmenu(selector: string, event?: Event, silent: boolean = false) {
        this.trigger(selector, 'contextmenu', event, silent);
    }

    keydown(selector: string,
        key: string | number,
        options?: { [key: string]: any }) {
        this.triggerKey(selector, 'keydown', key, options);
    }

    keypress(selector: string,
        key: string | number,
        options?: { [key: string]: any }) {
        this.triggerKey(selector, 'keypress', key, options);
    }

    keyup(selector: string,
        key: string | number,
        options?: { [key: string]: any }) {
        this.triggerKey(selector, 'keyup', key, options);
    }
}
