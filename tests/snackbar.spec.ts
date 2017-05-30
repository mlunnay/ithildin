import { } from 'jest';
import * as m from 'mithril';
import { tidy, getHTMLAtDepth, getFirstHTMLTag } from './util/snapshots';
import { Snackbar } from '../src/snackbar';

describe('Snackbar', () => {
    it('no options', () => {
        const cmp = m(Snackbar);
        const html = tidy(cmp, { wrap: 0 });
        const firstDiv = getFirstHTMLTag(html);
        expect(firstDiv).toContain('<div');
        expect(firstDiv).toContain('data-upgraded=",MaterialSnackbar"');
        expect(firstDiv).toContain('mdl-snackbar');
        expect(firstDiv).toContain('mdl-js-snackbar"');
        const secondDiv = getFirstHTMLTag(getHTMLAtDepth(cmp, 1));
        expect(secondDiv).toContain('<div');
        expect(secondDiv).toContain('mdl-snackbar__text');
        const button = getHTMLAtDepth(cmp, 1);
        expect(button).toContain('<button');
        expect(button).toContain('mdl-snackbar__action');
        expect(html).toMatchSnapshot();
    });
    it('showSnackbar', () => {
        const snackbar = new Snackbar();
        const cmp = m(snackbar);
        const parent = document.createElement('div');
        m.render(parent, cmp);
        snackbar.showSnackbar({ message: 'test message', actionText: 'close', actionHandler: (_e) => {} });
        m.redraw();
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('test message')
    });
});