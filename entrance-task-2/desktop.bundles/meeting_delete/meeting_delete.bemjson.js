({
    block : 'page',
    title : 'Яндекс.Переговорки',
    favicon: '../../favicon.ico',
    head : [
    	{ elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '//fonts.googleapis.com/css?family=Open+Sans'},
        { elem: 'css', url: 'meeting_delete.min.css' }
    ],
    scripts : [{ elem : 'js', url : 'meeting_delete.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block : 'header',
            content : [
                {
                    elem: 'side',
                    elemMods : { align : 'left' },
                    content: {
                        block : 'image',
                                url : '../../img/logo.svg',
                                alt : 'Яндекс.Переговорки'
                    }
                }
            ]
        },
        {
            block: 'content',
            tag: 'main',
            mods: { autoheight: true },
            content: [
                {
                    block: 'meeting-edit',
                    content: [
                        {
                            elem: 'row',
                            elemMods: { first: true },
                            content: [
                                {
                                    elem: 'title',
                                    content: 'Редактирование встречи'
                                },
                                {
                                    block: 'widget',
                                    mix: { block: 'meeting-edit', elem: 'widget' },
                                    mods: { type: 'close' }
                                },
                            ]
                        },
                        {
                            elem: 'row',
                            content: [
                                {
                                    elem: 'side',
                                    content: [
                                        {
                                            elem: 'input',
                                            content: [
                                                'Тема',
                                                {
                                                    block: 'input',
                                                    mods: { type: 'dismissible' },
                                                    val: 'Тестовое задание в ШРИ'
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'input',
                                            content: [
                                                'Участники',
                                                {
                                                    block: 'input',
                                                    placeholder: 'Например, Тор Одинович'
                                                },
                                                {
                                                    elem: 'participants',
                                                    content: [
                                                        {
                                                            elem: 'participant',
                                                            content: [
                                                                {
                                                                    block: 'image',
                                                                    mix: { block: 'meeting-edit', elem: 'image' },
                                                                    url: '../../img/lex.jpg',
                                                                    alt: 'Лекс Лютер',
                                                                    width: 24,
                                                                    height: 24
                                                                },
                                                                'Лекс Лютер'
                                                            ]
                                                        },
                                                        {
                                                            elem: 'participant',
                                                            content: [
                                                                {
                                                                    block: 'image',
                                                                    mix: { block: 'meeting-edit', elem: 'image' },
                                                                    url: '../../img/neo.jpg',
                                                                    alt: 'Томас Андерсон',
                                                                    width: 24,
                                                                    height: 24
                                                                },
                                                                'Томас Андерсон'
                                                            ]
                                                        },
                                                        {
                                                            elem: 'participant',
                                                            content: [
                                                                {
                                                                    block: 'image',
                                                                    mix: { block: 'meeting-edit', elem: 'image' },
                                                                    url: '../../img/darth.jpg',
                                                                    alt: 'Дарт Вейдер',
                                                                    width: 24,
                                                                    height: 24
                                                                },
                                                                'Дарт Вейдер'
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                    ]
                                },
                                {
                                    elem: 'side',
                                    elemMods: { align: 'right' },
                                    content: [
                                        {
                                            elem: 'pickers',
                                            content: [
                                                {
                                                    elem: 'datepicker',
                                                    content: {
                                                        elem: 'input',
                                                        elemMods: { type: 'date'},
                                                        content: [
                                                            'Дата',
                                                            {
                                                                block: 'input',
                                                                mods: { type: 'date' },
                                                                val: '12 января, 2018'
                                                            }
                                                        ]
                                                    }
                                                },
                                                {
                                                    elem: 'timepicker',
                                                    content: [
                                                        {
                                                            elem: 'input',
                                                            elemMods: { type: 'time'},
                                                            content: [
                                                                'Начало',
                                                                {
                                                                    block: 'input',
                                                                    val: '16:00'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'dash'
                                                        },
                                                        {
                                                            elem: 'input',
                                                            elemMods: { type: 'time'},
                                                            content: [
                                                                'Конец',
                                                                {
                                                                    block: 'input',
                                                                    val: '16:30'
                                                                }
                                                            ]
                                                        },
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'recommendations',
                                            content: [
                                                'Ваша переговорка',
                                                {
                                                    elem: 'recommendation',
                                                    elemMods: { current: true},
                                                    content: [
                                                        {
                                                            elem: 'period',
                                                            content: '16:00 — 16:30'
                                                        },
                                                        {
                                                            elem: 'place',
                                                            content: 'Готем · 4 этаж'
                                                        },
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block : 'footer',
            content : [
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        size: 'l',
                        type: 'dismiss'
                    },
                    text: 'Отмена'
                },
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        size: 'l',
                        type: 'dismiss'
                    },
                    text: 'Удалить встречу'
                },
                {
                    block: 'button',
                    mods: {
                        theme: 'islands',
                        size: 'l',
                        type: 'dismiss',
                        last: true
                    },
                    text: 'Сохранить'
                }
            ]
        },
        {
            block: 'modal',
            content: {
                elem: 'body',
                content: [
                    {
                        block: 'image',
                        width: 40,
                        height: 40,
                        url : '../../img/emoji1.svg',
                        alt : 'Девочка делает руками "Нельзя"'
                    },
                    {
                        elem: 'title',
                        content: 'Встреча будет удалена безвозвратно'
                    },
                    {
                        block: 'row',
                        content: [
                            {
                                block: 'button',
                                mix: { block: 'modal', elem: 'button' },
                                mods: {
                                    theme: 'islands',
                                    size: 'l',
                                    type: 'dismiss'
                                },
                                text: 'Отмена'
                            },
                            {
                                block: 'button',
                                mix: { block: 'modal', elem: 'button' },
                                mods: {
                                    theme: 'islands',
                                    size: 'l',
                                    type: 'dismiss',
                                    last: true
                                },
                                text: 'Удалить'
                            }
                        ]
                    }
                ]
            }
        }
    ]
})