import * as m from 'mithril';

/**
 * A material badge.
 * 
 * ## Attributes
 * | attribute | type    | default   | description |
 * |-----------|---------|-----------|------------|
 * | icon      | boolean | false     | Treats the child element as a material icon definition |
 * | overlap   | boolean | false     | Make the badge overlap with its container |
 * | nobackground | boolean | false  | Applies open-circle effect to badge |
 * | data | string |   | Assigns string value to badge. This is transformed to data-badge attribute |
 * | data-badge | string |   | Assigns string value to badge |
 */
export class Badge implements m.ClassComponent<m.Attributes> {
    view(vnode: m.Vnode<m.Attributes, this>) {
        // add data-badge if it is not already in vnode.attrs and vnode.attrs.data is set.
        var attrs = (<any>Object).assign({}, vnode.attrs, !vnode.attrs['data-badge'] && vnode.attrs.data ? {'data-badge': vnode.attrs.data} : {});
        var view: string;
        if(attrs.icon) {
            view = 'div.material-icons.mdl-badge';
            delete attrs.icon;
        }
        else
            view = 'span.mdl-badge';
        if(attrs.overlap)
            view += '.mdl-badge--overlap';
        if(attrs.nobackground)
            view += '.mdl-badge--no-background';
        
        
        return m(view, attrs, vnode.children);
    }
}