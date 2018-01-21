---
id: introduction
title: Introduction
---

---

Are you sharing components, libraries or services between different projects and
find it difficult to manage? Juggling lots of Node packages in lots of different
repositories? What if there was a better way?

![Diagram: One package per project](https://raw.githubusercontent.com/boltpkg/assets/master/diagram-multirepo.png)

Most JavaScript projects have 1 package per project (repo). So when you have
lots of packages, you have to do a lot of work to manage them all:

- You need to install every single package one by one.
- If you make changes to one package and want to test them in another, you need
  to manually link them together and run tests separately.
- Managing dependencies and keeping everything up to date can be overwhelming,
  and you can easily fall really far behind.

Instead of all that, what if you put all of your packages together?

![Diagram: Project with many packages](https://raw.githubusercontent.com/boltpkg/assets/master/diagram-monorepo.png)

This is the idea behind "workspaces".
