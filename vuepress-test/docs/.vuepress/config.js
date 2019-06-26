module.exports = {
    title: 'Z-UI',
    description: 'Just playing around',
    base: '/web/',
    repo: 'https://github.com/lydiafork/web',
    themeConfig: {
        locales: {
            '/': {
                nav: [
                  {
                    text: '组件',
                    items: [
                      {
                        text: '表单',
                        link: '/vuepress/'
                      },
                      {
                        text: '基础组件',
                        link: '/koa2/'
                      },
                      {
                        text: '操作反馈',
                        link: '/JS/'
                      },
                      {
                        text: '导航相关',
                        link: '/css/'
                      },
                      {
                        text: '搜索相关',
                        link: '/ES6/'
                      }
                    ]
                  },
                  {
                    text: '生态',
                    link: '/project/'
                  },
                  {
                    text: '快速上手',
                    link: '/start/'
                  }
                ],
                sidebar: {
                  '/vuepress/': koaSidebarConfig('表单'),
                  '/essay/': essaySidebarConfig('基础组件'),
                  '/JS/': jsSidebarConfig('操作反馈'),
                  '/css/': cssSidebarConfig('导航相关'),
                  '/ES6/': esSidebarConfig('搜索相关')
                }
              }
        },
    }
    
}
function koaSidebarConfig(title) {
    return [
      {
        title,
        collapsable: false,
        children: [
          '',
        ]
      }
    ]
  }
  
  function essaySidebarConfig(title) {
    return [
      {
        title,
        collapsable: false,
        children: ['', 'touzi-2017']
      }
    ]
  }
  
  function jsSidebarConfig(title) {
    return [
      {
        title,
        collapsable: false,
        children: [
          '',
          'variable',
          'scope',
          'prototype',
          'async',
          'date',
          'array-obj',
          'JS-web-API'
        ]
      }
    ]
  }
  
  function cssSidebarConfig(title) {
    return [
      {
        title,
        collapsable: false,
        children: ['', '堆叠上下文', '移动端', 'Flex', '常见布局', 'BFC']
      }
    ]
  }
  
  function esSidebarConfig(title) {
    return [
      {
        title,
        collapsable: false,
        children: ['', '解构赋值']
      }
    ]
  }
  