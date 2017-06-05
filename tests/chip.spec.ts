import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Chip } from '../src/chip';
import { MithrilQuery } from './util/mithrilQuery';

describe('Chip Component', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(m(Chip, 'Basic chip'));
        expect(cmp).selectorToHave('span.mdl-chip span.mdl-chip__text:contains(Basic chip)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('button', () => {
        const cmp = new MithrilQuery(m(Chip, { element: 'button' }, 'Basic chip'));
        expect(cmp).selectorToHave('button.mdl-chip span.mdl-chip__text:contains(Basic chip)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('deletable (true)', () => {
        const cmp = new MithrilQuery(m(Chip, { deletable: true }, 'Basic chip'));
        expect(cmp).selectorToHave('span.mdl-chip.mdl-chip--deletable button.mdl-chip__action', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('deletable (ondelete)', () => {
        const cmp = new MithrilQuery(m(Chip, { deletable: true, ondelete: () => alert('delete') }, 'Basic chip'));
        expect(cmp).selectorToHave('span.mdl-chip span.mdl-chip__text:contains(Basic chip)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('deletable (deletelink)', () => {
        const cmp = new MithrilQuery(m(Chip, { deletable: true, deletelink: '#' }, 'Basic chip'));
        expect(cmp).selectorToHave('a[href="#"].mdl-chip__action', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('contact', () => {
        const cmp = new MithrilQuery(m(Chip, { contact: m('img', { src: "img.png" }) }, 'Contact chip'));
        expect(cmp).selectorToHave('img[src="img.png"].mdl-chip__contact', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});