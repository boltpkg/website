'use strict';
const users = [
  {
    caption: 'User1',
    image: '/test-site/img/docusaurus.svg',
    infoLink: '#',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Bolt' /* title for your website */,
  tagline: '⚡️ Super-powered JavaScript project management',
  url: 'http://boltpkg.com/' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'bolt',
  cname: "boltpkg.com",
  headerLinks: [
    {doc: 'introduction', label: 'About'},
    {doc: 'install', label: 'Commands'}
  ],
  users,
  /* path to images for header/footer */
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  /* colors for website */
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Your Name or Your Company Name',
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/boltpkg/bolt',
};

module.exports = siteConfig;
