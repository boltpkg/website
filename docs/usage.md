---
id: usage
title: Usage
---

---

## Prerequisite

- Make sure you have bolt installed

- Basic understanding on terminal

## Creating a project

Go to your workspace in terminal. Create an new prjoct.

```sh
$ mkdir bolt-project
```

```sh
$ cd bolt-project
```

Initialize the project (this will create a simple node project):

```sh
$ bolt init
```

This creates a package json with your preference.

Copy the below bolt config in package.json of the project. 

```js
"bolt": {
    "workspaces": [
      "packages/*"
    ]
  }
```

This config tells bolt to treat all the projects/ packages in *packages* folder as independent projects. Next, go ahead and create new packages in *packages* folder.
