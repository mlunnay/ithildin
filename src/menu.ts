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
 */
export class Menu implements m.ClassComponent<m.Attributes> {
    static menuIdCounter = 0;

    oncreate(vnode: m.VnodeDOM<m.Attributes, this>) {
        componentHandler.upgradeElement(<HTMLElement>vnode.dom);
    }

    view(vnode: m.Vnode<m.Attributes, this>) {
        var attrs: m.Attributes = (<any>Object).assign({}, vnode.attrs);
        attrs.id = attrs.id || '__menu__' + ++Menu.menuIdCounter;
        attrs.icon = true;
        attrs.ripple = false;
        
        var children = vnode.children || [];
        if(!Array.isArray(children))
            children = [children];
        
        return [
            m(Button, attrs, m(Icon, vnode.attrs.icon || 'more_vert')),
            m('ul.mdl-menu.mdl-js-menu', { 'for': attrs.id },
                children.map((i: m.Vnode<any,any>) => {
                    return m('li.mdl-menu__item', i);
                })
            )
        ];
    }
}