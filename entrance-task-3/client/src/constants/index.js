import arrowLeft from '../images/arrow2.svg';
import arrowRight from '../images/arrow.svg';
import edit from '../images/edit.svg';

export const SET_DAY = 'SET_DAY';

export const weekdays = [
	"Воскресенье",
	"Понедельник",
	"Вторник", 
	"Среда", 
	"Четверг", 
	"Пятница", 
	"Суббота"
];

export const monthsShort = [
	"янв",
	"фев",
	"март", 
	"апр", 
	"май", 
	"июнь", 
	"июль",
	"авг",
	"сен",
	"окт",
	"нояб",
	"дек"
];

export const hours = [
	"",
	"8",
	"9",
	"10",
	"11",
	"12",
	"13",
	"14",
	"15",
	"16",
	"17",
	"18",
	"19",
	"20",
	"21",
	"22",
	"23"
];

export const widgetTypes = {
	left: {
		src: arrowLeft,
		alt: 'Назад',
		elemMod: 'widget__image_left' 	
	},
	right: {
		src: arrowRight,
		alt: 'Вперёд',
		elemMod: 'widget__image_right' 	
	},
	edit: {
		src: edit,
		alt: 'Редактировать',
		elemMod: 'widget__image_edit' 	
	},
	close: {
		elemMod: 'widget__image_close'
	}
};

export const selectPlaceholders = [
	"Случайный Прохожий",
	"Мой Парикмахер",
	"Сосед Который Затопил",
	"Сосед Которого Затопил",
	"Муж Подруги Тёти Друга",
	"Приятный Собеседник",
	"Коллега По Отдыху",
	"Сыктыквкарчанин",
	"Тотсамый Нукакего",
	"Пупок Васин"
];