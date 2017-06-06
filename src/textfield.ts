import * as m from 'mithril';
import 'material-design-lite';

/**
 * A materialize Textfield.
 * 
 * ## Attributes
 * | attribute | type  | default   | description |
 * |-----------|-------|-----------|------------|
 * | label     | string |   | The label for the textfield |
 * | floatingLabel | boolean | false | If the textfield has a floating label |
 * | validation.pattern | string |   | The validation to apply to the textfield |
 * | validation.message | string |   | The error message to display if validation fails on the textfield |
 * | multiline | boolean | false | If the textfield should be multiline |
 * | icon      | string |   | Makes the textfield expandabe with the given material icon for the button |
 */
export class Textfield implements m.ClassComponent<m.Attributes> {
    private dom: HTMLElement;

    static textfieldIdCounter = 0;
    id: string;

    oninit(vnode: any) {
        this.id = vnode.attrs.id ? vnode.attrs.id : '__textfield__' + ++Textfield.textfieldIdCounter;
    }

    oncreate(vnode: m.VnodeDOM<m.Attributes, any>) {
        this.dom = <HTMLElement>vnode.dom;
        componentHandler.upgradeElement(<HTMLElement>vnode.dom);
    }

    view(vnode: m.Vnode<m.Attributes, this>) {
        const { label, validation, floatingLabel, multiline, icon, ...attrs } = vnode.attrs;
        var errorField: any;
        if (validation) {
            if (validation.pattern)
                attrs.pattern = validation.pattern;
            errorField = m('span.mdl-textfield__error', validation.message);
        }

        var inputField: m.Vnode<any, any>;
        if (multiline)
            inputField = m(`textarea.mdl-textfield__input#${this.id}`, attrs);
        else
            inputField = m(`input[type="text"].mdl-textfield__input#${this.id}`, attrs);

        var inputLabelField: any;
        var labelField = m(`label[for="${this.id}"].mdl-textfield__label`, label);

        if (icon) {
            inputLabelField = m(`label[for="${this.id}"].mdl-button.mdl-js-button.mdl-button--icon`,
                m('i.material-icons', icon),
                m('div.mdl-textfield__expandable-holder',
                    inputField,
                    m(`label[for="${this.id}"].mdl-textfield__label`, label)));
        }
        else {
            inputLabelField = [labelField, inputField];
        }

        const classes = (floatingLabel ? '.mdl-textfield--floating-label' : '') + (icon ? '.mdl-textfield--expandable' : '')

        return m('div.mdl-textfield.mdl-js-textfield' + classes,
            inputLabelField,
            errorField,
            vnode.children);
    }
}