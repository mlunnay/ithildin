import * as m from 'mithril';
import 'material-design-lite';

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
    oncreate(vnode: m.VnodeDOM<m.Attributes, this>) {
        componentHandler.upgradeElement(<HTMLElement>vnode.dom);
    }

    view(vnode: m.Vnode<m.Attributes, this>) {
        return m('input[type=range].mdl-slider.mdl-js-slider', 
            {
                min: vnode.attrs.min || 0,
                max: vnode.attrs.max || 100,
                value: vnode.attrs.value || 0,
            }
        );
    }
}