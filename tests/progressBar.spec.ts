import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { ProgressBar } from '../src/progressBar';
import { MithrilQuery } from './util/mithrilQuery';

describe('ProgressBar', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(ProgressBar);
        expect(cmp).selectorToHave('div[data-upgraded=",MaterialProgress"].mdl-progress.is-upgraded', 1);
        expect(cmp).selectorToHave('div[style="width: 0%;"].progressbar.bar.bar1', 1);
        expect(cmp).selectorToHave('div[style="width: 100%;"].bufferbar.bar.bar2', 1);
        expect(cmp).selectorToHave('div[style="width: 0%;"].auxbar.bar.bar3', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('inderterminant', () => {
        const cmp = new MithrilQuery(m(ProgressBar, { indeterminate: true }));
        expect(cmp).selectorToHave('div[data-upgraded=",MaterialProgress"].mdl-progress.is-upgraded.mdl-progress--indeterminate', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('progress', () => {
        const cmp = new MithrilQuery(m(ProgressBar, { progress: 50 }));
        expect(cmp).selectorToHave('div[style="width: 50%;"].progressbar.bar.bar1', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('buffer', () => {
        const cmp = new MithrilQuery(m(ProgressBar, { buffer: 60 }));
        expect(cmp).selectorToHave('div[style="width: 60%;"].bufferbar.bar.bar2', 1);
        expect(cmp).selectorToHave('div[style="width: 40%;"].auxbar.bar.bar3', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('set progress', (done) => {
        const progressBar = <m.VnodeDOM<any, any>>m(ProgressBar);
        const cmp = new MithrilQuery(progressBar);
        progressBar.state.progress = 50;
        expect.assertions(1);
        setTimeout(() => {
            cmp.redraw();
            expect(cmp.vnode.instance.children[0].attrs['style'].width).toBe('50%');
            done();
        }, Math.floor(1000 / 60));
    });
    it('set buffer', (done) => {
        const progressBar = <m.VnodeDOM<any, any>>m(ProgressBar);
        const cmp = new MithrilQuery(progressBar);
        progressBar.state.buffer = 60
        expect.assertions(2);
        setTimeout(() => {
            cmp.redraw();
            expect(cmp.vnode.instance.children[1].attrs['style'].width).toBe('60%');
            expect(cmp.vnode.instance.children[2].attrs['style'].width).toBe('40%');
            done();
        }, Math.floor(1000 / 60));
    });
});