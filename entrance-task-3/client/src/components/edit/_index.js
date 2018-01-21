import React, { PureComponent, Fragment } from 'react';
import { Route, Redirect } from 'react-router';
import moment from 'moment';
import {
    gql,
    graphql,
    compose
} from 'react-apollo';

import Header from '../Header';
import Widget from '../Widget';
import Row from './Row';
import Side from './Side';
import EditInput from './EditInput';
import Recommendations from './Recommendations';
import Footer from './Footer';
import { toTimeFormat, toMoment, getEventsByDate, compareStartAndEnd } from './utils/';
import { eventQuery, eventsQuery, roomsQuery, usersQuery } from '../../constants/gql';

class Edit extends PureComponent {

	state = {
		redirect: false,
		existentLoaded: false,
		gridCellLoaded: false,
		isValid: false,
		title: '',
		date: undefined,
		start: undefined,
		end: undefined,
		users: [],
		room: undefined
	};

	handleInputChange = (e) => {
		const value = e.target.value;
		const name = e.target.name;

		if(name === "start"){
			this.setState({
				start: compareStartAndEnd(value, this.state.end) ? value : null,
				room: null,
				isValid: false
			});
		}else if(name === "end"){
			this.setState({
				end: compareStartAndEnd(this.state.start, value) ? value : null,
				room: null,
				isValid: false
			});
		}else{
			this.setState({
				[name]: value,
				isValid: false
			});
		}
	};

	handleSelectChange = (option) => {
		const { users } = this.state;
		this.setState({ 
			users: [...users, ...option],
			isValid: false 
		});
	};

	handleDateChange = (date) => {
		this.setState({ 
			date,
			isValid: false 
		});
	};

	handleRecommendationChange = (room, event = null) => {
		if(event){
			console.log('swapped:', room, event)
		}else{
			this.setState((prevState) => ({
				room: prevState.room === room ? '' : room,
				isValid: false
			}));
		};
	};

	handleRemoveUser = (id) => {
		const { users } = this.state;
		this.setState({
			users: users.filter(user => user.id !== id)
		});
	};

	handleReturn = () => {
		this.setState({ redirect: true })
	};

	getSelectedUsers = (users) => {
		const selectedUsers = users.map((user, i) => (
			<div
				key={i}
				className="edit__selected"
			>
				<img className="select__image" src={user.avatarUrl} alt={user.login} />
				<div className="select__login">{user.login}</div>
				<Widget
					mod="close"
					handleClick={() => this.handleRemoveUser(user.id)}
				/>
			</div>
		));
		return (
			<div className="edit__selected-container">
			{selectedUsers}
			</div>
		);
	};

	setDataFromGridCell = ({ date, start, end, room }) => {
		this.setState({ 
			gridCellLoaded: true,
			date, 
			start, 
			end, 
			room 
		});
	};

	setDataFromExistentEvent = ({ title, dateEnd, dateStart, users, room }) => {
		const date = moment(+dateStart).toDate();
		const start = toTimeFormat(+dateStart);
		const end = toTimeFormat(+dateEnd);

		this.setState({
			existentLoaded: true,
			title,
			date,
			start,
			end,
			users,
			room: room.id
		});
	};

	validateForm = ({ title, date, start, end, users, room }) => {
		const isTitle = !!title;
		const isDate = date instanceof Date;
		const isStart = !!start  
			&& typeof start === "string" 
			&& /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(start);
		const isEnd = !!end
			&& typeof end === "string" 
			&& /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(end);
		const isUsers = users && users.length > 0;
		const isRoom = /^[0-9]*$/.test(room);

		this.setState({
			isValid: isTitle && isDate && isStart && isEnd && isUsers && isRoom
		});
	}

	componentDidUpdate(){
		this.validateForm(this.state);
	}

	render() {
		console.log(this.props)
		const { redirect, existentLoaded, gridCellLoaded, isValid, title, date, start, end, users = [], room } = this.state;
		const { match: { params: { eventId } }, location, eventQuery, 
				eventsQuery, usersQuery, roomsQuery, createEventMutation } = this.props;

		const isLoading = (eventQuery && eventQuery.loading) || eventsQuery.loading || roomsQuery.loading || usersQuery.loading;


		const events = !isLoading && eventsQuery.events || [];
		const rooms = !isLoading && roomsQuery.rooms || [];
		const allUsers = !isLoading && usersQuery.users || [];

		const isUpdateExistent = !!eventId;
		const updatingEvent = isUpdateExistent && eventQuery.event;
		!existentLoaded && updatingEvent && this.setDataFromExistentEvent(updatingEvent);
		!gridCellLoaded && location.state && this.setDataFromGridCell(location.state);

		if(redirect) return <Redirect to="/" />;
		return (
			<Fragment>
				<Header isEditor />
				<div className="edit">
					<Row first>
						<div className="edit__title">
						{isUpdateExistent ? 'Редактирование встречи' : 'Новая встреча'}
						</div>
						<Widget mod="close" handleClick={this.handleReturn} />
					</Row>
					<Row>
						<Side>
							<EditInput
								label="Тема"
								name="title"
								inputType="text"
								value={title}
								handleChange={this.handleInputChange}
							/>
							<EditInput
								label="Участники"
								inputType="select"
								value={users}
								optionsData={allUsers}
								handleChange={this.handleSelectChange}
							/>
							{users.length > 0 && this.getSelectedUsers(users)}
						</Side>
						<Side right>
							<div className="edit__pickers">
								<div className="edit__input edit__datepicker">
									<EditInput
										label="Дата"
										inputType="date"
										value={date}
										handleChange={this.handleDateChange}
									/>
								</div>
								<div className="edit__timepicker">
									<EditInput
										label="Начало"
										name="start"
										inputType="time"
										value={start}
										handleChange={this.handleInputChange}
									/>
									—
									<EditInput
										label="Конец"
										name="end"
										inputType="time"
										value={end}
										handleChange={this.handleInputChange}
									/>
								</div>
							</div>
							{
							date && start && end &&
							<Recommendations
								isLoading={isLoading}
								rooms={rooms}
								users={users}
								events={events}
								date={date}
								start={start}
								end={end}
								handleChange={this.handleRecommendationChange}
								selectedRoomId={room}
								eventId={eventId}
						 	/>
							}
						</Side>
					</Row>
					<Footer
			            isUpdateExistent={isUpdateExistent}
			            isValid={isValid}
			            variables={isValid && {
			              input: {
			                title,
			                dateStart: ''+toMoment(date, start).valueOf(),
			                dateEnd: ''+toMoment(date, end).valueOf()
			              },
			              usersIds: users.map(user => user.id),
			              roomId: room
			            }}
			            eventId={eventId}
			            room={rooms.filter(val => val.id === room)[0]}
			          />
				</div>
			</Fragment>
		);
	};
};

export default compose(
	graphql(roomsQuery, {
		name: 'roomsQuery',
		options: (props) => ({
			fetchPolicy: 'cache-and-network'
		})
	}),
	graphql(eventsQuery, {
		name: 'eventsQuery',
		options: (props) => ({
			fetchPolicy: 'cache-and-network'
		})
	}),
	graphql(usersQuery, {
		name: 'usersQuery',
		options: (props) => ({
			fetchPolicy: 'cache-and-network'
		})
	}),
	graphql(eventQuery, {
		name: 'eventQuery',
		options: (props) => ({
			skip: !props.match.params.eventId,
			variables: { eventId: props.match.params.eventId},
			fetchPolicy: 'cache-and-network'
		})
	})
)(Edit);
