import { EMPLOYEE_UPDATE } from '../actions/types';

const INITIAL_STATE = {
	name: '',
	phone: '',
	shift: 'Monday'
};

export default (state = INITIAL_STATE, action) => {	
	switch(action.type) {
		case EMPLOYEE_UPDATE:
			//action.payload === {prop:name, value: 'Jane'}
			return { ...state, [action.payload.prop]: action.payload};
		default:
			return state;
	}
};