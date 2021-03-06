/* eslint-disable no-constant-condition */

import { delay, put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync() {
    yield delay(1000)
    yield put({ type: 'INCREMENT' })
}

export default function* rootSaga() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
