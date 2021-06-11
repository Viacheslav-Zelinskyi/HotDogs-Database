const initialState = {
	hotdogs: [],
};

export default function userstate(state = initialState, action) {
	console.log(action);
	switch (action.type) {
		case 'Add_hotdogs':
			return { hotdogs: action.payload };
		default:
			return state;
	}
}
