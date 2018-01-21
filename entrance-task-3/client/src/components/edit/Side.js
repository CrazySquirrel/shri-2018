import React from 'react';
import classnames from 'classnames';

const Side = ({ right, children }) => {
	const classNames = classnames(
		'edit__side', 
		{ ['edit__side_right']: right }
	);
	return (
		<div className={classNames}>
			{children}
		</div>
	);
};
export default Side;