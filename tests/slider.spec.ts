import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Slider } from '../src/slider';
import { MithrilQuery } from './util/mithrilQuery';

describe('Slider', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(Slider, true);
        expect(cmp).selectorToHave('input[type="range"].mdl-slider.mdl-js-slider.is-lowest-value', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('value', () => {
        const cmp = new MithrilQuery(m(Slider, { value: 50 }), true);
        expect(cmp).selectorToHave('input[type="range"][value="50"]', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('min', () => {
        const cmp = new MithrilQuery(m(Slider, { min: 50 }), true);
        expect(cmp).selectorToHave('input[type="range"][min="50"].mdl-slider.mdl-js-slider.is-upgraded', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('max', () => {
        const cmp = new MithrilQuery(m(Slider, { max: 50 }), true);
        expect(cmp).selectorToHave('input[type="range"][max="50"].mdl-slider.mdl-js-slider.is-upgraded', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});