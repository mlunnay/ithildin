/// <reference types="mithril" />
import * as m from 'mithril';
/**
 * A materialize Button.
 *
 * | attribute | type    | default   | description |
 * |-----------|---------|-----------|------------|
 * | raised    | boolean | false     | makes the button raised |
 * | ripple    | boolean | true      | adds the ripple effect to the button |
 * | fab       | boolean | false     | makes the button a floating action button, mutually exclusive of *raised* and *icon* |
 * | minifab   | boolean | false     | makes the button a mini floating action button, mutually excluive of *raised* and *icon* |
 * | icon      | boolean | false     | Applies icon (small plain circular) display effect, mutually exclusive of *raised*, *fab* and *minifab* |
 * | color     | string  | undefined | this makes the button colored. Valide values are:</br> colored: applies colored display effect (primary or accent color, depending on the type of button)</br> primary: applies primary color display effect</br> accent: applies accent color display effect |
 */
export declare class Button implements m.ClassComponent<m.Attributes> {
    view(vnode: m.Vnode<m.Attributes, this>): m.Vnode<any, any>;
}
