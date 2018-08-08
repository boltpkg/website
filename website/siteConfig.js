"use strict";

const users = require("./_data/users.json").map(user => ({
  pinned: user.pinned,
  caption: user.name,
  infoLink: user.url,
  image: `/img/users/${user.logo}`
}));

const siteConfig = {
  title: "Bolt" /* title for your website */,
  tagline: "⚡️ Super-powered JavaScript project management",
  url: "http://boltpkg.com/" /* your website url */,
  baseUrl: "/" /* base url for your project */,
  projectName: "bolt",
  cname: "boltpkg.com",
  headerLinks: [
    { doc: "introduction", label: "About" },
    { doc: "add", label: "Commands" },
    { blog: true, label: "Blog" }
  ],
  disableHeaderTitle: true,
  users,
  editUrl: "https://github.com/boltpkg/website/tree/master/docs/",
  /* path to images for header/footer */
  headerIcon: "img/logo.svg",
  footerIcon: "img/logo.svg",
  favicon: "img/favicon/favicon.ico",
  /* colors for website */
  colors: {
    primaryColor: "#333333",
    secondaryColor: "#272727"
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    "Copyright © " +
    new Date().getFullYear() +
    " Your Name or Your Company Name",
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: "https://github.com/boltpkg/bolt"
};

module.exports = siteConfig;
