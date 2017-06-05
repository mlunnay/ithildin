import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Checkbox } from '../src/checkbox';
import { MithrilQuery } from './util/mithrilQuery';

beforeEach(() => {
        // always have consistent auto id
        Checkbox.checkboxIdCounter = 0;
    });
describe('Checkbox', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(m(Checkbox, { label: 'checkbox label' }));
        expect(cmp).selectorToHave('label[for="__checkbox__1"][data-upgraded=",MaterialCheckbox,MaterialRipple"].mdl-checkbox.mdl-js-checkbox.mdl-js-ripple-effect.is-upgraded', 1);
        expect(cmp).selectorToHave('label > input[type="checkbox"].mdl-checkbox__input#__checkbox__1', 1);
        expect(cmp).selectorToHave('label > span.mdl-checkbox__label:contains(checkbox label)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('id', () => {
        const cmp = new MithrilQuery(m(Checkbox, { label: 'checkbox label', id: 'checkbox_id' }));
        expect(cmp).selectorToHave('label[for="checkbox_id"]', 1);
        expect(cmp).selectorToHave('label > input[type="checkbox"]#checkbox_id', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('checked', () => {
        const cmp = new MithrilQuery(m(Checkbox, { label: 'checkbox label', checked: true }));
        expect(cmp).selectorToHave('label > input[type="checkbox"][checked].mdl-checkbox__input#__checkbox__1', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('ripple (false)', () => {
        const cmp = new MithrilQuery(m(Checkbox, { label: 'checkbox label', ripple: false }));
        expect(cmp).not.selectorToHave('label[for="__checkbox__1"].mdl-js-ripple-effect', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});