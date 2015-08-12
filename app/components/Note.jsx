import React from 'react';
import { getAutoBinder } from '../lib/utils';

export default class Note extends React.Component {
	constructor(props) {
		super(props); // UGH....

		if (!props.onEdit) {
			props.onEdit = () => {};
		}

		this.state = {
			editing: false
		};
	}

	edit() {
		this.setState({
			editing: true
		});
	}

	checkEnter(e) {
		if (e.key === 'Enter') {
			this.finishEdit(e);
		}
	}

	finishEdit(e) {
		this.setState({
			editing: false
		});

		this.props.onEdit(e.target.value);
	}

	render() {
		const props = this.props;
		const state = this.state;
		const events = getAutoBinder(this)(['finishEdit', 'checkEnter', 'edit']);

		return (
			<div>
				{ state.editing ? <input type="text" autoFocus={true} defaultValue={props.task} onBlur={events.finishEdit} onKeyPress={events.checkEnter} /> :
					<div onClick={events.edit}>{props.task}</div>
				}
			</div>
		);
	}
}