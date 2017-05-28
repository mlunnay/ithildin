import { } from 'jest';
import * as m from 'mithril';
import { tidy } from './util/snapshots';
import { Badge } from '../src/badge';

describe('Badge Component', () => {
    //runSnapshots(snapshotTests);

    it('no options', () => {
        const cmp = m(Badge, 'add');
        const html = tidy(cmp);
        expect(html).toContain('<span class="mdl-badge">add</span>');
        expect(html).toMatchSnapshot();
    });
    it('icon', () => {
        const cmp = m(Badge, { icon: true }, 'add');
        const html = tidy(cmp);
        expect(html).toContain('<div class="material-icons mdl-badge">\n  add\n</div>');
        expect(html).toMatchSnapshot();
    });
    it('overlap', () => {
        const cmp = m(Badge, { overlap: true }, 'add');
        const html = tidy(cmp);
        expect(html).toContain('mdl-badge--overlap');
        expect(html).toMatchSnapshot();
    });
    it('nobackground', () => {
        const cmp = m(Badge, { nobackground: true }, 'add');
        const html = tidy(cmp);
        expect(html).toContain('mdl-badge--no-background');
        expect(html).toMatchSnapshot();
    });
    it('data attribute', () => {
        const cmp = m(Badge, { data: 42 }, 'add');
        const html = tidy(cmp);
        expect(html).toContain('data-badge="42"');
        expect(html).toMatchSnapshot();
    });
    it('data attribute', () => {
        const cmp = m(Badge, { data: 42 }, 'add');
        const html = tidy(cmp);
        expect(html).toContain('data-badge="42"');
        expect(html).toMatchSnapshot();
    });
    it('data-badge attribute', () => {
        const cmp = m(Badge, { 'data-badge': 42 }, 'add');
        const html = tidy(cmp);
        expect(html).toContain('data-badge="42"');
        expect(html).toMatchSnapshot();
    });
    it('data-badge and data attribute', () => {
        const cmp = m(Badge, { 'data-badge': 42, data: 1 }, 'add');
        const html = tidy(cmp);
        expect(html).toContain('data-badge="42"');
        expect(html).not.toContain('data-badge="1"');
        expect(html).toMatchSnapshot();
    });
});