import * as m from 'mithril';
import 'material-design-lite';
import * as stream from 'mithril/stream';

/**
 * A materialize slider.
 * 
 * ## Attributes
 * | attribute | type    | default | description |
 * |-----------|---------|---------|-------------|
 * | value     | number  | 0       | The slider value. |
 * | min       | number  | 0       | The slider minimum value. |
 * | max       | number  | 100     | The slider maximum value. |
 */
export class Slider implements m.ClassComponent<m.Attributes> {
    min = stream(0);
    max = stream(100);
    value = stream(0);

    oninit(vnode: m.Vnode<m.Attributes, this>) {
        if(vnode.attrs.min)
            this.min(vnode.attrs.min);
        if(vnode.attrs.max)
            this.max(vnode.attrs.max);
        if(vnode.attrs.value)
            this.value(vnode.attrs.value);
    }

    oncreate(vnode: m.VnodeDOM<m.Attributes, this>) {
        componentHandler.upgradeElement(<HTMLElement>vnode.dom);
    }

    view(_vnode: m.Vnode<m.Attributes, this>) {
        return m('input[type="range"].mdl-slider.mdl-js-slider', {
                value: this.value(),
                min: this.min(),
                max: this.max()
            });
    }
}