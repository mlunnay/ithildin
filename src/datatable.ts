import * as m from 'mithril';
import 'material-design-lite';

/**
 * A materialize Data Table.
 * 
 * ## Attributes
 * | attribute | type  | default   | description |
 * |-----------|-------|-----------|------------|
 * | data      | tableData[] |     | The content of the data |
 * | columns   | {label, (numeric), (sort)}[] |     | The column definitions. |
 * | selectable | boolean | false  | Applies all/individual selectable behavior (checkboxes) |
 * | shadow   | number |           | Assigns variable shadow depths (2, 3, 4, 6, 8, or 16) to the data table |
 */
export class DataTable implements m.ClassComponent<m.Attributes> {
    private dom: HTMLElement;
    
    /**
     * returns a list indexes of selected rows
     */
    getSelected() {
        const selectedElements = this.dom.querySelectorAll('tbody > tr');
        var result: number[] = [];
        for(var i = 0; i < selectedElements.length; i++) {
            if(selectedElements[i].className.indexOf('is-selected') >= 0)
                result.push(i);
        }
        return result;
    }

    /**
     * Returns true if the given row is selected.
     * @param index the index of the row to check.
     */
    isSelected(index: number) {
        return this.dom.childElementCount > index && this.dom.children[index].className.indexOf('is-selected') >= 0;
    }

    oncreate(vnode: m.VnodeDOM<m.Attributes, any>) {
        this.dom = <HTMLElement>vnode.dom;
        componentHandler.upgradeElement(<HTMLElement>vnode.dom);
    }

    view(vnode: m.Vnode<m.Attributes, this>) {
        const { data, columns, shadow, selectable } = vnode.attrs;
        var classes: string[] = [];
        if([2, 3, 4, 6, 8, 16].indexOf(shadow) >= 0)
            classes.push('.mdl-shadow--' + shadow + 'dp');
        if(selectable)
            classes.push('.mdl-data-table--selectable') 

        return m('table.mdl-data-table.mdl-js-data-table' + classes.join(' '),
            m('thead',
                m('tr',
                    columns.map((column: any) => {
                        return m('th' + (column.numeric === false ? '.mdl-data-table__cell--non-numeric' : ''), column.label)
                    }))),
            m('tbody',
                data.map((row: any[]) =>
                m('tr',
                 row.map((data: any, i: number) => {
                    return m('td' + (vnode.attrs.columns[i].numeric === false ? '.mdl-data-table__cell--non-numeric' : ''), data)
                }))))
        );
    }
}