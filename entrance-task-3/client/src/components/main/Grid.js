import React, { Component } from 'react';

import Floor from './Floor'

export default class Grid extends Component {

	render(){
		return (
			<div className="grid">
				{ Array.from(Array(7)).map((_, i) => (
					<Floor value={7-i} key={7-i} />
				))}
			</div>
		)
	}
};
