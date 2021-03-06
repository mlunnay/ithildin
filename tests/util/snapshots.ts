/* global it, expect */
import * as m from 'mithril';
import { tidy_html5 } from 'tidy-html5';
import * as render from 'mithril-node-render';
import { } from 'jest';

// I need to fix mithril-node-render.d.ts to not need this
type render = (view: any, attrs: any, options: any) => string;

export const defaultHtmlTidyOptions = {
  'show-body-only': true,
  'drop-empty-elements': false,
  'doctype': 'omit',
  'indent': true,
  'quiet': true, // Hides 'About this fork of Tidy ...'
  'show-warnings': false, // Hides 'line 1 column 1 - Warning: missing <!DOCTYPE> declaration ...''
  // Recognize SVG tags:
  'new-blocklevel-tags': ['svg', 'defs'],
  'new-inline-tags': ['path', 'polyline', 'line', 'polygon']
};

export const tidy = (vnodes: m.Vnode<any, any>, htmltidyOptions?: { [key: string]: any }) => {
  const htmlElement = document.createElement('div');
  m.render(htmlElement, vnodes);
  const html = htmlElement.innerHTML;
  const options = (<any>Object).assign({}, defaultHtmlTidyOptions, htmltidyOptions);
  return tidy_html5(html, options).trim();
};

export const tidyHtml = (html: string, htmltidyOptions?: { [key: string]: any }) => {
  const options = (<any>Object).assign({}, defaultHtmlTidyOptions, htmltidyOptions);
  return tidy_html5(html, options).trim();
};

export interface Test {
  name: string;
  component: any;
  children?: m.Children[];
  attrs: m.Attributes;
}

export const runSnapshots = (tests: Test[]) => {
  tests.forEach(test =>
    it(test.name, () => {
      const html = tidy(m(test.component, test.attrs, test.children));
      expect(html).toMatchSnapshot();
    })
  )
};

export const runServerSnapshots = (tests: Test[], renderer: render) => {
  tests.forEach(test =>
    it(test.name, () => {
      const html = renderer(test.component, test.attrs, test.children);
      expect(html).toMatchSnapshot();
    })
  )
};

// only drills down first child of parent elements
export const getHTMLAtDepthInternal = (element: HTMLElement, depth: number): string => {
  if(depth === 0)
    return (<HTMLElement>element.parentElement).innerHTML;
  return element.children ? getHTMLAtDepthInternal(<HTMLElement>element.children[0], depth - 1) : "";
};

export const getHTMLAtDepth = (vnode: m.Vnode<any, any>, depth: number = 0) => {
  var parent = document.createElement('div');
  m.render(parent, vnode);
  return getHTMLAtDepthInternal(<HTMLElement>parent.children[0], depth);
};

export const getFirstHTMLTag = (html: string) => {
  return (html.match(/<[^>]*>/) || [''])[0];
};