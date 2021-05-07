import { call, takeEvery, put } from "redux-saga/effects";
import { increment, incrementSuccess } from "../redux/counterSlice";



function* watchIncrement() {
    try {
        yield put({ type: incrementSuccess.type })
    } catch (err) {

    }
}

function* rootSaga() {
    yield takeEvery(increment.type, watchIncrement)
}

export default rootSaga;