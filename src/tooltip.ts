import * as m from 'mithril';
import 'material-design-lite';

/**
 * A materialize tooltip.
 * 
 * ## Attributes
 * | attribute | type  | default   | description |
 * |-----------|-------|-----------|------------|
 * | large     | boolean | false | Applies large-font effect |
 * | position  | string | 'bottom' | Positions the tooltip in relation to its target. Valid values are 'top', 'left', 'right', 'bottom' |
 */
export class Tooltip implements m.ClassComponent<m.Attributes> {
    for: string;
    
    oninit(vnode: any) {
        this.for = vnode.attrs.for;
    }

    oncreate(vnode: m.VnodeDOM<m.Attributes, any>) {
        if(this.for === undefined) {
            // try and get the previous siblings id
            if(vnode.dom.previousSibling && (<HTMLElement>vnode.dom.previousSibling).id) {
                this.for = (<HTMLElement>vnode.dom.previousSibling).id;
                vnode.dom.setAttribute('data-mdl-for', this.for);
            }
        }
        componentHandler.upgradeElement(<HTMLElement>vnode.dom);
    }

    view(vnode: m.Vnode<m.Attributes, this>) {
        const { position, large } = vnode.attrs;
        var classes = position === 'left' ? '.mdl-tooltip--left'
            : position === 'right' ? '.mdl-tooltip--right'
            : position === 'top' ? '.mdl-tooltip--top' : ''
        if(large)
            classes += '.mdl-tooltip--large'
        return m(`div[data-mdl-for="${this.for}"].mdl-tooltip${classes}`, vnode.children);
    }
}