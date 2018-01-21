import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';

const Header = ({ isEditor }) => {
	return (
		<div className="header">
			<div className="header__side">
				<img className="image" src={logo} alt='Яндекс.Переговорки' />
			</div>
			{ !isEditor && (
				<div className="header__side header__side_align_right">
					<Link to="/edit" className="button">
                		Создать встречу
                	</Link>
				</div>
			)}
		</div>
	);
};
export default Header;