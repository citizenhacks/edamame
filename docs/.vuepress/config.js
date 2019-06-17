const navigator = require("./navigator");

module.exports = {
    title: 'Citizen Hacks',
    description: 'For 36 hours, join students and leading innovators in tackling the challenge of privacy in the digital age.',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    lastUpdated: 'Last Updated', // string | boolean
    plugins: [
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }],
        ['@vuepress/active-header-links', {
            sidebarLinkSelector: '.sidebar-link',
            headerAnchorSelector: '.header-anchor',
            headerTopOffset: 120
        }],
        ['@vuepress/back-to-top', true],
        ['@vuepress/medium-zoom', true]
    ],
    themeConfig: {
        activeHeaderLinks: true,
        repo: "citizenhacks/edamame",
        nav: navigator.customNav,
        sidebar: navigator.customSidebar
    },

}
