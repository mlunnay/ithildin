import { } from 'jest';
import * as m from 'mithril';
import { tidy } from './util/snapshots';
import { Button } from '../src/button';

describe('Button Component', () => {
    it('no options', () => {
        const cmp = m(Button);
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<button class="mdl-button mdl-js-button mdl-js-ripple-effect');
        expect(html).toMatchSnapshot();
    });
    it('element', () => {
        const cmp = m(Button, { 'element': 'a'});
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<a class="mdl-button mdl-js-button mdl-js-ripple-effect');
        expect(html).toContain('</a>');
        expect(html).toMatchSnapshot();
    });
    it('with child string', () => {
        const cmp = m(Button, 'Content');
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<button class="mdl-button mdl-js-button mdl-js-ripple-effect">Content</button>');
        expect(html).toMatchSnapshot();
    });
    it('no ripple', () => {
        const cmp = m(Button, { ripple: false });
        const html = tidy(cmp);
        expect(html).not.toContain('mdl-js-ripple-effect');
        expect(html).toMatchSnapshot();
    });
    it('raised', () => {
        const cmp = m(Button, { raised: true });
        const html = tidy(cmp);
        expect(html).toContain('mdl-button--raised');
        expect(html).toMatchSnapshot();
    });
    it('raised with fab, minifab and icon', () => {
        const cmp = m(Button, { raised: true, fab: true, minifab: true, icon: true });
        const html = tidy(cmp);
        expect(html).toContain('mdl-button--raised');
        expect(html).not.toContain('mdl-button--fab');
        expect(html).toMatchSnapshot();
    });
    it('fab', () => {
        const cmp = m(Button, { fab: true });
        const html = tidy(cmp);
        expect(html).toContain('mdl-button--fab');
        expect(html).toMatchSnapshot();
    });
    it('minifab', () => {
        const cmp = m(Button, { minifab: true });
        const html = tidy(cmp);
        expect(html).toContain('mdl-button--fab');
        expect(html).toContain('mdl-button--mini-fab');
        expect(html).toMatchSnapshot();
    });
    it('icon', () => {
        const cmp = m(Button, { icon: true });
        const html = tidy(cmp);
        expect(html).toContain('mdl-button--icon');
        expect(html).toMatchSnapshot();
    });
    it('color (colored)', () => {
        const cmp = m(Button, { color: 'colored' });
        const html = tidy(cmp);
        expect(html).toContain('mdl-button--colored');
        expect(html).toMatchSnapshot();
    });
    it('color (primary)', () => {
        const cmp = m(Button, { color: 'primary' });
        const html = tidy(cmp);
        expect(html).toContain('mdl-button--primary');
        expect(html).toMatchSnapshot();
    });
    it('color (accent)', () => {
        const cmp = m(Button, { color: 'accent' });
        const html = tidy(cmp);
        expect(html).toContain('mdl-button--accent');
        expect(html).toMatchSnapshot();
    });
});