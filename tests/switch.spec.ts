import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Switch } from '../src/switch';
import { MithrilQuery } from './util/mithrilQuery';

beforeEach(() => {
        // always have consistent auto id
        Switch.switchIdCounter = 0;
    });
describe('Switch', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(m(Switch, { label: 'switch label' }));
        expect(cmp).selectorToHave('label[for="__switch__1"][data-upgraded=",MaterialSwitch,MaterialRipple"].mdl-switch.mdl-js-switch.mdl-js-ripple-effect.is-upgraded', 1);
        expect(cmp).selectorToHave('label > input[type="checkbox"].mdl-switch__input#__switch__1', 1);
        expect(cmp).selectorToHave('label > span.mdl-switch__label:contains(switch label)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('id', () => {
        const cmp = new MithrilQuery(m(Switch, { label: 'switch label', id: 'switch_id' }));
        expect(cmp).selectorToHave('label[for="switch_id"]', 1);
        expect(cmp).selectorToHave('label > input[type="checkbox"]#switch_id', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('checked', () => {
        const cmp = new MithrilQuery(m(Switch, { label: 'switch label', checked: true }));
        expect(cmp).selectorToHave('label > input[type="checkbox"][checked].mdl-switch__input#__switch__1', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('ripple (false)', () => {
        const cmp = new MithrilQuery(m(Switch, { label: 'switch label', ripple: false }));
        expect(cmp).not.selectorToHave('label[for="__switch__1"].mdl-js-ripple-effect', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});