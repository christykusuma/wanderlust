import { SELECTED_CITY } from '../actions/types';

// State argument is not application state, only the state this reducer is responsible for
export default function(state = null, action) {
    switch(action.type) {
        case SELECTED_CITY:
            console.log(action.payload);
            return action.payload;
    }
    return state;
}