import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Menu } from '../src/menu';
import { MithrilQuery } from './util/mithrilQuery';
beforeEach(() => {
        // always have consistent auto menu id
        Menu.menuIdCounter = 0;
    });
describe('Menu', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(Menu);
        expect(cmp).selectorToHave('button#__menu__1', 1);
        expect(cmp).selectorToHave('i.material-icons:contains(more_vert)', 1);
        expect(cmp).selectorToHave('ul[for="__menu__1"]', 1);
        expect(cmp).not.selectorToHave('li');
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('id', () => {
        const cmp = new MithrilQuery(m(Menu, { id: '__menu__id' }));
        expect(cmp).selectorToHave('button#__menu__id', 1);
        expect(cmp).selectorToHave('ul[for="__menu__id"]', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('icon', () => {
        const cmp = new MithrilQuery(m(Menu, { icon: 'add' }));
        expect(cmp).selectorToHave('i.material-icons:contains(add)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('children', () => {
        const cmp = new MithrilQuery(m(Menu, ['one', 'two']));
        expect(cmp).selectorToHave('li.mdl-menu__item:contains(one)', 1);
        expect(cmp).selectorToHave('li.mdl-menu__item:contains(two)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('disabled child', () => {
        const cmp = new MithrilQuery(m(Menu, m('div', { disabled: true })));
        expect(cmp).selectorToHave('li[disabled]', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('menu divider child', () => {
        const cmp = new MithrilQuery(m(Menu, m('div', { divider: true })));
        expect(cmp).selectorToHave('li.mdl-menu__item--full-bleed-divider', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    describe('align', () => {
        it('no option', () => {
            const cmp = new MithrilQuery(Menu);
            expect(cmp).not.selectorToHave('ul.mdl-menu--top.mdl-menu--top-right.mdl-menu--bottom-right', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('bottom-left', () => {
            const cmp = new MithrilQuery(m(Menu, { align: 'bottom-left' }));
            expect(cmp).not.selectorToHave('ul.mdl-menu--top-left.mdl-menu--top-right.mdl-menu--bottom-right', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('bottom-right', () => {
            const cmp = new MithrilQuery(m(Menu, { align: 'bottom-right' }));
            expect(cmp).not.selectorToHave('ul.mdl-menu--top-left.mdl-menu--top-right', 1);
            expect(cmp).selectorToHave('ul.mdl-menu--bottom-right', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('top-left', () => {
            const cmp = new MithrilQuery(m(Menu, { align: 'top-left' }));
            expect(cmp).not.selectorToHave('ul.mdl-menu--bottom-right.mdl-menu--top-right', 1);
            expect(cmp).selectorToHave('ul.mdl-menu--top-left', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('top-right', () => {
            const cmp = new MithrilQuery(m(Menu, { align: 'top-right' }));
            expect(cmp).not.selectorToHave('ul.mdl-menu--bottom-right.mdl-menu--top-left', 1);
            expect(cmp).selectorToHave('ul.mdl-menu--top-right', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
    });
});