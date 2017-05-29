import { } from 'jest';
import * as m from 'mithril';
import { tidy } from './util/snapshots';
import { ProgressBar } from '../src/progressBar';

describe('Chip Component', () => {
    it('no options', () => {
        const cmp = m(ProgressBar, 'Basic chip');
        const html = tidy(cmp, { wrap: 0 });
        const firstDiv = html.split('\n')[0];
        expect(firstDiv).toContain('<div');
        expect(firstDiv).toContain('class="mdl-progress is-upgraded"');
        expect(firstDiv).toContain('data-upgraded=",MaterialProgress"');
        expect(html).toContain('<div style=\"width: 0%;\" class=\"progressbar bar bar1\"></div>\n  <div style=\"width: 100%;\" class=\"bufferbar bar bar2\"></div>\n  <div style=\"width: 0%;\" class=\"auxbar bar bar3\"></div>\n</div>')
        expect(html).toMatchSnapshot();
    });
});