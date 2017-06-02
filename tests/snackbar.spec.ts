import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Snackbar } from '../src/snackbar';
import { MithrilQuery } from './util/mithrilQuery'

describe('Snackbar', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(Snackbar);
        expect(cmp).selectorToHave('div[data-upgraded=",MaterialSnackbar"].mdl-snackbar.mdl-js-snackbar', 1);
        expect(cmp).selectorToHave('div > div.mdl-snackbar__text', 1);
        expect(cmp).selectorToHave('div > button.mdl-snackbar__action', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('showSnackbar', () => {
        const snackbar = <m.VnodeDOM<Snackbar, Snackbar>>m(Snackbar)
        var cmp = new MithrilQuery(snackbar);
        snackbar.state.showSnackbar({ message: 'test message', actionText: 'close', actionHandler: () => {} });
        expect(cmp).selectorToContain('test message')
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});