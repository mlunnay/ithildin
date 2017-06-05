import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Card } from '../src/card';
import { MithrilQuery } from './util/mithrilQuery';

describe('Card Component', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(Card);
        expect(cmp).selectorToHave('div.mdl-card', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    describe('shadows', () => {
        for (let s of [2, 3, 4, 6, 8, 16]) {
            it('shadow ' + s + 'dp', () => {
                const cmp = new MithrilQuery(m(Card, { shadow: s }));
                expect(cmp).selectorToHave('div.mdl-shadow--' + s + 'dp', 1);
                expect(cmp).selectorToHave('div', 1);
                const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
                expect(html).toMatchSnapshot();
            });
        }
    });
    describe('Title', () => {
        it('string title', () => {
            const cmp = new MithrilQuery(m(Card, { title: 'Title' }));
            expect(cmp).selectorToHave('h2.mdl-card__title-text:contains(Title)', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('expand', () => {
            const cmp = new MithrilQuery(m(Card, { title: { expand: true, content: 'Title' } }));
            expect(cmp).selectorToHave('div.mdl-card__title.mdl-card--expand h2.mdl-card__title-text:contains(Title)', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('children', () => {
            const cmp = new MithrilQuery(m(Card, { title: { content: m('div', 'test') } }));
            expect(cmp).selectorToHave('div.mdl-card__title div:contains(test)', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('border', () => {
            const cmp = new MithrilQuery(m(Card, { title: { content: 'Title', border: true } }));
            expect(cmp).selectorToHave('div.mdl-card__title.mdl-card--border h2.mdl-card__title-text:contains(Title)', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
    });
    describe('Media', () => {
        it('non object', () => {
            const cmp = new MithrilQuery(m(Card, { media: m('img', { src: '#' }) }));
            expect(cmp).selectorToHave('div.mdl-card__media', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('border', () => {
            const cmp = new MithrilQuery(m(Card, { media: { content: m('img', { src: '#' }), border: true } }));
            expect(cmp).selectorToHave('div.mdl-card__media.mdl-card--border', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('expand', () => {
            const cmp = new MithrilQuery(m(Card, { media: { content: m('img', { src: '#' }), expand: true } }));
            expect(cmp).selectorToHave('div.mdl-card__media.mdl-card--expand', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
    });
    describe('Supporting Text', () => {
        it('plain', () => {
            const cmp = new MithrilQuery(m(Card, { supportingText: 'Some text' }));
            expect(cmp).selectorToHave('div.mdl-card__supporting-text:contains(Some text)', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('border', () => {
            const cmp = new MithrilQuery(m(Card, { supportingText: { content: 'Some text', border: true } }));
            expect(cmp).selectorToHave('div.mdl-card__supporting-text.mdl-card--border:contains(Some text)', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('expand', () => {
            const cmp = new MithrilQuery(m(Card, { supportingText: { content: 'Some text', expand: true } }));
            expect(cmp).selectorToHave('div.mdl-card__supporting-text.mdl-card--expand:contains(Some text)', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
    });
    describe('Actions', () => {
        it('plain', () => {
            const cmp = new MithrilQuery(m(Card, { actions: 'Some text' }));
            expect(cmp).selectorToHave('div.mdl-card__action:contains(Some text)', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('border', () => {
            const cmp = new MithrilQuery(m(Card, { actions: { content: 'Some text', border: true } }));
            expect(cmp).selectorToHave('div.mdl-card__action.mdl-card--border:contains(Some text)', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
        it('expand', () => {
            const cmp = new MithrilQuery(m(Card, { actions: { content: 'Some text', expand: true } }));
            expect(cmp).selectorToHave('div.mdl-card__action.mdl-card--expand:contains(Some text)', 1);
            const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
            expect(html).toMatchSnapshot();
        });
    });
});