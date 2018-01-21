import React, { Component, Fragment } from 'react'; // Использую не stateless компонент, т.к. ругается react-select, который пытается передать в SelectOption ref на DOM ноду

class SelectOption extends Component {
	
	handleMouseDown = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.props.onSelect(this.props.option, e);
	};
	
	handleMouseEnter = (e) => {
		this.props.onFocus(this.props.option, e);
	};
	
	handleMouseMove = (e) => {
		if (this.props.isFocused) return;
		this.props.onFocus(this.props.option, e);
	};

	render() {
		const { option, value  } = this.props;
		if(value) return null;
		return (
			<div
				className="select__option"
				onMouseDown={this.handleMouseDown}
				onMouseEnter={this.handleMouseEnter}
				onMouseMove={this.handleMouseMove}
				title={option.login}
			>
				<img className="select__image" src={option.avatarUrl} alt={option.login} />
				<div className="select__login">{option.login}</div>
				 · 
				<div className="select__floor">{`${option.homeFloor} этаж`}</div>
			</div>
		);
	};
};
export default SelectOption;