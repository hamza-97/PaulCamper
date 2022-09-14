import { takeLatest } from "redux-saga/effects";
import { registerAPI } from "../api";

function* registerUser(params) {
	try {
		const { userData, navigation } = params.data;
		const response = yield registerAPI(userData);
		navigation.navigate("Success");
	} catch (error) {
		console.log("Registeration failed", error);
	}
}

export default function* register() {
	yield takeLatest("REGISTER_USER", registerUser);
}
