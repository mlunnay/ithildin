import * as m from 'mithril';
import 'material-design-lite';

/**
 * A materialize icon toggle.
 * 
 * ## Attributes
 * | attribute | type  | default   | description |
 * |-----------|-------|-----------|------------|
 * | ripple    | boolean | true    | Applies ripple click effect |
 * | checked   | boolean | false   | Whether the checkbox is checked or not |
 */
export class IconToggle implements m.ClassComponent<m.Attributes> {
    static icontoggleIdCounter = 0;
    id: string;
    
    oninit(vnode: any) {
        this.id = vnode.attrs.id ? vnode.attrs.id : '__icon-toggle__' + ++IconToggle.icontoggleIdCounter;
    }

    oncreate(vnode: any) {
        componentHandler.upgradeElement(vnode.dom);
    }

    view(vnode: m.Vnode<m.Attributes, this>) {
        let { id, ripple, ...attrs } = vnode.attrs;

        return m(`label[for="${this.id}"].mdl-icon-toggle.mdl-js-icon-toggle` + (ripple || ripple === undefined ? '.mdl-js-ripple-effect' : ''), { className: ripple ? '' : '' },
            m(`input[type="checkbox"].mdl-icon-toggle__input#${this.id}`, attrs),
            m('i.mdl-icon-toggle__label.material-icons', vnode.children))
    }
}
