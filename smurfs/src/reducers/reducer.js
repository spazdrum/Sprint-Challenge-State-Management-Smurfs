import { FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL } from '../actions/action';
import { ADD_SMURF, ADD_SMURF_SUCCESS } from '../actions/action';
const initialState = {
    smurfData: [],
    isFetching: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfData: action.payload
            };
        case FETCH_FAIL:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case ADD_SMURF:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case ADD_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: ''
            }
        default:
            return state;
    }
}

export default reducer;