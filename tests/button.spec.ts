import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Button } from '../src/button';
import { MithrilQuery } from './util/mithrilQuery';

describe('Button Component', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(Button);
        expect(cmp).selectorToHave('button[data-upgraded=",MaterialButton,MaterialRipple"].mdl-button.mdl-js-button.mdl-js-ripple-effect', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('element', () => {
        const cmp = new MithrilQuery(m(Button, { 'element': 'a'}));
        expect(cmp).selectorToHave('a[data-upgraded=",MaterialButton,MaterialRipple"].mdl-button.mdl-js-button.mdl-js-ripple-effect', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('with child string', () => {
        const cmp = new MithrilQuery(m(Button, 'Content'));
        expect(cmp).selectorToContain('Content');
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('no ripple', () => {
        const cmp = new MithrilQuery(m(Button, { ripple: false }));
        expect(cmp).not.selectorToHave('.mdl-js-ripple-effect', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('raised', () => {
        const cmp = new MithrilQuery(m(Button, { raised: true }));
        expect(cmp).selectorToHave('.mdl-button--raised', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('raised with fab, minifab and icon', () => {
        const cmp = new MithrilQuery(m(Button, { raised: true, fab: true, minifab: true, icon: true }));
        expect(cmp).selectorToHave('.mdl-button--raised', 1);
        expect(cmp).not.selectorToHave('.mdl-button--fab');
        expect(cmp).not.selectorToHave('.mdl-button--mini-fab');
        expect(cmp).not.selectorToHave('.mdl-button--mini-fab');
        expect(cmp).not.selectorToHave('.mdl-button--mini-fab');
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('fab', () => {
        const cmp = new MithrilQuery(m(Button, { fab: true }));
        expect(cmp).selectorToHave('.mdl-button--fab', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('minifab', () => {
        const cmp = new MithrilQuery(m(Button, { minifab: true }));
        expect(cmp).selectorToHave('.mdl-button--fab', 1);
        expect(cmp).selectorToHave('.mdl-button--mini-fab', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('icon', () => {
        const cmp = new MithrilQuery(m(Button, { icon: true }));
        expect(cmp).selectorToHave('.mdl-button--icon', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('color (colored)', () => {
        const cmp = new MithrilQuery(m(Button, { color: 'colored' }));
        expect(cmp).selectorToHave('.mdl-button--colored', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('color (primary)', () => {
        const cmp = new MithrilQuery(m(Button, { color: 'primary' }));
        expect(cmp).selectorToHave('.mdl-button--primary', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('color (accent)', () => {
        const cmp = new MithrilQuery(m(Button, { color: 'accent' }));
        expect(cmp).selectorToHave('.mdl-button--accent', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});