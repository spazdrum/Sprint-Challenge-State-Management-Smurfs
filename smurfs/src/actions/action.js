import axios from 'axios';

export const FETCH_DATA = "FETCH_DATA";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const ADD_SMURF = "ADD_SMURF";
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";

export const fetchData = () => dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
        .get('https://localhost:333/smurfs')
        .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
        .catch(err => dispatch ({ type: FETCH_FAIL, payload: err.res }))
};

export const addSmurf = (smurf) => dispatch => {
    axios
        .post('http://localhost:3333/smurfs', smurf)
        .then(res => {
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res })
        })
        .catch(err => console.log(err))
};