---
id: install
title: bolt install
---

### Usage

**`bolt install`**

Install all the external dependecies of the project and workspaces in the node_modules of the project and symlinks them to the node_modules of the workspaces.

It will symlink all the internal dependencies. If a workspace `foo` depends on another workspace `bar`, then it will symlink workspace `bar` to the node_modules of `foo`.

> **Note** : It will throw and exit if any workspace is invalid, for example a workspace doesn't have a package.json.
