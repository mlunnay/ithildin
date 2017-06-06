import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Tooltip } from '../src/tooltip';
import { MithrilQuery } from './util/mithrilQuery';

describe('Tooltip', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(m('div', m('i.material-icon#icon__1', 'add'), m(Tooltip)));
        expect(cmp).selectorToHave('div[data-mdl-for="icon__1"][data-upgraded=",MaterialTooltip"].mdl-tooltip', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('id', () => {
        const cmp = new MithrilQuery(m('div', m('i.material-icon#icon__1', 'add'), m(Tooltip, { for: 'icon__1' })));
        expect(cmp).selectorToHave('div[data-mdl-for="icon__1"][data-upgraded=",MaterialTooltip"].mdl-tooltip', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('large', () => {
        const cmp = new MithrilQuery(m('div', m('i.material-icon#icon__1', 'add'), m(Tooltip, { large: true })));
        expect(cmp).selectorToHave('div[data-mdl-for="icon__1"][data-upgraded=",MaterialTooltip"].mdl-tooltip.mdl-tooltip--large', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('position (left)', () => {
        const cmp = new MithrilQuery(m('div', m('i.material-icon#icon__1', 'add'), m(Tooltip, { position: 'left' })));
        expect(cmp).selectorToHave('div[data-mdl-for="icon__1"][data-upgraded=",MaterialTooltip"].mdl-tooltip.mdl-tooltip--left', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('position (right)', () => {
        const cmp = new MithrilQuery(m('div', m('i.material-icon#icon__1', 'add'), m(Tooltip, { position: 'right' })));
        expect(cmp).selectorToHave('div[data-mdl-for="icon__1"][data-upgraded=",MaterialTooltip"].mdl-tooltip.mdl-tooltip--right', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('position (top)', () => {
        const cmp = new MithrilQuery(m('div', m('i.material-icon#icon__1', 'add'), m(Tooltip, { position: 'top' })));
        expect(cmp).selectorToHave('div[data-mdl-for="icon__1"][data-upgraded=",MaterialTooltip"].mdl-tooltip.mdl-tooltip--top', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});