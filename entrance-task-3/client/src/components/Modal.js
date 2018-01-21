import React from 'react';

const Modal = ({ emoji, title, textRows, children }) => {
	return (
		<div className="modal">
			<div className="modal__body">
				<div className="modal__emoji">{emoji}</div>
				<div className="modal__title">{title}</div>
				{textRows && textRows.map((row, i) => <p key={i}>{row}</p>)}
				<div className="modal__buttons">{children}</div>
			</div>	
		</div>
	);
};
export default Modal;