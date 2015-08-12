import React from 'react';
import Notes from './Notes';
import uuid from 'node-uuid';
import { getAutoBinder } from '../lib/utils';

export default class App extends React.Component {

	constructor(props) {
		super(props); // UGH.....

		this.state = {
			notes: ['Learn webpack', 'Learn React', 'Do the laundry'].map( task => { return {id: uuid(), task}; })
		};
	}

	addItem() {
		this.setState({
			notes: this.state.notes.concat([{id: uuid(), task: 'New task'}])
		});
	}

	onEdit(noteId, task) {
		// the immutable way
		this.setState({
			notes: this.state.notes.map( note => {
				return {
					id: note.id,
					task: note.id === noteId ? task : note.task
				};
			}).reduce( (acc, note) => acc.concat(note.task.trim().length > 0 ? [note] : []), [])
		});
	}

	render() {
		const state = this.state;
		const events = getAutoBinder(this)(['addItem', 'onEdit']);

		return (
			<div>
				<button type="button" onClick={events.addItem} />
				<Notes items={state.notes} onEdit={events.onEdit} />
			</div>
		);
	}
}