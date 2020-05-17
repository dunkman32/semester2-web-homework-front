const defaultState = {
	results: null,
	episodes: null,
	saved: false,
	removed: false,
	edited: false
};

const MainReducer = (state = defaultState, action) => {
	switch (action.type) {
	case 'GET_USER':
		return {
			...state,
			results: action.results,
		};
	case 'SAVE_USER':
		return {
			...state,
			saved: action.saved,
		};
	case 'DELETE_USER':
		return {
			...state,
			removed: action.removed,
		};
	case 'EDIT_USER':
		return {
			...state,
			edited: action.edited,
		};
	case 'GET_USER_BY_ID':
		return {
			...state,
			episodes: action.episodes,
		};
	default:
		return state;
	}
};

export default MainReducer;
