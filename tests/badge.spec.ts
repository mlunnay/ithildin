import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Badge } from '../src/badge';
import { MithrilQuery } from './util/mithrilQuery';

describe('Badge Component', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(m(Badge, 'add'));
        expect(cmp).selectorToHave('span.mdl-badge:contains(add)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('icon', () => {
        const cmp = new MithrilQuery(m(Badge, { icon: true }, 'add'));
        expect(cmp).selectorToHave('div.material-icons.mdl-badge:contains(add)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('overlap', () => {
        const cmp = new MithrilQuery(m(Badge, { overlap: true }, 'add'));
        expect(cmp).selectorToHave('span.mdl-badge--overlap.mdl-badge:contains(add)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('nobackground', () => {
        const cmp = new MithrilQuery(m(Badge, { nobackground: true }, 'add'));
        expect(cmp).selectorToHave('span.mdl-badge--no-background.mdl-badge:contains(add)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('data attribute', () => {
        const cmp = new MithrilQuery(m(Badge, { data: 42 }, 'add'));
        expect(cmp).selectorToHave('span[data-badge="42"]', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('data-badge attribute', () => {
        const cmp = new MithrilQuery(m(Badge, { 'data-badge': 42 }, 'add'));
        expect(cmp).selectorToHave('span[data-badge="42"]', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('data-badge and data attribute', () => {
        const cmp = new MithrilQuery(m(Badge, { 'data-badge': 42, data: 1 }, 'add'));
        expect(cmp).selectorToHave('span[data-badge="42"]', 1);
        expect(cmp).not.selectorToHave('span[data-badge="1"]', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});