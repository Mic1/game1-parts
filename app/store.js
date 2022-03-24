import { configureStore } from '@reduxjs/toolkit'
import { logger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import root from '../sagas/rootSaga'

import appflagsReducer from '../features/appflags/appflagsSlice'
import gameReducer from '../features/game/gameSlice'

const sagaMiddleware = createSagaMiddleware()

// console.log("ws: ", root);

const store = configureStore({
  reducer: {
    appFlags: appflagsReducer,
    game: gameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(sagaMiddleware),
})

sagaMiddleware.run(root)

export default store
