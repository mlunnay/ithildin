import * as m from 'mithril';
import * as stream from 'mithril/stream';

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
    progressStream = stream(0);
    bufferStream = stream(100);
    auxStream = this.bufferStream.map((v) => 100 - v);;
    indeterminateStream = stream(false);

    get progress() { return this.progressStream(); }
    set progress(value: number) {
        this.progressStream(value);
        m.redraw();
    }

    get buffer() { return this.bufferStream(); }
    set buffer(value: number) {
        this.bufferStream(value);
        m.redraw();
    }

    get indeterminate() { return this.indeterminateStream(); }
    set indeterminate(value: boolean) {
        this.indeterminateStream(value);
        m.redraw();
    }

    oninit(vnode: m.Vnode<m.Attributes, this>) {
        if (vnode.attrs.progress)
            this.progressStream(vnode.attrs.progress);
        if (vnode.attrs.buffer)
            this.bufferStream(vnode.attrs.buffer);
        if (vnode.attrs.indeterminate)
            this.indeterminateStream(true);
    }
    
    oncreate(vnode: m.VnodeDOM<m.Attributes, this>) {
        (<any>vnode.dom).setProgress = (value: number) => {
            this.progressStream(value);
            m.redraw();
        }

        (<any>vnode.dom).setBuffer = (value: number) => {
            this.bufferStream(value);
            m.redraw();
        }
    }

    view(_vnode: m.Vnode<m.Attributes, this>) {
        return m('div[data-upgraded=",MaterialProgress"].mdl-progress.is-upgraded', { className: this.indeterminateStream() ? ' mdl-progress--indeterminate' : '' },
            m('div.progressbar.bar.bar1', { style: { width: this.progressStream() + '%' } }),
            m('div.bufferbar.bar.bar2', { style: { width: this.bufferStream() + '%' } }),
            m('div.auxbar.bar.bar3', { style: { width: this.auxStream() + '%' } })
        );
    }
}

