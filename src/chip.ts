import * as m from 'mithril';
import { Icon } from './icon';

/**
 * A materialize Chip component is a small, interactive element. Chips are commonly used for contacts, text, rules, icons, and photos.
 * 
 * ## Attributes
 * | attribute | type    | default   | description |
 * |-----------|---------|-----------|------------|
 * | element   | string  | 'span'    | The base element type for the chip |
 * | deletable | boolean | false     | Makes the chip deletable |
 * | ondelete  | function |          | A callback for when the delete button is clicked, this makes the delete element a button |
 * | deletelink | string |           | A link to call when the delete button is clicked, this makes the delete a link, mutually exclusive of ondelete |
 * | contact   | string \| vnode |   | Adds the node to the chips contact |
 */
export class Chip implements m.ClassComponent<m.Attributes> {
    view(vnode: m.Vnode<m.Attributes, this>) {
        var element;
        if(vnode.attrs.element) {
            element = vnode.attrs.element;
            delete vnode.attrs.element;
        }
        var outerClasses = '.mdl-chip';
        if (vnode.attrs.deletable)
            outerClasses += '.mdl-chip--deletable';

        var button;
        if (vnode.attrs.deletable && (vnode.attrs.ondelete || !vnode.attrs.deletelink)) {

            button = m('button.mdl-chip__action', vnode.attrs.ondelete ? { onclick: vnode.attrs.ondelete } : {}, m(Icon, 'cancel'));
        }
        else if (vnode.attrs.deletable && vnode.attrs.deletelink && !vnode.attrs.ondelete)
            button = m('a.mdl-chip__action', { href: vnode.attrs.deletelink }, m(Icon, 'cancel'))
        
        var contact;
        if(vnode.attrs.contact) {
            contact = vnode.attrs.contact;
            contact.attrs.class ? contact.attrs.class += ' mdl-chip__contact' : contact.attrs.class = 'mdl-chip__contact';
            delete vnode.attrs.contact;
        }

        return m((element || 'span') + outerClasses, vnode.attrs,
                contact,
                m('span.mdl-chip__text', vnode.children),
                button
            );
    }
}