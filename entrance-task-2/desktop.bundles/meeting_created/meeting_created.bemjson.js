({
    block : 'page',
    title : 'Яндекс.Переговорки',
    favicon: '../../favicon.ico',
    head : [
    	{ elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '//fonts.googleapis.com/css?family=Open+Sans'},
        { elem : 'css', url : 'meeting_created.min.css' }
    ],
    scripts : [{ elem : 'js', url : 'meeting_created.min.js' }],
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
	            },
	            {
                    elem: 'side',
                    elemMods : { align : 'right' },
                    content: [
                    	{
                    		block: 'button',
						    mods: {
						        theme: 'islands',
						        size: 'l',
						        type: 'default'
						    },
						    text: 'Создать встречу'
                    	}
                    ]
                }
    		]
		},
		{
			block: 'content',
			tag: 'main',
			content: [
				{
					block: 'timeline',
					content: [
						{
							elem: 'current',
							content: [
								{
									block: 'widget',
									content: {
										block: 'image',
										mix: { block: 'widget', elem: 'image' },
										mods: { arrow: 'left' },
										url: '../../img/arrow.svg',
			                			alt: 'Назад'
									}
								},
								{
									block: 'date',
									mix: { block: 'timeline', elem: 'date' },
									content: '14 дек · Сегодня'
								},
								{
									block: 'widget',
									content: {
										block: 'image',
										mix: { block: 'widget', elem: 'image' },
										mods: { arrow: 'right' },
										url: '../../img/arrow.svg',
			                			alt: 'Назад'
									}
								}
							]
						},
						{
							block: ''
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								elemMods: { type: 'past' },
								content: '8:00'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								elemMods: { type: 'past' },
								content: '9'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								elemMods: { type: 'past' },
								content: '10'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								elemMods: { type: 'past' },
								content: [
									'11',
									{
										elem: 'hour',
										content: {
											elem: 'indicator',
											content: [
												'11:05',
												{
													elem: 'indicator-line'
												}
											]
										}
									}
								]
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								content: '12'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								content: '13'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								content: '14'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								content: '15'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								content: '16'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								content: '17'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								content: '18'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								content: '19'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								content: '20'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								content: '21'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								content: '22'
							}
						},
						{
							elem: 'hour',
							content: {
								elem: 'text',
								content: '23'
							}
						}
					]
				},
				{
					block: 'grid',
					content: [
						{
							elem: 'cell',
							elemMods: { type: 'floor' }
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' },
							content: {
								elem: 'text',
								elemMods: { type: 'floor-title' },
								content: '7 ЭТАЖ'
							}
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' },
							content: [
								{
									elem: 'text',
									elemMods: { 
										type: 'room-title', 
										status: 'unfree' 
									},
									content: 'Ржавый Фрэд'
								},
								{
									elem: 'text',
									elemMods: { 
										type: 'capacity', 
										status: 'unfree' 
									},
									content: '3—6 человек'
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' }
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' },
							content: [
								{
									elem: 'text',
									elemMods: { 
										type: 'room-title' 
									},
									content: 'Прачечная'
								},
								{
									elem: 'text',
									elemMods: { 
										type: 'capacity'
									},
									content: 'до 10 человек'
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '5', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '55' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '5' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' }
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' },
							content: [
								{
									elem: 'text',
									elemMods: { 
										type: 'room-title'
									},
									content: 'Жёлтый дом'
								},
								{
									elem: 'text',
									elemMods: { 
										type: 'capacity'
									},
									content: 'до 10 человек'
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '5', filler: true }
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '55' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '50' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'selected' }
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' }
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' },
							content: [
								{
									elem: 'text',
									elemMods: { 
										type: 'room-title', 
										status: 'unfree' 
									},
									content: 'Оранжевый тюльпан'
								},
								{
									elem: 'text',
									elemMods: { 
										type: 'capacity', 
										status: 'unfree' 
									},
									content: 'до 10 человек'
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' }
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' },
							content: {
								elem: 'text',
								elemMods: { type: 'floor-title' },
								content: '6 ЭТАЖ'
							}
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' },
							content: [
								{
									elem: 'text',
									elemMods: { 
										type: 'room-title' 
									},
									content: 'Джокер'
								},
								{
									elem: 'text',
									elemMods: { 
										type: 'capacity'
									},
									content: '3—6 человек'
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '5', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '55' },
									content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '55' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '35', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '25' },
									content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '20' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '55', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '5' },
									content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '10' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '15', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '45' },
									content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '50' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' }
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' },
							content: [
								{
									elem: 'text',
									elemMods: { 
										type: 'room-title' 
									},
									content: 'Мариванна'
								},
								{
									elem: 'text',
									elemMods: { 
										type: 'capacity'
									},
									content: '3—6 человек'
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '5', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '55' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '35' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '55' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '50', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '10' },
										content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '40' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' }
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' },
							content: [
								{
									elem: 'text',
									elemMods: { 
										type: 'room-title' 
									},
									content: 'Тонкий Боб'
								},
								{
									elem: 'text',
									elemMods: { 
										type: 'capacity'
									},
									content: '3—6 человек'
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '20', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '40' },
										content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '35' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '35', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '25' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '20' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '40', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '20' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '45' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' }
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' },
							content: [
								{
									elem: 'text',
									elemMods: { 
										type: 'room-title' 
									},
									content: 'Чёрная вдова'
								},
								{
									elem: 'text',
									elemMods: { 
										type: 'capacity'
									},
									content: '3—6 человек'
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '45', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '15' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: [
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '15'},
										content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}, 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '15', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '30' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '25' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '55', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '5' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '10' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '45', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '15' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '40' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' }
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' },
							content: [
								{
									elem: 'text',
									elemMods: { 
										type: 'room-title' 
									},
									content: 'Белорусский ликёр'
								},
								{
									elem: 'text',
									elemMods: { 
										type: 'capacity'
									},
									content: '3—6 человек'
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '35', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '25' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: {
								elem: 'cell',
								elemMods: { type: 'free', minutes: '45' },
								content: {
									block: 'button',
									mods: {
								        theme: 'islands',
								        type: 'add'
								    },
						    		content: {
						    			elem: 'text',
						    			elemMods: { plus: true },
						    			content: '+'
						    		}
								}
							}
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '55', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '5' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree', noborder: true },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '10' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '20', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '10' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' },
							content: [ 
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '5', filler: true}
								},
								{
									elem: 'cell',
									elemMods: { type: 'free', minutes: '30' },
									content: {
										block: 'button',
										mods: {
									        theme: 'islands',
									        type: 'add'
									    },
							    		content: {
							    			elem: 'text',
							    			elemMods: { plus: true },
							    			content: '+'
							    		}
									}
								}
							]
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'unfree' }
						},
						{
							elem: 'cell',
							elemMods: { type: 'floor' }
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						},
						{
							elem: 'cell'
						}
					]
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
						url : '../../img/emoji2.svg',
	            		alt : 'Тут мог бы быть весьма праздничный эмоджи'
					},
					{
						elem: 'title',
						content: 'Встреча создана!'
					},
					{
						elem: 'text',
						content: [
							'14 декабря, 15:00—17:00', 
							{
								block: '',
								tag: 'br' // Господа, это вообще законно?!
							},
							'Готем · 4 этаж'
						]
					},
					{
						block: 'button',
						mix: { block: 'modal', elem: 'button' },
						mods: {
					        theme: 'islands',
					        size: 'l',
					        type: 'default'
					    },
					    text: 'Хорошо'
					}
				]
			}
		}
    ]
})