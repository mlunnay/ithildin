import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { Textfield } from '../src/textfield';
import { MithrilQuery } from './util/mithrilQuery';

beforeEach(() => {
        // always have consistent auto menu id
        Textfield.textfieldIdCounter = 0;
    });
describe('Textfield', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(Textfield);
        expect(cmp).selectorToHave('div[data-upgraded=",MaterialTextfield"].mdl-textfield.mdl-js-textfield.is-upgraded', 1);
        expect(cmp).selectorToHave('input[type="text"].mdl-textfield__input#__textfield__1', 1);
        expect(cmp).selectorToHave('label[for="__textfield__1"].mdl-textfield__label', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('validation', () => {
        const cmp = new MithrilQuery(m(Textfield, { validation: { pattern: '-?[0-9]*(\.[0-9]+)?', message: 'Input is not a number!' } }));
        expect(cmp).selectorToHave('input[type="text"][pattern="-?[0-9]*(\.[0-9]+)?"].mdl-textfield__input#__textfield__1', 1);
        expect(cmp).selectorToHave('span.mdl-textfield__error:contains(Input is not a number!)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('label', () => {
        const cmp = new MithrilQuery(m(Textfield, { label: 'text label' }));
        expect(cmp).selectorToHave('label[for="__textfield__1"].mdl-textfield__label:contains(text label)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('floating label', () => {
        const cmp = new MithrilQuery(m(Textfield, { floatingLabel: true }));
        expect(cmp).selectorToHave('div.mdl-textfield--floating-label', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('multiline', () => {
        const cmp = new MithrilQuery(m(Textfield, { multiline: true }));
        expect(cmp).selectorToHave('textarea.mdl-textfield__input#__textfield__1', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('icon', () => {
        const cmp = new MithrilQuery(m(Textfield, { icon: 'search' }));
        expect(cmp).selectorToHave('div.mdl-textfield--expandable', 1);
        expect(cmp).selectorToHave('label[for="__textfield__1"].mdl-button.mdl-js-button.mdl-button--icon > i.material-icons:contains(search)', 1);
        expect(cmp).selectorToHave('div.mdl-textfield__expandable-holder', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
});