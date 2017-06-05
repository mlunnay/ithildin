import * as m from 'mithril';
import 'material-design-lite';

/**
 * A materialize radio button.
 * 
 * ## Attributes
 * | attribute | type  | default   | description |
 * |-----------|-------|-----------|------------|
 * | label     | string |          | The label for the radio button |
 * | ripple    | boolean | true    | Applies ripple click effect |
 * | checked   | boolean | false   | Whether the radio button is checked or not |
 */
export class Radio implements m.ClassComponent<m.Attributes> {
    static radioIdCounter = 0;
    id: string;
    
    oninit(vnode: any) {
        this.id = vnode.attrs.id ? vnode.attrs.id : '__radio__' + ++Radio.radioIdCounter;
    }

    oncreate(vnode: any) {
        componentHandler.upgradeElement(vnode.dom);
    }

    view(vnode: m.Vnode<m.Attributes, this>) {
        let { label, id, ripple, ...attrs } = vnode.attrs;

        return m(`label[for="${this.id}"].mdl-radio.mdl-js-radio` + (ripple || ripple === undefined ? '.mdl-js-ripple-effect' : ''), { className: ripple ? '' : '' },
            m(`input[type="radio"].mdl-radio__button#${this.id}`, attrs),
            m('span.mdl-radio__label', label))
    }
}
