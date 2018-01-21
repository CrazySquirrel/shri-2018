import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { DateUtils } from 'react-day-picker'
import DayPickerInput  from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import Widget from '../Widget';
import Hour from './Hour';
import { monthsShort, weekdays, hours } from '../../constants/';
import { setDay } from '../../AC/selectedDay';

moment.locale('ru');
moment.updateLocale('ru', { monthsShort });

class Timeline extends Component {

	handleDayChange = (selectedDay) => {
		const { handleSetDay } = this.props; 
   		const parsedSelectedDay = moment(selectedDay);
		handleSetDay(parsedSelectedDay.valueOf());
    	this.dayPicker.input.blur();
    };

    handleMinusDay = () => {
    	const handleSetDay = this.props.handleSetDay; 
   		const selectedDay = moment(this.props.selectedDay);
    	selectedDay.subtract(1, 'days');
    	handleSetDay(selectedDay.valueOf());
    };

    handlePlusDay = () => {
    	const handleSetDay = this.props.handleSetDay; 
   		const selectedDay = moment(this.props.selectedDay);
    	selectedDay.add(1, 'days');
    	handleSetDay(selectedDay.valueOf());
    };

    getDisplayDateValue = () => {
    	const selectedDay = moment(this.props.selectedDay);
    	const today = moment();
    	let result = selectedDay.locale('ru').format('D MMM');

    	if(selectedDay.year() === today.year() && 
    		selectedDay.month() === today.month() &&
    		selectedDay.date() === today.date())
    		result = `${result} · Сегодня`;

    	else if(selectedDay.year() === today.year() && 
    		selectedDay.month() === today.month() &&
    		selectedDay.date() === today.add(1, 'days').date())
    		result = `${result} · Завтра`;
    	
    	else result = `${result} · ${weekdays[selectedDay.day()]}`;
    	
    	return result;
    };

    renderDay = (day) => {
    	const text = moment(day).date();
    	const isSelectedDay = moment(day).isSame(moment(this.props.selectedDay), 'day') 
		return isSelectedDay ?
			<div className="datepicker__today">{text}</div> :
			text;
    }

    isHourPast = (hour, day) => day.isBefore(moment(), 'day') || (day.isSame(moment(), 'day') && day.hour() + 1 > +hour);
	render(){
		const selectedDay = moment(this.props.selectedDay);
		return (
			<div className="timeline">
				<div className="timeline__current">
					<Widget 
						mod="left" 
						handleClick={this.handleMinusDay}
					/>
					<DayPickerInput
						value={this.getDisplayDateValue()}
			          	onDayChange={this.handleDayChange}
			          	formatDate={formatDate}
				        parseDate={parseDate}
				        format="D MMM"
				        placeholder={`${formatDate(new Date(), 'D MMM', 'ru')}`}
			          	dayPickerProps={{
				            numberOfMonths: 3,
				            locale: 'ru',
          					localeUtils: MomentLocaleUtils,
          					renderDay: this.renderDay
				        }}
				        classNames={{
							container: 'timeline__input',
							overlayWrapper: 'datepicker',            
							overlay: 'datepicker__body'            
						}}
						ref={(dayPicker) => { this.dayPicker = dayPicker }}
					/>
					<Widget 
						mod="right" 
						handleClick={this.handlePlusDay}
					/>
				</div>
				{hours.map((hour, index) => (
					<Hour
						key={index}
						selectedDay={selectedDay} 
						value={hour} 
						past={this.isHourPast(hour, selectedDay)}
					/>
				))}
			</div>
		);
	};
};

const mapStateToProps = (state) => ({
    selectedDay: state.selectedDay
});
const mapDispatchToProps = (dispatch) => {
    return {
    	handleSetDay: day => dispatch(setDay(day))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);