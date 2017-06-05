import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Spinner } from '../src/spinner';
import { MithrilQuery } from './util/mithrilQuery'

describe('Spinner', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(Spinner);
        expect(cmp).selectorToHave('div[data-upgraded=",MaterialSpinner"].mdl-spinner.is-active.is-upgraded', 1);
        for(var i = 1; i < Spinner.mdlSpinnerLayerCount; i++)
            expect(cmp).selectorToHave('div.mdl-spinner__layer.mdl-spinner__layer-' + i);
        expect(cmp).selectorToHave('div > div > div.mdl-spinner__circle-clipper.mdl-spinner__left', Spinner.mdlSpinnerLayerCount);
        expect(cmp).selectorToHave('div > div > div > div.mdl-spinner__circle', 3 * Spinner.mdlSpinnerLayerCount);
        expect(cmp).selectorToHave('div > div > div.mdl-spinner__gap-patch', Spinner.mdlSpinnerLayerCount);
        expect(cmp).selectorToHave('div > div > div.mdl-spinner__circle-clipper.mdl-spinner__right', Spinner.mdlSpinnerLayerCount);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('active (false)', () => {
        const cmp = new MithrilQuery(Spinner);
        expect(cmp).not.selectorToHave('div[data-upgraded=",MaterialSpinner"]is-active', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('single color', () => {
        const cmp = new MithrilQuery(Spinner);
        expect(cmp).not.selectorToHave('div[data-upgraded=",MaterialSpinner"].mdl-spinner.is-active.is-upgraded.mdl-spinner--single-color', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('set active(false)', (done) => {
        const spinner = <m.VnodeDOM<any, any>>m(Spinner);
        const cmp = new MithrilQuery(spinner);
        spinner.state.active(false);
        expect.assertions(1);
        setTimeout(() => {
            cmp.redraw();
            expect(cmp.vnode.instance.attrs.className).not.toContain('is-active');
            done();
        }, Math.floor(1000 / 60));
    });
});
