import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Radio } from '../src/radio';
import { MithrilQuery } from './util/mithrilQuery';

beforeEach(() => {
        // always have consistent auto id
        Radio.radioIdCounter = 0;
    });
describe('Radio', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(m(Radio, { label: 'radio label' }));
        expect(cmp).selectorToHave('label[for="__radio__1"][data-upgraded=",MaterialRadio,MaterialRipple"].mdl-radio.mdl-js-radio.mdl-js-ripple-effect.is-upgraded', 1);
        expect(cmp).selectorToHave('label > input[type="radio"].mdl-radio__button#__radio__1', 1);
        expect(cmp).selectorToHave('label > span.mdl-radio__label:contains(radio label)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('id', () => {
        const cmp = new MithrilQuery(m(Radio, { label: 'radio label', id: 'radio_id' }));
        expect(cmp).selectorToHave('label[for="radio_id"]', 1);
        expect(cmp).selectorToHave('label > input[type="radio"]#radio_id', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('checked', () => {
        const cmp = new MithrilQuery(m(Radio, { label: 'radio label', checked: true }));
        expect(cmp).selectorToHave('label > input[type="radio"][checked].mdl-radio__button#__radio__1', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('ripple (false)', () => {
        const cmp = new MithrilQuery(m(Radio, { label: 'radio label', ripple: false }));
        expect(cmp).not.selectorToHave('label[for="__radio__1"].mdl-js-ripple-effect', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});