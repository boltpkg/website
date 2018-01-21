---
id: workspaces
title: Workspaces
---

---

A _workspace_ is like any other node package: It's just a directory with its
own `package.json`.

Workspaces are grouped into a single "project". A _project_ is also just a
node package at the root of your repository. This is sometimes referred to
as a "monorepo", but we prefer the term "multi-package repo".

```
project
├── package.json
├── workspace-one
│   ├── package.json
│   └── index.js
└── workspace-two
    ├── package.json
    └── index.js
```

Put another way, workspaces are just like any other package, except they are
nested within a larger project/repo. Each workspace can have its own dependencies
with its own code and scripts. Workspaces can also be grouped into
sub-directories for further organization.

Using Bolt, you can install the dependencies for all of these packages at once
(and you can do it really really fast).

But here's where it gets really cool: When you specify a dependency from one
workspace to another. It will get linked to the actual source. This way, when
you go to test your code. All your changes get tested together.

> **Note:** This idea is not new, other tools like [Lerna](https://lernajs.io)
> have existed for awhile and are used by many projects. Bolt is a fresh take
> on the idea.
