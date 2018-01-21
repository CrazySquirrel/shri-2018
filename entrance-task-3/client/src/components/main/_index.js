import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header';
import Timeline from './Timeline';
import Grid from './Grid';
import Modal from '../Modal';

const Main = ({ location: { state }}) => {

	const modal = state  ? 
		<Modal
			emoji={state.emoji}
			title={state.title}
			textRows={state.textRows}
		>
			<Link to="/" className="button">
			Хорошо
			</Link>
		</Modal> : null

	return (
		<div className="main">
			<Header />
			<div className="content">
				<Timeline />
				<Grid />
			</div>
			{modal} 
		</div>
	);
};
export default Main;