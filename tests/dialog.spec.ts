import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Dialog } from '../src/dialog';
import { Button } from '../src/button';
import { MithrilQuery } from './util/mithrilQuery';

describe('Dialog', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(Dialog);
        expect(cmp).selectorToHave('dialog.mdl-dialog', 1);
        expect(cmp).selectorToHave('div.mdl-dialog__content', 1);
        expect(cmp).selectorToHave('div.mdl-dialog__actions', 1);
        expect(cmp).selectorToHave('button.mdl-button:contains(Ok)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('title', () => {
        const cmp = new MithrilQuery(m(Dialog, { title: 'Attention' }));
        expect(cmp).selectorToHave('div.mdl-dialog__title:contains(Attention)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('content', () => {
        const cmp = new MithrilQuery(m(Dialog, { content: 'Dialog content' }));
        expect(cmp).selectorToHave('div.mdl-dialog__content:contains(Dialog content)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('actions', () => {
        const cmp = new MithrilQuery(m(Dialog, { actions: [m(Button, 'Ok'), m(Button, 'Cancel')] }));
        expect(cmp).selectorToHave('button.mdl-button:contains(Ok)', 1);
        expect(cmp).selectorToHave('button.mdl-button:contains(Cancel)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('full width actions', () => {
        const cmp = new MithrilQuery(m(Dialog, { fullWidthActions: true }));
        expect(cmp).selectorToHave('div.mdl-dialog__actions.mdl-dialog__actions--full-width', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});