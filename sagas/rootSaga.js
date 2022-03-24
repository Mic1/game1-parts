import { takeLatest, all, fork } from '@redux-saga/core/effects'

import { watchReorderPlayers } from './gameSaga'

export default function* root() {
  yield all([fork(watchReorderPlayers)])
}
