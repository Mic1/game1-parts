import { put, call, select, takeLatest, takeEvery } from 'redux-saga/effects'
import callApi from './helpers'

import { reorderPlayers, testSagaReorder } from '../features/game/gameSlice'

// Not getting called
export function* handleReorderPlayers() {
  console.log('gameSaga.handleReorderPlayers')
  yield put(testSagaReorder())
}

export function* watchReorderPlayers() {
  console.log('gameSaga.watchReorderPlayers')
  yield takeEvery(reorderPlayers.type, handleReorderPlayers)
}
