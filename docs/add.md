---
id: add
title: bolt add
---

### Usage

**`bolt add <dependency...> [Flag]`**

### Description

This will add dependency and any of its dependencies to the project. This will generate a new ***lock*** file and update the ***package.json*** of the project.

### Flags

**`--dev/-D`**

`bolt add <dependency...> [--dev/-D]` will add dependency... to devDependency of the project.

**`--peer/-P`**

`bolt add <dependency...> [--peer/-P]` will add dependency... to peerDependencies of the project.

**`--optional/-O`**

`bolt add <dependency...> [--optional/-O]` will add dependency... to optionalDependencies of the project.

**`--exact/-E`**

`bolt add <dependency...> [--exact/-E]` will add the exact version of the dependency. For example, `bolt add foo@1.2.3` would accept version 1.9.1, but `bolt add foo@1.2.3 --exact` would only accept version 1.2.3.

**`--tilde/-T`**

`bolt add <dependency...> [--tilde/-T]` will add the most recent release of the packages that have the same minor version. The default is to use the most recent release with the same major version. For example, `bolt add foo@1.2.3 --tilde` would accept 1.2.9 but not 1.3.0.

### Related commands

[`bolt workspace add`](/docs/workspace-add.html)

[`bolt workspaces add`](/docs/workspaces-add.html)

