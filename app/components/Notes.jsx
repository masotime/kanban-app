import React from 'react';
import Note from './Note';
import { getAutoBinder } from '../lib/utils';

export default class Notes extends React.Component {

	renderNote(note) {
		const props = this.props;

		return (
			<li className="note" key={`note${note.id}`}>
				<Note task={note.task} onEdit={props.onEdit.bind(null, note.id)} /> { /* effectively currying the note ID */}
			</li>
		);
	}

	render() {
		const props = this.props;
		const renderers = getAutoBinder(this)(['renderNote']);
		return (
			<ul className="notes">{props.items.map(renderers.renderNote)}</ul>
		);
	}

}