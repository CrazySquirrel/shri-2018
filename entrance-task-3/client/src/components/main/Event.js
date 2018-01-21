import React, { Component } from 'react';
import { Transition } from 'react-transition-group';

import Caption from './Caption';

export default class Event extends Component {
	
	state = {
		captionVisible: false
	};

	handleClick = () => {
		this.setState(prevState => ({
			captionVisible: !prevState.captionVisible
		}))
	};
	handleClickOutside = () => {
		this.setState(prevState => ({
			captionVisible: false
		}))
	};

	render() {
		document.addEventListener("click", (e) => {
			if(this.captionHolder && !this.captionHolder.contains(e.target)) this.handleClickOutside();
		} , false);
		return (
			<div 
				className="grid__event-button"
				onClick={this.handleClick}
				ref={div => this.captionHolder = div}
			>
			<Fade in={this.state.captionVisible}>
				<Caption 
					event={this.props.event}
					handleClickOutside={this.handleClickOutside}
				/>
			</Fade>
			</div>
		);
	};
};

const transitionStyles = {
  entering: { opacity: 0, visibility: "hidden" },
  entered: { opacity: 1, visibility: "visible" },
};
const defaultStyle = {
  transition: `opacity 350ms ease`,
  opacity: 0,
  visibility: "hidden"
};
const Fade = ({ children, ...props }) => (
  <Transition {...props} timeout={350}>
    {(state) => (
      <div style={{
      	...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
);