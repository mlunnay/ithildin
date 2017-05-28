import { } from 'jest';
import * as m from 'mithril';
import { tidy } from './util/snapshots';
import { LayoutSpacer } from '../src/layout';

describe('Layout Module', () => {
    it('LayoutSpacer', () => {
        const cmp = m(LayoutSpacer, 'add');
        const html = tidy(cmp);
        expect(html).toContain('<div class="mdl-layout-spacer"></div>');
    });
});