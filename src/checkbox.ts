import * as m from 'mithril';
import 'material-design-lite';

/**
 * A materialize checkbox.
 * 
 * ## Attributes
 * | attribute | type  | default   | description |
 * |-----------|-------|-----------|------------|
 * | label     | string |          | The label for the checkbox |
 * | ripple    | boolean | true    | Applies ripple click effect |
 * | checked   | boolean | false   | Whether the checkbox is checked or not |
 */
export class Checkbox implements m.ClassComponent<m.Attributes> {
    static checkboxIdCounter = 0;
    id: string;
    
    oninit(vnode: any) {
        this.id = vnode.attrs.id ? vnode.attrs.id : '__checkbox__' + ++Checkbox.checkboxIdCounter;
    }

    oncreate(vnode: any) {
        componentHandler.upgradeElement(vnode.dom);
    }

    view(vnode: m.Vnode<m.Attributes, this>) {
        let { label, id, ripple, ...attrs } = vnode.attrs;

        return m(`label[for="${this.id}"].mdl-checkbox.mdl-js-checkbox` + (ripple || ripple === undefined ? '.mdl-js-ripple-effect' : ''), { className: ripple ? '' : '' },
            m(`input[type="checkbox"].mdl-checkbox__input#${this.id}`, attrs),
            m('span.mdl-checkbox__label', label))
    }
}
