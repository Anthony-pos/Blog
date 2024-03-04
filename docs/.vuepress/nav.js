module.exports = [
    {
        text: '首页',
        link: '/',
    },
    {
        text: 'database',
        children: [
            {
                text: 'SQL',
                children: [
                    {
                        text: 'SQL Serve',
                        link: '../database/SQL Server/SQL Server.md',
                    },
                    {
                        text: 'MySQL',
                        link: '../database/MySQL/MySQL.md',
                    }
                ],
            },
            {
                text: 'NoSQL',
                children: [
                    {
                        text: 'Redis',
                        link: '../database/Redis/Redis.md',
                    },
                    {
                        text: 'MongoDB',
                        link: '../database/MongoDB/MongoDB.md',
                    }
                ],
            }
        ]
    },
    {
        text: 'Vue',
        children: [
            {
                text: 'vue 2x',
                children: [
                    {
                        text: '脚手架与指令',
                        link: '../Vue/vue2x/01.md',
                    },
                    {
                        text: 'diff|计算|监听|动态样式',
                        link: '../Vue/vue2x/02.md',
                    },
                    {
                        text: '组件通信|混入|插入',
                        link: '../Vue/vue2x/03.md',
                    },
                    {
                        text: '插槽|自定义指令',
                        link: '../Vue/vue2x/04.md',
                    },
                    {
                        text: '生命周期',
                        link: '../Vue/vue2x/05.md',
                    },
                    {
                        text: '路由',
                        link: '../Vue/vue2x/06.md',
                    },
                    {
                        text: 'Vuex',
                        link: '../Vue/vue2x/07.md',
                    },
                    {
                        text: 'VUe3的新特性',
                        link: '../Vue/vue2x/08.md',
                    },
                    {
                        text: 'Vue开发经验总结',
                        link: '../Vue/vue2x/09.md',
                    },
                ]
            },
            {
                text: 'vue 3x',
                link: ''
            }
        ]
    },
    {
        text: 'Linux',
        children: [
            {
                text: 'Linux简介',
                link: '../Linux/00.Introduction to Linux.md'
            }
        ]
    }
];