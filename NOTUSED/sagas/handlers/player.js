import { call, put } from "redux-saga/effects";
import { setUser } from "../../ducks/userSlice";
import { getPlayerSels } from "../requests/player";

export function* handleGetPlayerSels(action) {
	try {
		const response = yield call(getPlayerSels);
		const { data } = response;
		yield put(setUser({ ...data }));
		console.log("handlers.getPlayerSels");
	} catch (error) {
		console.log(error);
	}
}
