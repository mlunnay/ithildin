import { } from 'jest';
import * as m from 'mithril';
import { tidy } from './util/snapshots';
import { Chip } from '../src/chip';

describe('Chip Component', () => {
    it('no options', () => {
        const cmp = m(Chip, 'Basic chip');
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<span class="mdl-chip"><span class="mdl-chip__text">Basic chip</span></span>');
        expect(html).toMatchSnapshot();
    });
    it('button', () => {
        const cmp = m(Chip, { element: 'button' }, 'Basic chip');
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<button class="mdl-chip"><span class="mdl-chip__text">Basic chip</span></button>');
        expect(html).toMatchSnapshot();
    });
    it('deletable (true)', () => {
        const cmp = m(Chip, { deletable: true }, 'Deletable chip');
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('class="mdl-chip mdl-chip--deletable"');
        expect(html).toContain('<button class="mdl-chip__action"')
        expect(html).toMatchSnapshot();
    });
    it('deletable (ondelete)', () => {
        const cmp = m(Chip, { deletable: true, ondelete: () => alert('delete') }, 'Deletable chip');
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('class="mdl-chip mdl-chip--deletable"');
        expect(html).toContain('<button class="mdl-chip__action"');
        expect(html).toMatchSnapshot();
    });
    it('deletable (deletelink)', () => {
        const cmp = m(Chip, { deletable: true, deletelink: '#' }, 'Deletable chip');
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<a href="#" class="mdl-chip__action"');
        expect(html).toMatchSnapshot();
    });
    it('contact', () => {
        const cmp = m(Chip, { contact: m('img', { src: "img.png" }) }, 'Contact chip');
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<img src="img.png" class="mdl-chip__contact"');
        expect(html).toMatchSnapshot();
    });
});