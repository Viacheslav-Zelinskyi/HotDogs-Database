import { useState } from 'react';
import { deleteRecord, updateHotdog } from '../../Api';
import './itemCard.css';

export default function ItemCard(props) {
	const [editMode, setEditMode] = useState(false);

	function submitUpdateHotdog(event) {
		event.preventDefault();
		const data = {
			id: props.id,
			imageurl: event.target[0].value,
			name: event.target[1].value,
			price: event.target[2].value,
			description: event.target[3].value,
		};
		updateHotdog(data.id, data.name, data.price, data.description, data.imageurl);
	}

	return (
		<div className="card">
			{editMode ? (
				<form onSubmit={submitUpdateHotdog}>
					<img alt="Logo" src={props.imageurl} height="200px"></img>
					<input id="imageurl" name="imageurl" type="text" defaultValue={props.imageurl}></input>
					<input name="name" type="text" defaultValue={props.name}></input>
					<p className="price">
						<input
							name="price"
							step="0.01"
							type="number"
							defaultValue={props.price}
							style={{ width: '60px' }}
						></input>
						$
					</p>
					<textarea
						name="description"
						style={{ resize: 'none' }}
						width="300px"
						rows="7"
						cols="35"
						defaultValue={props.description}
					></textarea>
					<button className="editBtn" onClick={() => setEditMode(true)}>
						Update
					</button>
					<button type="button" className="editBtn" onClick={() => deleteRecord(props.id)}>
						Delete
					</button>
				</form>
			) : (
				<>
					<img alt="Logo" src={props.imageurl} height="200px"></img>
					<p className="itemName">{props.name}</p>
					<p className="price">{props.price}$</p>
					<p className="description">{props.description?.slice(0, 300) + '...'}</p>
					<p className="editModeBtn" onClick={() => setEditMode(true)}>
						Edit
					</p>
				</>
			)}
		</div>
	);
}
