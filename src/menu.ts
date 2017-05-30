import * as m from 'mithril';
import 'material-design-lite';
import { Button } from './button';
import { Icon } from './icon';

/**
 * A materialize menu.
 * 
 * ## Attributes
 * | attribute | type  | default   | description |
 * |-----------|-------|-----------|------------|
 * | id        | string |          | The id to assign the element, if not set generates a menu_ id |
 * | icon      | string | 'more_vert' | The name of the icon to use for the menu button |
 * | align     | string | 'bottom-left' | Positions menu, one of 'bottom-left', 'bottom-right', 'top-left', 'top-right' |
 * 
 * A child with the attribute divider = true will have the *mdl-menu__item--full-bleed-divider* class added to its list item.
 */
export class Menu implements m.ClassComponent<m.Attributes> {
    static menuIdCounter = 0;

    oncreate(vnode: any) {
        componentHandler.upgradeElement(vnode.instance.children[1].dom);
    }

    view(vnode: m.Vnode<m.Attributes, this>) {
        var attrs: m.Attributes = (<any>Object).assign({}, vnode.attrs);
        attrs.id = attrs.id || '__menu__' + ++Menu.menuIdCounter;
        attrs.icon = true;
        attrs.ripple = false;
        
        var children = vnode.children || [];
        if(!Array.isArray(children))
            children = [children];
        
        var ulClasses = '.mdl-menu.mdl-js-menu';
        if(vnode.attrs.align === 'bottom-right')
            ulClasses += '.mdl-menu--bottom-right'
        else if(vnode.attrs.align === 'top-left')
            ulClasses += '.mdl-menu--top-left'
        else if(vnode.attrs.align === 'top-right')
            ulClasses += '.mdl-menu--top-right'

        return [
            m(Button, attrs, m(Icon, vnode.attrs.icon || 'more_vert')),
            m('ul' + ulClasses, { 'for': attrs.id },
                children.map((i: any) => {
                    let attrs: any = {}
                    let viClasses = '.mdl-menu__item';
                    if(i.attrs && i.attrs.disabled)
                        attrs.disabled = true;
                    if(i.attrs && i.attrs.divider)
                        viClasses += '.mdl-menu__item--full-bleed-divider';

                    return m('li' + viClasses, attrs, i);
                })
            )
        ];
    }
}