import React from 'react';
import classnames from 'classnames';

const Indicator = ({ hour, minutes }) => {
	const classNames = classnames(
		'timeline__indicator', 
		`timeline__indicator_minutes_${hour >= 8 && minutes - minutes % 5}`
	);
	const text = hour >= 8 ? `${hour}:${minutes}` : '🛌💤';
	return (
		<div className={classNames}>
		{text}
		<div className="timeline__indicator-line"></div>
		</div>
	);
};
export default Indicator;