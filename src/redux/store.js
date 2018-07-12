import { combineReducers } from 'redux';
import { APP_INIT,
         APP_INIT_FINISHED,
         FETCH_PROJECTS_REQUEST,
         FETCH_PROJECTS_SUCCESS,
         FETCH_PROJECTS_FAILURE,
         SEND_MESSAGE_REQUEST,
         SEND_MESSAGE_SUCCES,
         SEND_MESSAGE_FAILURE } from './ActionTypes';

const initialState = {loading: true}

function didAppLoad (state = initialState, action) {
  switch (action.type) {
    case APP_INIT:
      return {loading: true}
    case APP_INIT_FINISHED:
      return {loading: false}
    default:
      return state;
  }
};

function loadedProjects (state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS_REQUEST:
      return {loading: true};
    case FETCH_PROJECTS_SUCCESS:
      return {projects: action.payload, loading: false};
    case FETCH_PROJECTS_FAILURE:
        return {error: action.payload, loading: false};
    default:
      return state;
  }
};

function messageSent (state = {}, action) {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:
      return {loading: true};
    case SEND_MESSAGE_SUCCES:
      return {loading: false, message: action.payload.message};
    case SEND_MESSAGE_FAILURE:
      return {loading: false, message: action.payload.message}
    default:
      return state;
  }
}

export default combineReducers({
  didAppLoad,
  loadedProjects,
  messageSent
})
