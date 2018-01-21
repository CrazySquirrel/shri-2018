import React from 'react';
import classnames from 'classnames';

import { widgetTypes } from '../constants/';

const Widget = ({ mod, handleClick }) => {
	const { src = '', alt = '', elemMod } = widgetTypes[mod]
	const classNames = classnames(
		'widget', 
		`widget_type_${mod}`
	);
	return (
		<button 
			className={classNames}
			onClick={handleClick}
		>
		{mod && mod !== 'close' &&
			<div className="widget__image">
				<img className={elemMod} src={src} alt={alt} />
			</div>
		}
		</button>
	);
};
export default Widget;