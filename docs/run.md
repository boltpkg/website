---
id: run
title: bolt run
---

---

Runs a defined package script.

You may define [scripts](https://yarnpkg.com/en/docs/package-json#toc-scripts) in your repository's [package.json](https://yarnpkg.com/en/docs/package-json) file.

```
{
  "name": "my-package",
  "scripts": {
    "build": "babel src -d lib",
    "test": "jest"
  }
}
```

## Commands

### **bolt run \<script\> [arguments]**

This will run the script defined in your package json. All the arguments are passed down to the script. For example:

```
bolt run test
```

You can pass arguments to the script by keeping them after the command. For example, to run *jest* in watch mode:

```
bolt run test --watch
```

## Related commands

[`bolt workspace run`](/docs/workspace-run.html)

[`bolt workspaces run`](/docs/workspaces-run.html)
