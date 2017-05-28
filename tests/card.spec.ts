import { } from 'jest';
import * as m from 'mithril';
import { tidy } from './util/snapshots';
import { Card } from '../src/card';

describe('Card Component', () => {
    it('no options', () => {
        const cmp = m(Card);
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<div class="mdl-card"></div>');
        expect(html).toMatchSnapshot();
    });
    describe('shadows', () => {
        for (let s of [2, 3, 4, 6, 8, 16]) {
            it('shadow ' + s + 'dp', () => {
                var cmp = m(Card, { shadow: s });
                var html = tidy(cmp, { wrap: 0 });
                expect(html).toContain('mdl-shadow--' + s + 'dp');
                expect(html).toMatchSnapshot();
            });
        }
    });
    describe('Title', () => {
        it('string title', () => {
            const cmp = m(Card, { title: 'Title' });
            const html = tidy(cmp, { wrap: 0, 'indent': false });
            expect(html).toContain('<div class="mdl-card__title">');
            expect(html).toContain('<h2 class="mdl-card__title-text">Title</h2>');
            expect(html).toMatchSnapshot();
        });
        it('expand', () => {
            const cmp = m(Card, { title: { expand: true } });
            const html = tidy(cmp, { wrap: 0, 'indent': false });
            expect(html).toContain('<div class="mdl-card__title mdl-card--expand">');
            expect(html).toMatchSnapshot();
        });
        it('children', () => {
            const cmp = m(Card, { title: { content: m('div', 'test') } });
            const html = tidy(cmp, { wrap: 0, 'indent': false });
            expect(html).toContain('<div class="mdl-card__title">\n<div>test');
            expect(html).toMatchSnapshot();
        });
        it('border', () => {
            const cmp = m(Card, { title: { content: 'Title', border: true } });
            const html = tidy(cmp, { wrap: 0, 'indent': false });
            expect(html).toContain('mdl-card--border');
            expect(html).toMatchSnapshot();
        });
    });
    describe('Media', () => {
        it('non object', () => {
            const cmp = m(Card, { media: m('img', { src: '#' }) });
            const html = tidy(cmp, { wrap: 0, indent: false });
            expect(html).toContain('<div class="mdl-card__media"><img src="#">');
            expect(html).toMatchSnapshot();
        });
        it('border', () => {
            const cmp = m(Card, { media: { content: m('img', { src: '#' }), border: true } });
            const html = tidy(cmp, { wrap: 0});
            expect(html).toContain('mdl-card--border');
            expect(html).toMatchSnapshot();
        });
        it('expand', () => {
            const cmp = m(Card, { media: { content: m('img', { src: '#' }), expand: true } });
            const html = tidy(cmp, { wrap: 0});
            expect(html).toContain('mdl-card--expand');
            expect(html).toMatchSnapshot();
        });
    });
    describe('Supporting Text', () => {
        it('plain', () => {
            const cmp = m(Card, { supportingText: 'Some text' });
            const html = tidy(cmp, { wrap: 0, indent: false });
            expect(html).toContain('<div class="mdl-card__supporting-text">Some text');
            expect(html).toMatchSnapshot();
        });
        it('border', () => {
            const cmp = m(Card, { supportingText: { content: 'Some text', border: true } });
            const html = tidy(cmp, { wrap: 0});
            expect(html).toContain('mdl-card--border');
            expect(html).toMatchSnapshot();
        });
        it('expand', () => {
            const cmp = m(Card, { supportingText: { content: 'Some text', expand: true } });
            const html = tidy(cmp, { wrap: 0});
            expect(html).toContain('mdl-card--expand');
            expect(html).toMatchSnapshot();
        });
    });
    describe('Actions', () => {
        it('plain', () => {
            const cmp = m(Card, { actions: 'Some text' });
            const html = tidy(cmp, { wrap: 0, indent: false });
            expect(html).toContain('<div class="mdl-card__action">Some text');
            expect(html).toMatchSnapshot();
        });
        it('border', () => {
            const cmp = m(Card, { actions: { content: 'Some text', border: true } });
            const html = tidy(cmp, { wrap: 0});
            expect(html).toContain('mdl-card--border');
            expect(html).toMatchSnapshot();
        });
        it('expand', () => {
            const cmp = m(Card, { actions: { content: 'Some text', expand: true } });
            const html = tidy(cmp, { wrap: 0});
            expect(html).toContain('mdl-card--expand');
            expect(html).toMatchSnapshot();
        });
    });
});