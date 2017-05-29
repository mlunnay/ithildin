import * as m from 'mithril';
import 'material-design-lite';

/**
 * A materialize Button.
 * 
 * ## Attributes
 * | attribute | type    | default   | description |
 * |-----------|---------|-----------|------------|
 * | element   | string  | 'button'  | The base element type for the button |
 * | raised    | boolean | false     | makes the button raised |
 * | ripple    | boolean | true      | adds the ripple effect to the button |
 * | fab       | boolean | false     | makes the button a floating action button, mutually exclusive of *raised* and *icon* |
 * | minifab   | boolean | false     | makes the button a mini floating action button, mutually excluive of *raised* and *icon* |
 * | icon      | boolean | false     | Applies icon (small plain circular) display effect, mutually exclusive of *raised*, *fab* and *minifab* |
 * | color     | string  | undefined | this makes the button colored. Valide values are:</br> colored: applies colored display effect (primary or accent color, depending on the type of button)</br> primary: applies primary color display effect</br> accent: applies accent color display effect |
 */
export class Button implements m.ClassComponent<m.Attributes> {
    oncreate(vnode: m.VnodeDOM<m.Attributes, this>) {
        componentHandler.upgradeElement(<HTMLElement>vnode.dom);
    }

    view(vnode: m.Vnode<m.Attributes, this>) {
        var classes = '.mdl-button.mdl-js-button';
        if(vnode.attrs.raised)
            classes += '.mdl-button--raised';
        if(vnode.attrs.ripple || vnode.attrs.ripple === undefined)
            classes += '.mdl-js-ripple-effect';
        if(vnode.attrs.fab && !vnode.attrs.raised)
            classes += '.mdl-button--fab';
        if(vnode.attrs.minifab && !vnode.attrs.raised) {
            if(vnode.attrs.fab === undefined)
                classes += '.mdl-button--fab';
            classes += '.mdl-button--mini-fab';
        }
        if(vnode.attrs.icon && !vnode.attrs.raised && !(vnode.attrs.fab || vnode.attrs.minifab))
            classes += '.mdl-button--icon';
        if(vnode.attrs.color === 'colored')
            classes += '.mdl-button--colored';
        if(vnode.attrs.color === 'primary')
            classes += '.mdl-button--primary';
        if(vnode.attrs.color === 'accent')
            classes += '.mdl-button--accent';
        
        return m((vnode.attrs.element || 'button') + classes, vnode.attrs, vnode.children);
    }
} 