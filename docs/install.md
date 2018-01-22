---
id: install
title: bolt install
---

---

## Intall dependencies

Running `bolt` without a command will run `bolt install`.

Bolt install is the 

- **Validate Project**: There are two main validations:
    1. Match the installed bolt version against the version mentioned in ***bolt*** config in package json of the project. 

    ```json
    // package.json
    "bolt": {
        "version": "^0.18.3 || ^0.19.2",
    }
    ```

    2. Validate project is not dependent on any of the workspaces.

    *If Validaton of project is successful it moves ahead with installation*

- **Install Dependencies**: This runs `yarn install` in project to install dependencies. This will create ***node_modules*** in project.

- **Symlink Dependencies**: This is the final step in installation. This will visit each workspace and get the dependencies (workspaceDependency) and keep dependenies of project (projectDependencies)  in cache.

    1. Get the external dependency and internal dependency of the workspace.

        - It runs validation on workspace dependencies:

            a. Validate that for all external dependency workspace is dependent on same version as project.

            b. Validate that for all internal dependency workspace is dependent on the latest version of workspace from project.

        - For external dependency create a symlink from *project/\*\*/workspace/node_modules/dependency* -> *project/node_modules/dependency*.

        - For internal depency create a symlink from *project/\*\*/workspace/node_modules/dependencyWorkspace* -> *project/\*\*/dependencyWorkspace*

## Commands

### **`bolt install`**

This will install all the dependency and symlink dependencies across project workspaces. This will generate a new yarn lock file.

### **`bolt install --no-lockfile`**

This will not read or generate a yarn.lock file

### **`bolt install --pure-lockfile`**

This will not generate a new yarn.lock lockfile.

> **Note** : It will throw and exit if project and/ or any workspace is invalid, for example a workspace doesn't have a package.json.
