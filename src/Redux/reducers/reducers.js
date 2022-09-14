import { REGISTER_USER } from "../actions/types";

const initialState = {
	userData: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_USER:
			return {
				...state,
				userData: action.data.userData,
			};
		default:
			return state;
	}
};
export default reducer;
