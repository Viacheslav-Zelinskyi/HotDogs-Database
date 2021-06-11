import { Field, reduxForm } from 'redux-form';
import './addPopup.css';

function AddHotdogWindow(props) {
	return (
		<div className="popupContainer" onClick={() => props.openPopup(false)}>
			<div className="popup" onClick={(event) => event.stopPropagation()}>
				<h2>Add new hot-dog</h2>
				<form onSubmit={props.handleSubmit}>
					<Field component={'input'} name={'name'} type="text" className="input" placeholder="Name"></Field>
					{props.isNameExist ? <p className="warningText">Name already exists!</p> : null}
					<Field
						component={'input'}
						name={'price'}
						type="number"
						className="input"
						placeholder="Price"
					></Field>
					<Field
						component={'input'}
						name={'description'}
						type="text"
						className="input"
						placeholder="Description"
					></Field>
					<Field
						component={'input'}
						name={'imageurl'}
						type="text"
						className="input"
						placeholder="Image URL"
					></Field>
					<div style={{ display: 'flex' }}>
						<button type="button" className="btn" onClick={() => props.openPopup(false)}>
							Cancel
						</button>
						<button className="btn">Submit</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export const AddHotdogRedux = reduxForm({
	form: 'hotdog',
})(AddHotdogWindow);
