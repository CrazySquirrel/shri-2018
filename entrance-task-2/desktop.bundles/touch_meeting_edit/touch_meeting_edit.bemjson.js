({
    block : 'page',
    title : 'Яндекс.Переговорки',
    favicon: '../../favicon.ico',
    head : [
    	{ elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '//fonts.googleapis.com/css?family=Open+Sans'},
        { elem: 'css', url: 'touch_meeting_edit.min.css' }
    ],
    scripts : [{ elem : 'js', url : 'touch_meeting_edit.min.js' }],
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
                                }
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
                                                                    width: 32,
                                                                    height: 32
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
                                                                    url: '../../img/kent.jpg',
                                                                    alt: 'Кларк Кент',
                                                                    width: 32,
                                                                    height: 32
                                                                },
                                                                'Кларк Кент'
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
                                                                {
                                                                    block: 'input',
                                                                    val: '16:30'
                                                                }
                                                            ]
                                                        },
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'side',
                                    elemMods: { align: 'right' },
                                    content: {
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
                        type: 'default'
                    },
                    text: 'Сохранить'
                }
            ]
        },
    ]
})