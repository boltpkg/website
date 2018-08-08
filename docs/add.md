---
id: add
title: bolt add
---

---

## Add dependencies

Bolt uses [yarn add](https://yarnpkg.com/en/docs/cli/add) under the hood to add dependencies. Then it runs a custom logic to create a dependency graph. This command will re-establish symlinks between dependency of project and workspaces. 

> This will generate a new ***lock*** file and update the ***package.json*** of the project.

## Commands

### **`bolt add <package...>`**

This will add package(s) and any of its dependencies to [dependency](https://yarnpkg.com/en/docs/dependency-types#toc-dependencies) of the project.

### **`bolt add <package...> <--dev/-D>`**

This will add package(s) and any of its dependencies to [devdependency](https://yarnpkg.com/en/docs/dependency-types#toc-devdependencies) of the project.

### **`bolt add <package...> <--peer/-P>`**

This will add package(s) and any of its dependencies to [peerDependencies](https://yarnpkg.com/en/docs/dependency-types#toc-peerdependencies) of the project.

### **`bolt add <package...> <--optional/-O>`**

This will add package(s) and any of its dependencies to [optionalDependencies](https://yarnpkg.com/en/docs/dependency-types#toc-optionaldependencies) of the project.

### **`bolt add <package...> <--exact/-E>`**

This will add the exact version of the dependency. For example, `bolt add foo@1.2.3` would accept version 1.9.1, but `bolt add foo@1.2.3 --exact` would only accept version 1.2.3.

### **`bolt add <package...> <--tilde/-T>`**

This will add the most recent release of the packages that have the same minor version. The default is to use the most recent release with the same major version. For example, `bolt add foo@1.2.3 --tilde` would accept 1.2.9 but not 1.3.0.

## Related commands

[`bolt workspace add`](/docs/workspace-add.html)

[`bolt workspaces add`](/docs/workspaces-add.html)

