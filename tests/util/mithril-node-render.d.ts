// declare module 'mithril-node-render' {
//     import * as m from 'mithril';
//     function escapeHtml(s: string, replaceDoubleQuote: boolean): string;

//     export default function render(vnode: m.Vnode<any, any>): string;
// }
declare module 'mithril-node-render' {
    function escapeHtml(s: string, replaceDoubleQuote: boolean): string;

    namespace Mithril {
        interface Static {
            (view: any, attrs: any, options: any): string;
        }
    }

    const render: Mithril.Static;
    export = render;
}