import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { LayoutSpacer } from '../src/layout';
import { MithrilQuery } from './util/mithrilQuery';

describe('Layout Module', () => {
    it('LayoutSpacer', () => {
        const cmp = new MithrilQuery(LayoutSpacer);
        expect(cmp).selectorToHave('div.mdl-layout-spacer', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});