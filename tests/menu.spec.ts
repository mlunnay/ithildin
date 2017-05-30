import { } from 'jest';
import * as m from 'mithril';
import { tidy } from './util/snapshots';
import { Menu } from '../src/menu';

describe('Menu', () => {
    beforeEach(() => {
        // always have consistent auto menu id
        Menu.menuIdCounter = 0;
    });
    it('no options', () => {
        const cmp = m(Menu);
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<button');
        expect(html).toContain('id="__menu__1"');
        expect(html).toContain('<i class=\"material-icons\">more_vert</i>');
        expect(html).toContain('<ul for="__menu__1"');
        expect(html).toMatchSnapshot();
    });
    it('id', () => {
        const cmp = m(Menu, { id: '__menu__id' });
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('id="__menu__id"');
        expect(html).toMatchSnapshot();
    });
    it('icon', () => {
        const cmp = m(Menu, { icon: 'add' });
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<i class=\"material-icons\">add</i>');
        expect(html).toMatchSnapshot();
    });
    it('children', () => {
        const cmp = m(Menu, ['one', 'two']);
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<li class="mdl-menu__item');
        expect(html).toMatchSnapshot();
    });
    it('disabled child', () => {
        const cmp = m(Menu, m('div', { disabled: true }));
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<li disabled');
        expect(html).toMatchSnapshot();
    });
    it('menu divider child', () => {
        const cmp = m(Menu, m('div', { divider: true }));
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('mdl-menu__item--full-bleed-divider');
        expect(html).toMatchSnapshot();
    });
    describe('align', () => {
        it('no option', () => {
            const cmp = m(Menu);
            const html = tidy(cmp, { wrap: 0 });
            expect(html).not.toContain('mdl-menu--top');
            expect(html).not.toContain('mdl-menu--bottom');
            expect(html).toMatchSnapshot();
        });
        it('bottom-left', () => {
            const cmp = m(Menu, { align: 'bottom-left' });
            const html = tidy(cmp, { wrap: 0 });
            expect(html).not.toContain('mdl-menu--top-left');
            expect(html).not.toContain('mdl-menu--bottom');
            expect(html).toMatchSnapshot();
        });
        it('bottom-right', () => {
            const cmp = m(Menu, { align: 'bottom-right' });
            const html = tidy(cmp, { wrap: 0 });
            expect(html).toContain('mdl-menu--bottom-right');
            expect(html).toMatchSnapshot();
        });
        it('top-left', () => {
            const cmp = m(Menu, { align: 'top-left' });
            const html = tidy(cmp, { wrap: 0 });
            expect(html).toContain('mdl-menu--top-left');
            expect(html).toMatchSnapshot();
        });
        it('top-right', () => {
            const cmp = m(Menu, { align: 'top-right' });
            const html = tidy(cmp, { wrap: 0 });
            expect(html).toContain('mdl-menu--top-right');
            expect(html).toMatchSnapshot();
        });
    });
});