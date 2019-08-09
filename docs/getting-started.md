---
id: getting-started
title: Getting Started
---

---

To understand how Bolt works we need to understand what is a mono-repo (or multi-package repo).

## Mono-repo

A lot projects split there codebase into independently versioned packages with each package focused on specific functionality. However, this split of codebase in multiple packages has few drawbacks. One of the drawbacks being that instead of cloning one repository now you need to clone multiple repositories, which becomes messy and hard to maintain with time.

To overcome these issue we can create a single repository (project) and keep all there packages(workspaces) in this repository. These multi-package repositories are known as mono-repo.

Mono-repos are great. Though, we still have issue with sharing source across different repository. Imagine a scenario where you are working on a project and you need working on package which depends on different package of the same project. 

## Why do we need Bolt

To resolve this bolt sym-links the source of that packages which enable you to work on multiple packages at once without any manually linking them.
