import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

function* fetchUser(action) {
	try {
		console.log("sagaSaga");
	} catch (e) {
		console.log("error");
	}
}

export default mySaga;
