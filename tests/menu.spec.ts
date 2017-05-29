import { } from 'jest';
import * as m from 'mithril';
import { tidy } from './util/snapshots';
import { Menu } from '../src/menu';

describe('Menu', () => {
    it('no options', () => {
        const cmp = m(Menu);
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<button');
        expect(html).toContain('id="__menu__1"');
        expect(html).toContain('<i class=\"material-icons\">more_vert</i>');
        expect(html).toContain('<ul for="__menu__1"');
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
        expect(html).toContain('<li class="mdl-menu__item">one\n  </li>');
        expect(html).toContain('<li class="mdl-menu__item">two\n  </li>');
        expect(html).toMatchSnapshot();
    });
});