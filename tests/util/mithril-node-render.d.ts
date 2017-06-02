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