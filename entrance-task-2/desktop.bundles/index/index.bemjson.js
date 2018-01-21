module.exports = {
    block: 'page',
    title: 'ШРИ-2018',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'index.min.css' }
    ],
    content: [
        {
            block: '',
            tag: 'ul',
            content: [
                {
                    block: '',
                    tag: 'h4',
                    content: 'Страницы под десктоп:'
                },
                {
                    block: '',
                    tag: 'li',
                    content: {
                        block: 'link',
                        mods: {
                            theme: 'islands',
                            size: 'm'
                        },
                        target: '_blank',
                        url: 'http://localhost:8080/desktop.bundles/main/main.html',
                        content: 'Главная'
                    }
                },
                {
                    block: '',
                    tag: 'li',
                    content: {
                        block: 'link',
                        mods: {
                            theme: 'islands',
                            size: 'm'
                        },
                        target: '_blank',
                        url: 'http://localhost:8080/desktop.bundles/meeting_created/meeting_created.html',
                        content: 'Встреча создана'
                    }
                },
                {
                    block: '',
                    tag: 'li',
                    content: {
                        block: 'link',
                        mods: {
                            theme: 'islands',
                            size: 'm'
                        },
                        target: '_blank',
                        url: 'http://localhost:8080/desktop.bundles/meeting_delete/meeting_delete.html',
                        content: 'Редактирование встречи (удалить)'
                    }
                },
                {
                    block: '',
                    tag: 'li',
                    content: {
                        block: 'link',
                        mods: {
                            theme: 'islands',
                            size: 'm'
                        },
                        target: '_blank',
                        url: 'http://localhost:8080/desktop.bundles/meeting_edit/meeting_edit.html',
                        content: 'Редактирование встречи'
                    }
                },
                {
                    block: '',
                    tag: 'li',
                    content: {
                        block: 'link',
                        mods: {
                            theme: 'islands',
                            size: 'm'
                        },
                        target: '_blank',
                        url: 'http://localhost:8080/desktop.bundles/meeting_new/meeting_new.html',
                        content: 'Новая встреча'
                    }
                },
                {
                    block: '',
                    tag: 'h4',
                    content: 'Страницы под экран iPhone5:'
                },
                {
                    block: '',
                    tag: 'li',
                    content: {
                        block: 'link',
                        mods: {
                            theme: 'islands',
                            size: 'm'
                        },
                        target: '_blank',
                        url: 'http://localhost:8080/desktop.bundles/touch_main/touch_main.html',
                        content: 'Главная'
                    }
                },
                {
                    block: '',
                    tag: 'li',
                    content: {
                        block: 'link',
                        mods: {
                            theme: 'islands',
                            size: 'm'
                        },
                        target: '_blank',
                        url: 'http://localhost:8080/desktop.bundles/touch_main_click/touch_main_click.html',
                        content: 'Главная (клик)'
                    }
                },
                {
                    block: '',
                    tag: 'li',
                    content: {
                        block: 'link',
                        mods: {
                            theme: 'islands',
                            size: 'm'
                        },
                        target: '_blank',
                        url: 'http://localhost:8080/desktop.bundles/touch_meeting_created/touch_meeting_created.html',
                        content: 'Встреча создана'
                    }
                },
                {
                    block: '',
                    tag: 'li',
                    content: {
                        block: 'link',
                        mods: {
                            theme: 'islands',
                            size: 'm'
                        },
                        target: '_blank',
                        url: 'http://localhost:8080/desktop.bundles\touch_meeting_delete\touch_meeting_delete.html',
                        content: 'Встреча будет удалена безвозвратно'
                    }
                },
                {
                    block: '',
                    tag: 'li',
                    content: {
                        block: 'link',
                        mods: {
                            theme: 'islands',
                            size: 'm'
                        },
                        target: '_blank',
                        url: 'http://localhost:8080/desktop.bundles/touch_meeting_edit/touch_meeting_edit.html',
                        content: 'Редактирование встречи'
                    }
                }
            ]
        }
    ]
};
