import { } from 'jest';
import * as m from 'mithril';
import { tidy } from './util/snapshots';
import { ProgressBar } from '../src/progressBar';

describe('ProgressBar', () => {
    it('no options', () => {
        const cmp = m(ProgressBar);
        const html = tidy(cmp, { wrap: 0 });
        const firstDiv = html.split('\n')[0];
        expect(firstDiv).toContain('<div');
        expect(firstDiv).toContain('class="mdl-progress is-upgraded"');
        expect(firstDiv).toContain('data-upgraded=",MaterialProgress"');
        expect(html).toContain('<div style=\"width: 0%;\" class=\"progressbar bar bar1\"></div>\n  <div style=\"width: 100%;\" class=\"bufferbar bar bar2\"></div>\n  <div style=\"width: 0%;\" class=\"auxbar bar bar3\"></div>\n</div>');
        expect(html).toMatchSnapshot();
    });
    it('inderterminant', () => {
        const cmp = m(ProgressBar, { indeterminate: true });
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('mdl-progress--indeterminate');
        expect(html).toMatchSnapshot();
    });
    it('propgress', () => {
        const cmp = m(ProgressBar, { progress: 50 });
        const html = tidy(cmp, { wrap: 0 });
        const progressDiv = html.split('\n')[1];
        expect(progressDiv).toContain('width: 50%');
        expect(html).toMatchSnapshot();
    });
    it('buffer', () => {
        const cmp = m(ProgressBar, { buffer: 60 });
        const html = tidy(cmp, { wrap: 0 });
        const bufferDiv = html.split('\n')[2];
        const auxDiv = html.split('\n')[3];
        expect(bufferDiv).toContain('width: 60%');
        expect(auxDiv).toContain('width: 40%');
        expect(html).toMatchSnapshot();
    });
});