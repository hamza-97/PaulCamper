import { all } from "redux-saga/effects";
import register from "./auth";
function* rootSaga() {
	yield all([register()]);
}

export default rootSaga;
