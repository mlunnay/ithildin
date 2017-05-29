# Ithildin

[![Build Status](https://travis-ci.org/mlunnay/ithildin.svg?branch=master)](https://travis-ci.org/mlunnay/ithildin)
[![npm](https://img.shields.io/npm/v/ilithid.svg)]()

Material Design for [Mithril](http://lhorie.github.io/mithril) implemented in Typescript.

## Setup

Ithildin depends on [Material Design Light](https://getmdl.io/index.html) see [Getting Started](https://getmdl.io/started/index.html) for instructions on including the required stylesheets and scripts.

### CDN
```html
<script src="https://unpkg.com/ithildin/dist/"></script>
```

### NPM
```bash
npm install ithildin --save
```

## Basic example

#### Typescript
```typescript
import * as m from 'mithril';
import { Button } from 'ithildin/button';

class App implements m.ClassComponent<m.Attributes>{
    view(_vnode: m.Vnode<m.Attributes, this>) {
        return m(Button, { raised: true }, 'Button');
    }
}

m.mount(document.body, app);

```

#### Javascript
```javascript
import m from 'mithril';
import button from 'ithildin/button';

const app = {
    view: () => {
        return m(Button, { raised: true }, 'Button');
    }
};

m.mount(document.body, app);
```