import * as m from 'mithril';

/**
 * A materialize Card representing a virtual piece of paper that contains related data — such as a photo, some text, and a link — that are all about a single subject.
 * 
 * ## Attributes
 * | attribute | type    | default   | description |
 * |-----------|---------|-----------|------------|
 * | shadoe    | number  |           | Assigns variable shadow depths (2, 3, 4, 6, 8, or 16) to card |
 * | title     | object or string |       | Adds a title section to the card |
 * | title.expand | boolean | false  | Expands the title section to the width of the card |
 * | title.border | boolean | false  | Adds a border to the title section |
 * | title.content | string or vnode(s) |   | The content of the title section |
 * | media     | object or vnode(s) |   | Adds a media section to the card |
 * | media.expand | boolean | false  | Expands the media section to the width of the card |
 * | media.border | boolean | false  | Adds a border to the media section |
 * | media.content | vnode(s) |   | The content of the media section |
 * | supportingText     | object or vnode(s) |   | Adds a supporting text section to the card |
 * | supportingText.expand | boolean | false  | Expands the supporting text section to the width of the card |
 * | supportingText.border | boolean | false  | Adds a border to the supporting text section |
 * | supportingText.content | vnode(s) |   | The content of the supporting text section |
 * | actions     | object or vnode(s) |   | Adds a media section to the card |
 * | actions.expand | boolean | false  | Expands the actions section to the width of the card |
 * | actions.border | boolean | false  | Adds a border to the actions section |
 * | actions.content | vnode(s) |   | The content of the actions section |
 */
export class Card implements m.ClassComponent<m.Attributes> {
    view(vnode: m.Vnode<m.Attributes, this>) {
        var children = [];

        var shadow = '';
        if([2, 3, 4, 6, 8, 16].indexOf(vnode.attrs.shadow) >= 0)
            shadow = '.mdl-shadow--' + vnode.attrs.shadow + 'dp';

        if(vnode.attrs.title) {
            let classes = '.mdl-card__title';
            if(vnode.attrs.title.expand)
                classes += '.mdl-card--expand';
            if(vnode.attrs.title.border)
                classes += '.mdl-card--border';
            let child = vnode.attrs.title.content;
            if(typeof vnode.attrs.title === 'string')
                child = m('h2.mdl-card__title-text', vnode.attrs.title);
            children.push(m(classes, child));
        }

        if(vnode.attrs.media) {
            let classes = '.mdl-card__media';
            if(vnode.attrs.media.border)
                classes += '.mdl-card--border'
            if(vnode.attrs.media.expand)
                classes += '.mdl-card--expand';
            let child = vnode.attrs.media.content;
            if(!vnode.attrs.media.content)
                child = vnode.attrs.media;
            children.push(m(classes, child));
        }

        if(vnode.attrs.supportingText) {
            let classes = '.mdl-card__supporting-text';
            if(vnode.attrs.supportingText.border)
                classes += '.mdl-card--border'
            if(vnode.attrs.supportingText.expand)
                classes += '.mdl-card--expand';
            let child = vnode.attrs.supportingText.content;
            if(!vnode.attrs.supportingText.content)
                child = vnode.attrs.supportingText;
            children.push(m(classes, child));
        }

        if(vnode.attrs.actions) {
            let classes = '.mdl-card__action';
            if(vnode.attrs.actions.border)
                classes += '.mdl-card--border'
            if(vnode.attrs.actions.expand)
                classes += '.mdl-card--expand';
            let child = vnode.attrs.actions.content;
            if(!vnode.attrs.actions.content)
                child = vnode.attrs.actions;
            children.push(m(classes, child));
        }

        return m('.mdl-card' + shadow, children);
    }
}