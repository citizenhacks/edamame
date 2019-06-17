module.exports = {
    title: 'Citizen Hacks',
    description: 'For 36 hours, join students and leading innovators in tackling the challenge of privacy in the digital age.',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    plugins: ['@vuepress/plugin-back-to-top'],
    themeConfig: {
        activeHeaderLinks: true,
        nav: false,
        sidebar: 'auto',
        lastUpdated: 'Last Updated',
        displayAllHeaders: true
    },
}
