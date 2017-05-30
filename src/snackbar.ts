import * as m from 'mithril';
import 'material-design-lite';

interface SnackbarElement extends HTMLElement {
    showSnackbar: (data: SnackData) => void;
}

export interface SnackData {
    message: string;
    timeout?: number;
    actionHandler?: (event: MouseEvent) => void;
    actionText?: string;
}

/**
 * A materialize Snackbar component is a container used to notify a user of an operation's status. It displays at the bottom of the screen.
 */
export class Snackbar implements m.ClassComponent<m.Attributes> {
    private snackbar: SnackbarElement;

    showSnackbar(data: SnackData) {
        this.snackbar.showSnackbar(data);
    }

    oncreate(vnode: m.VnodeDOM<m.Attributes, this>) {
        componentHandler.upgradeElement(<HTMLElement>vnode.dom);
        this.snackbar = <SnackbarElement>vnode.dom;
    }

    view(_vnode: m.Vnode<m.Attributes, this>) {
        return m('div.mdl-snackbar.mdl-js-snackbar',
            m('div.mdl-snackbar__text'),
            m('button[type=button].mdl-snackbar__action')
        );
    }
}