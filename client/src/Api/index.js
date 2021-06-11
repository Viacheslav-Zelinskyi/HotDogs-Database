export function getHotdogs(dispatch, setLoading) {
	fetch('http://localhost:3005/get_hotdog')
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			dispatch({ type: 'Add_hotdogs', payload: data });
			setLoading(false);
		})
		.catch((err) => {
			console.log(err);
		});
}

export async function deleteRecord(id) {
	const data = { id: id };
	fetch('http://localhost:3005/del_hotdog', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(data),
	}).then((response) => response.json());
	window.location.reload();
}

export function addHotdog(name, price, description, imageurl) {
	const data = {
		name: name,
		price: price,
		description: description,
		imageurl: imageurl,
	};
	fetch('http://localhost:3005/add_hotdog', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(data),
	})
		.then((response) => response)
		.then((data) => console.log(data));
	window.location.reload();
}

export function updateHotdog(id, name, price, description, imageurl) {
	const data = {
		id: id,
		name: name,
		price: price,
		description: description,
		imageurl: imageurl,
	};
	fetch('http://localhost:3005/edit_hotdog', {
		headers: {
			'Content-Type': 'application/json',
		},
		method: 'POST',
		body: JSON.stringify(data),
	})
		.then((response) => response)
		.then((data) => console.log(data));
	window.location.reload();
}
