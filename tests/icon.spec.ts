import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Icon } from '../src/icon';
import { MithrilQuery } from './util/mithrilQuery';

describe('Icon Component', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(m(Icon, 'add'));
        expect(cmp).selectorToHave('i.material-icons:contains(add)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});