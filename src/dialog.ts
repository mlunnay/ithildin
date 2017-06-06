import * as m from 'mithril';
import { Button } from './button';
import * as dialogPolyfill from 'dialog-polyfill';

/**
 * A materialize Dialog.
 * 
 * ## Attributes
 * | attribute | type  | default   | description |
 * |-----------|-------|-----------|------------|
 * | title     | string \| vnode |   | The title for the dialog |
 * | content   | string \| vnode |   | The main content for the dialog |
 * | actions   | string \| vnode |   | The action(s) for the dialog |
 * | fullWidthActions | boolean | false | Modifies the actions to each take the full width of the container. This makes each take their own line. |
 */
export class Dialog implements m.ClassComponent<m.Attributes> {
    private dom: { open: boolean,
            returnValue: string,
            show: () => void,
            showModal: () => void,
            close: (returnValue?: string) => void
        };

    show() {
        this.dom.show();
    }

    showModal() {
        this.dom.showModal();
    }

    close(returnValue?: string) {
        this.dom.close(returnValue);
    }

    get returnValue() { return this.dom.returnValue; }

    get isOpen() { return this.dom.open; }

    oncreate(vnode: m.VnodeDOM<m.Attributes, any>) {
        dialogPolyfill.registerDialog(vnode.dom);
    }

    view(vnode: m.Vnode<m.Attributes, this>) {
        var titleSection;
        if(vnode.attrs.title)
            titleSection = m('div.mdl-dialog__title', vnode.attrs.title);

        var actionSection;
        if (!vnode.attrs.actions)
            actionSection = m(Button, {onclick: () => this.close()}, 'Ok');
        else
            actionSection = vnode.attrs.actions
        
        return m('dialog.mdl-dialog',
            titleSection,
            m('div.mdl-dialog__content', vnode.attrs.content),
            m('div.mdl-dialog__actions' + (vnode.attrs.fullWidthActions ? '.mdl-dialog__actions--full-width' : ''), actionSection));
    }
}