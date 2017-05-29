import * as m from 'mithril';

/**
 * A materialize spinner.
 * 
 * ## Attributes
 * | attribute | type  | default   | description |
 * |-----------|-------|-----------|------------|
 * | active    | boolean | true | Makes the spinner visible and animated |
 * | singleColor | boolean | false | Uses a single (primary palette) color instead of changing colors |
 */
export class Spinner implements m.ClassComponent<m.Attributes> {
    /** the equivelant of MDL_SPINNER_LAYER_COUNT */
    static mdlSpinnerLayerCount = 4;

    view(vnode: m.Vnode<m.Attributes, this>) {
        var classes = '.mdl-spinner';
        if(vnode.attrs.active || vnode.attrs.active === undefined)
            classes += '.is-active';
        if(vnode.attrs.singleColor)
            classes += '.mdl-spinner--single-color'
        classes += '.is-upgraded';

        var layers: number[] = [];
        for(var i = 1; i <= Spinner.mdlSpinnerLayerCount; i++)
            layers.push(i);

        return m(classes,  { 'data-upgraded': ",MaterialProgress" },
            layers.map((i) => {
                return m('div.mdl-spinner__layer.mdl-spinner__layer-' + i,
                    m('div.mdl-spinner__circle-clipper.mdl-spinner__left', m('div.mdl-spinner__circle')),
                    m('div.mdl-spinner__gap-patch', m('div.mdl-spinner__circle')),
                    m('div.mdl-spinner__circle-clipper.mdl-spinner__right', m('div.mdl-spinner__circle'))
                )
            })
        );
    }
}