import * as m from 'mithril';

/**
 * Represents a material design spacer for laying out of elements.
 */
export class LayoutSpacer implements m.ClassComponent<m.Attributes> {
    view(_vnode: m.Vnode<m.Attributes, this>) {
        return m('.mdl-layout-spacer');
    }
}