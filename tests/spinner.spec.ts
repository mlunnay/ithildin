import { } from 'jest';
import * as m from 'mithril';
import { tidy } from './util/snapshots';
import { Spinner } from '../src/spinner';

describe('Spinner', () => {
    it('no options', () => {
        const cmp = m(Spinner);
        const html = tidy(cmp, { wrap: 0 });
        //console.log(html);
        expect(html).toContain('class="mdl-spinner is-active is-upgraded"');
        expect(html).toContain('data-upgraded=",MaterialProgress"');
        expect(html).toContain(`<div class="mdl-spinner__layer mdl-spinner__layer-1">
    <div class="mdl-spinner__circle-clipper mdl-spinner__left">
      <div class="mdl-spinner__circle"></div>
    </div>
    <div class="mdl-spinner__gap-patch">
      <div class="mdl-spinner__circle"></div>
    </div>
    <div class="mdl-spinner__circle-clipper mdl-spinner__right">
      <div class="mdl-spinner__circle"></div>
    </div>
  </div>`);
        expect(html).toContain('mdl-spinner__layer-2');
        expect(html).toContain('mdl-spinner__layer-3');
        expect(html).toContain('mdl-spinner__layer-4');
        expect(html).toMatchSnapshot();
    });
    it('active (false)', () => {
        const cmp = m(Spinner, { active: false });
        const html = tidy(cmp, { wrap: 0 });
        //console.log(html);
        expect(html).not.toContain('is-active');
        expect(html).toMatchSnapshot();
    });
    it('single color', () => {
        const cmp = m(Spinner, { singleColor: true });
        const html = tidy(cmp, { wrap: 0 });
        //console.log(html);
        expect(html).toContain('mdl-spinner--single-color');
        expect(html).toMatchSnapshot();
    });
});
