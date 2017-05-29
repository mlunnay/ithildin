import * as m from 'mithril';

/**
 * A materialize progress bar.
 * 
 * ## Attributes
 * | attribute | type  | default   | description |
 * |-----------|-------|-----------|------------|
 * | indeterminate | boolean | false | Makes the progress bar indeterminate |
 * | progress  | number | false | The progess as a percentage, mutually exclusive of indeterminate |
 * | buffer    | number | false | The buffer as a percentage, mutually exclusive of indeterminate |
 */
export class ProgressBar implements m.ClassComponent<m.Attributes> {
    view(vnode: m.Vnode<m.Attributes, this>) {
        var progress = vnode.attrs.progress || 0;
        var buffer = vnode.attrs.buffer || 100;
        var aux = 100 - buffer;

        var classes = '.mdl-progress';
        if(vnode.attrs.indeterminate)
            classes += '.mdl-progress--indeterminate'
        classes += '.is-upgraded';

        return m('div' + classes, { 'data-upgraded': ",MaterialProgress" },
            m('div.progressbar.bar.bar1', { style: { width: progress + '%' } }),
            m('div.bufferbar.bar.bar2', { style: { width: buffer + '%' } }),
            m('div.auxbar.bar.bar3', { style: { width: aux + '%' } })
        );
    }
}

