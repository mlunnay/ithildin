import * as m from 'mithril';
import * as stream from 'mithril/stream';

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
    active = stream(false);

    start() {
        this.active(true);
        m.redraw();
    }

    stop() {
        this.active(false);
        m.redraw();
    }

    oninit(vnode: m.Vnode<m.Attributes, this>) {
        if(vnode.attrs.active || vnode.attrs.active === undefined)
            this.active(true);
    }

    oncreate(vnode: m.VnodeDOM<m.Attributes, this>) {
        (<any>vnode.dom).start = () => {
            this.active(true);
            m.redraw();

        }

        (<any>vnode.dom).stop = () => {
            this.active(false);
            m.redraw();
        }
    }

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

        return m('div.mdl-spinner.is-upgraded',  { 
            'data-upgraded': ",MaterialSpinner",
            className: [this.active() ? 'is-active': '', vnode.attrs.singleColor ? 'mdl-spinner--single-color' : ''].join(' ').trim()
        },
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