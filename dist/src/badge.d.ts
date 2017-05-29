/// <reference types="mithril" />
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
export declare class Badge implements m.ClassComponent<m.Attributes> {
    view(vnode: m.Vnode<m.Attributes, this>): m.Vnode<any, any>;
}
