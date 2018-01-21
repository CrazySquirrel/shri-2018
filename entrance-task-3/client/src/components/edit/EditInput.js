// Использую PureComponent, чтобы исключить избыточный рендеринг всех инпутов,
// Когда реально меняется всего один.
// PureComponent использует встроенную реализацию метода shouldComponentUpdate, что весьма удобно
import React, { PureComponent, Fragment } from 'react';
import Select from 'react-select-plus';
import 'react-select/dist/react-select.css';
import moment from 'moment';
import DayPickerInput  from 'react-day-picker/DayPickerInput';
import classnames from 'classnames';
import MomentLocaleUtils, {
  formatDate,
  parseDate,
} from 'react-day-picker/moment';

import SelectOption from './SelectOption';
import { selectPlaceholders } from '../../constants/';

export default class EditInput extends PureComponent {
  render() {
    const classNames = classnames(
  		'edit__input',
  		`edit__input_${inputType}`
  	);

    const { label, inputType, value, name, handleChange, optionsData = [] } = this.props;

  	if(inputType === 'date') return (
  		<Fragment>
  			{label}
  			<DayPickerInput
  				value={value || ""}
  				placeholder=""
  	          	onDayChange={handleChange}
  	          	formatDate={formatDate}
  		        parseDate={parseDate}
  		        format="D MMMM YYYY"
  	          	dayPickerProps={{
  		            numberOfMonths: 3,
  		            locale: 'ru',
                  localeUtils: MomentLocaleUtils,
                  disabledDays: { before: new Date() }
  		        }}
  		        classNames={{
  					container: 'edit__input_date',
  					overlayWrapper: 'datepicker datepicker_editor',
  					overlay: 'datepicker__body'
  				}}
  			/>
  		</Fragment>
  	);

  	if(inputType === 'select') {
  		const selected = value && value.map(user => user.id);

  		const options = optionsData
  		.filter(option => !selected.includes(option.id))
  		.map(option => ({
  			...option,
  			value: option.id,
  			label: option.login
  		}));

  		const placeHolder = `Например, ${selectPlaceholders[Math.floor(Math.random() * selectPlaceholders.length)]}`;
  		return (
  			<div className="edit__input">
  				{label}
  				<Select
  					className="select"
  			        name={inputType}
  			        clearable={false}
  			        placeholder={placeHolder}
  			        onChange={handleChange}
  			        options={options}
  			        optionComponent={SelectOption}
  			        multi={true}
  			        noResultsText="Все в сборе!"
  			      />
  			</div>
  		);
  	};

  	if(inputType === 'time') { return (
  		<div className={classNames}>
  			{label}
  			<input
  				className="edit__input-field"
  				name={name}
  				type="time"
  				min="08:00"
  				max="23:00"
  				value={value || ""}
  				onChange={handleChange}
  			/>
  		</div>)
  	};

  	return (
  		<div className={classNames}>
  			{label}
  			<input
  				className="edit__input-field"
  				name={name}
  				type="text"
  				value={value}
  				onChange={handleChange}
  			/>
  		</div>
  	);
  }
};
const getDisplayDateValue = (value) => moment(value).date();
