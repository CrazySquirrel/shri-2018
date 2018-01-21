import React from 'react';
import classnames from 'classnames';

const Row = ({ first, children }) => {
	const classNames = classnames(
		'edit__row', 
		{ ['edit__row_first']: first }
	);
	return (
		<div className={classNames}>
		{children}
		</div>
	);
};
export default Row;