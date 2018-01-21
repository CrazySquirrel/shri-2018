import React from 'react';
import moment from 'moment';
import classnames from 'classnames';

import Indicator from './Indicator';

const Hour = ({ selectedDay, value, past }) => {
	const hour = +value;
	const isToday = moment().isSame(selectedDay, 'day');
	const isCurrentAndWorkingHour = moment().hour() === hour && hour >= 8 && hour <= 23;
	const isBeforeWorking = moment().hour() < 8 && hour < 8;

	const minutes = moment().add(1, 'm').format('mm');
	const classNames = classnames(
		'timeline__hour',
		{ ['timeline__hour_current']: isToday && (isCurrentAndWorkingHour || isBeforeWorking) }
	);
	const textClassNames = classnames(
		'timeline__text',
		{ ['timeline__text_past']: past }
	);
	const body = isToday && (isCurrentAndWorkingHour || isBeforeWorking) &&
		<Indicator hour={value} minutes={minutes} />

	return (
		<div className={classNames}>
			<div className={textClassNames}>{value === "8" ? "8:00" : value}</div>
			{body}
		</div>
	);
};
export default Hour;
