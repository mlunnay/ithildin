import * as m from 'mithril';
import 'material-design-lite';

/**
 * A materialize switch.
 * 
 * ## Attributes
 * | attribute | type  | default   | description |
 * |-----------|-------|-----------|------------|
 * | label     | string |          | The label for the switch |
 * | ripple    | boolean | true    | Applies ripple click effect |
 * | checked   | boolean | false   | Whether the switch is checked or not |
 */
export class Switch implements m.ClassComponent<m.Attributes> {
    static switchIdCounter = 0;
    id: string;
    
    oninit(vnode: any) {
        this.id = vnode.attrs.id ? vnode.attrs.id : '__switch__' + ++Switch.switchIdCounter;
    }

    oncreate(vnode: any) {
        componentHandler.upgradeElement(vnode.dom);
    }

    view(vnode: m.Vnode<m.Attributes, this>) {
        let { label, id, ripple, ...attrs } = vnode.attrs;

        return m(`label[for="${this.id}"].mdl-switch.mdl-js-switch` + (ripple || ripple === undefined ? '.mdl-js-ripple-effect' : ''), { className: ripple ? '' : '' },
            m(`input[type="checkbox"].mdl-switch__input#${this.id}`, attrs),
            m('span.mdl-switch__label', label))
    }
}
