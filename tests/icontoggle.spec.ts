import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { IconToggle } from '../src/icontoggle';
import { MithrilQuery } from './util/mithrilQuery';

beforeEach(() => {
        // always have consistent auto id
        IconToggle.icontoggleIdCounter = 0;
    });
describe('IconToggle', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(m(IconToggle, 'favorite'));
        expect(cmp).selectorToHave('label[for="__icon-toggle__1"][data-upgraded=",MaterialIconToggle,MaterialRipple"].mdl-icon-toggle.mdl-js-icon-toggle.mdl-js-ripple-effect.is-upgraded', 1);
        expect(cmp).selectorToHave('label > input[type="checkbox"].mdl-icon-toggle__input#__icon-toggle__1', 1);
        expect(cmp).selectorToHave('label > i.mdl-icon-toggle__label.material-icons:contains(favorite)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('id', () => {
        const cmp = new MithrilQuery(m(IconToggle, { id: 'icontoggle_id' }, 'favorite'));
        expect(cmp).selectorToHave('label[for="icontoggle_id"]', 1);
        expect(cmp).selectorToHave('label > input[type="checkbox"]#icontoggle_id', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('checked', () => {
        const cmp = new MithrilQuery(m(IconToggle, { checked: true }, 'favorite'));
        expect(cmp).selectorToHave('label > input[type="checkbox"][checked].mdl-icon-toggle__input#__icon-toggle__1', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('ripple (false)', () => {
        const cmp = new MithrilQuery(m(IconToggle, { ripple: false }, 'favorite'));
        expect(cmp).not.selectorToHave('label[for="__icon-toggle__1"].mdl-js-ripple-effect', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});