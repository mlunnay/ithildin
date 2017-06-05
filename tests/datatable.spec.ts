import { } from 'jest';
import * as m from 'mithril';
import { tidyHtml } from './util/snapshots';
import { DataTable } from '../src/datatable';
import { MithrilQuery } from './util/mithrilQuery';

const tableData = [['Acrylic (Transparent)', 25, '$2.90'],
    ['Plywood (Birch)', 50, '$1.25'],
    ['Laminate (Gold on Blue)', 10, '$2.35']
];

const columnData = [{label: 'Material', numeric: false},
    {label: 'Quantity', numeric: true},
    {label: 'Unit Price'}
];

describe('DataTable', () => {
    it('no options', () => {
        const cmp = new MithrilQuery(m(DataTable, { data: tableData, columns: columnData }));
        expect(cmp).selectorToHave('table[data-upgraded=",MaterialDataTable"].mdl-data-table.mdl-js-data-table', 1);
        expect(cmp).selectorToHave('table > thead > tr > th.mdl-data-table__cell--non-numeric:contains(Material)', 1);
        expect(cmp).selectorToHave('table > thead > tr > th:contains(Quantity)', 1);
        expect(cmp).selectorToHave('table > thead > tr > th:contains(Unit Price)', 1);
        expect(cmp).selectorToHave('table > tbody > tr > td.mdl-data-table__cell--non-numeric:contains(Acrylic (Transparent))', 1);
        expect(cmp).selectorToHave('table > tbody > tr > td.mdl-data-table__cell--non-numeric:contains(Acrylic (Transparent)) + td:contains(25)', 1);
        expect(cmp).selectorToHave('table > tbody > tr > td:contains($2.90)', 1);
        expect(cmp).selectorToHave('table > tbody > tr > td.mdl-data-table__cell--non-numeric:contains(Plywood (Birch))', 1);
        expect(cmp).selectorToHave('table > tbody > tr > td:contains(50)', 1);
        expect(cmp).selectorToHave('table > tbody > tr > td:contains($1.25)', 1);
        expect(cmp).selectorToHave('table > tbody > tr > td.mdl-data-table__cell--non-numeric:contains(Laminate (Gold on Blue))', 1);
        expect(cmp).selectorToHave('table > tbody > tr > td:contains(10)', 1);
        expect(cmp).selectorToHave('table > tbody > tr > td:contains($2.35)', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    it('selectable', () => {
        const cmp = new MithrilQuery(m(DataTable, { data: tableData, columns: columnData, selectable: true }));
        expect(cmp).selectorToHave('table[data-upgraded=",MaterialDataTable"].mdl-data-table.mdl-js-data-table.mdl-data-table--selectable.is-upgraded', 1);
        const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
        expect(html).toMatchSnapshot();
    });
    describe('shadows', () => {
        for (let s of [2, 3, 4, 6, 8, 16]) {
            it('shadow ' + s + 'dp', () => {
                const cmp = new MithrilQuery(m(DataTable, { data: tableData, columns: columnData, shadow: s }));
                expect(cmp).selectorToHave('table.mdl-shadow--' + s + 'dp', 1);
                const html = tidyHtml(cmp.toHtml(), { wrap: 0 });
                expect(html).toMatchSnapshot();
            });
        }
    });
});
