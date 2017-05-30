import { } from 'jest';
import * as m from 'mithril';
import { tidy } from './util/snapshots';
import { Slider } from '../src/slider';

describe('Slider', () => {
    it('no options', () => {
        const cmp = m(Slider);
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('<input');
        expect(html).toContain('type="range"');
        expect(html).toContain('min="0"');
        expect(html).toContain('max="100"');
        expect((<HTMLInputElement>(<m.VnodeDOM<any, any>>cmp).dom).value).toBe("0");
        expect(html).toContain('mdl-slider mdl-js-slider is-lowest-value is-upgraded');
        expect(html).toContain('data-upgraded=",MaterialSlider"');
        expect(html).toMatchSnapshot();
    });
    it('value', () => {
        const cmp = m(Slider, { value: 50 });
        const html = tidy(cmp, { wrap: 0 });
        expect((<HTMLInputElement>(<m.VnodeDOM<any, any>>cmp).dom).value).toBe("50");
        expect(html).not.toContain('is-lowest-value');
    });
    it('min', () => {
        const cmp = m(Slider, { min: 50 });
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('min="50"');
    });
    it('max', () => {
        const cmp = m(Slider, { max: 50 });
        const html = tidy(cmp, { wrap: 0 });
        expect(html).toContain('max="50"');
    });
});