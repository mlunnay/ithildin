declare module 'tidy-html5' {
    export function tidy_html5(text: string, config: {[property: string]: any}): string;
}