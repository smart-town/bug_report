module.exports = {
    lang: 'zh-CN',
    title: 'bug report',
    themeConfig: {
        navbar: [
            { text: 'os', children: [ '/os/', '/os/linux_orders/' ] }
        ],
        sidebar: {
            '/os/linux_orders/': [
                {
                    text: '📰命令',
                    children: [ '/os/linux_orders/README.md', '/os/linux_orders/001cut.md' ],
                },
            ],
            '/os/': [
                {
                    text: '💻OS',
                    children: [ '/os/README.md', '/os/linux_secure_check.md' ],
                }
            ]
        }
    }
}
