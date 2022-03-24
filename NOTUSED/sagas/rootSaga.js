import { takeLatest, all, fork } from '@redux-saga/core/effects'

import { watchReorderPlayers } from '../../sagas/gameSaga'

export default function* root() {
  yield all([fork(watchReorderPlayers)])
}
