import { takeLatest } from "@redux-saga/core/effects";
import { handleGetUser } from "./handlers/user";
import { getUser } from "../ducks/userSlice";

export function* watchUser() {
	yield takeLatest(getUser.type, handleGetUser);
	console.log("userSaga.watchUser");
}
