import { } from 'jest';
import * as m from 'mithril';
import { tidy } from './util/snapshots';
import { Icon } from '../src/icon';

describe('Icon Component', () => {
    it('no options', () => {
        const cmp = m(Icon, 'add');
        const html = tidy(cmp);
        expect(html).toContain('<i class="material-icons">add</i>');
    });
});