import { take, put, takeEvery } from 'redux-saga/effects';
import { CALL_API } from "redux-api-middleware";

import { APP_INIT,
         APP_INIT_FINISHED,
         FETCH_PROJECTS_SUCCESS,
         FETCH_PROJECTS_FAILURE,
         FETCH_PROJECTS_REQUEST,
         SEND_MESSAGE_REQUEST,
         SEND_MESSAGE_SUCCES,
         SEND_MESSAGE_FAILURE } from './ActionTypes';

const getProjectsList = () => ({
  [CALL_API]: {
    endpoint: "https://portfolio-mirzylowski-server.herokuapp.com/api/projects",
    method: "GET",
    types: [
      FETCH_PROJECTS_REQUEST,
      FETCH_PROJECTS_SUCCESS,
      FETCH_PROJECTS_FAILURE
    ]
  }
});

function* appInitiated () {
  yield put(getProjectsList());
  yield take([FETCH_PROJECTS_SUCCESS, FETCH_PROJECTS_FAILURE]);
  yield put({type: APP_INIT_FINISHED});
}

/*function* sendMessageInit() {
  console.log()
}*/

export default function* rootSaga () {
  yield takeEvery(APP_INIT, appInitiated);
  while(true) {
    yield take(SEND_MESSAGE_REQUEST);
    yield take([SEND_MESSAGE_SUCCES, SEND_MESSAGE_FAILURE]);
  }
}
