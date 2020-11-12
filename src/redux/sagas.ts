import { put, takeEvery, all } from 'redux-saga/effects'
import { increment } from './actions'
import * as types from './types'

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

function* incrementAsync() {
  yield delay(1000)
  yield put(increment(1))
}

function* watchIncrementAsync() {
  yield takeEvery(types.REQUEST_INCREMENT_ASYNC, incrementAsync)
}

export default function* rootSaga() {
  yield all([watchIncrementAsync()])
}
