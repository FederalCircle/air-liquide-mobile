import Axios from 'axios'
import { put, takeEvery, all } from 'redux-saga/effects'
import { updateToDoItems } from './actions'
import * as types from './actionTypes'

function* fetchToDoItemsWorker() {
  try {
    const { data } = yield Axios.get(
      'https://my.api.mockaroo.com/epilist?key=52d6c330'
    )
    yield put(updateToDoItems(data))
  } catch (err) {
    throw err
  }
}

function* fetchToDoItemsWatcher() {
  yield takeEvery(types.FETCH_TO_DO_ITEMS, fetchToDoItemsWorker)
}

export default function* rootSaga() {
  yield all([fetchToDoItemsWatcher()])
}
