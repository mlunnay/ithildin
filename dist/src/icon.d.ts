/// <reference types="mithril" />
import * as m from 'mithril';
/**
 * A material icon.
 * pass the name of the material icon to display as its child.
 *
 * * ### Example
 * ```javascript
 * m(Icon, 'autorenew');
 * ```
 * will display ![autorenew][https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_autorenew_black_18px.svg]
 */
export declare class Icon implements m.ClassComponent<m.Attributes> {
    view(vnode: m.Vnode<m.Attributes, this>): m.Vnode<any, any>;
}
