import { put, takeEvery, all, call } from "redux-saga/effects";

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
export function* helloSaga() {
    console.log("Hello Sagas!");
}
export function* incrementAsync() {
    //use the call Effect
    yield call(delay, 500)
    yield put({ type: "INCREMENT" });
}
export function* decreaseAsync() {
    yield call(delay, 500)
    yield put({ type: "DECREMENT" })
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync() {
    yield takeEvery("INCREMENT_ASYNC", incrementAsync);
}
export function* watchDecrementAsync() {
    yield takeEvery("DECREMENT_ASYNC", decreaseAsync);
}
export default function* rootSaga() {
    yield all([helloSaga(), watchIncrementAsync(), watchDecrementAsync()]);
}