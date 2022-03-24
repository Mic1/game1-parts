import { createSlice, createAsyncThunk, get } from '@reduxjs/toolkit'
import axios from 'axios'

import { API_URL, HTTP_STATUS } from '../../app/constants'

const namespace = 'game'

export const fetchGameData = createAsyncThunk(
  `${namespace}/fetchGameData`,
  async () => {
    const { data } = await axios.get(`${API_URL}/game.json`)
    console.log('asyncData: ', data)
    return data
  }
)

export const gameSlice = createSlice({
  name: namespace,
  initialState: {
    loading: null,
    data: [],
    testData: 0,
    dataObj: {
      title: 'title',
      description: 'description',
      details: 'game',
    },
    configObj: {
      bgOpacity: 90,
    },
    testSagaReorder: 0,
  },
  reducers: {
    reorderPlayers: (state, { payload }) => {
      console.log('reorder players')
      const [index, direction] = payload
      const adjust = direction === 'down' ? 1 : -1
      let dataCopy = [...state.data[0].game]
      const dataRow = dataCopy[index + adjust]
      dataCopy.copyWithin(index + adjust, index, index + 1)
      dataCopy.splice(index, 1, dataRow)
      state.data[0].game = dataCopy
    },
    toggleControl: (state, { payload }) => {
      const [parentIndex, cntrlLabel] = payload

      const refControl = state.data[0].game[parentIndex].parms
      refControl[cntrlLabel].value = !refControl[cntrlLabel].value
      if (cntrlLabel === 'all' && refControl[cntrlLabel].value === true) {
        console.log('d1: ', refControl.easy.value)
        refControl.easy.value = false
        refControl.medium.value = false
        refControl.hard.value = false
      } else if (refControl[cntrlLabel].value === true) {
        refControl.all.value = false
      }
    },
    testSagaReorder: (state) => {
      console.log('GameSlice.testSagaReorder')
      state.testSagaReorder = state.testSagaReorder + 1
    },
  },
  extraReducers: {
    [fetchGameData.pending]: (state, action) => {
      state.loading = HTTP_STATUS.PENDING
    },
    [fetchGameData.fulfilled]: (state, { payload }) => {
      state.loading = HTTP_STATUS.FULFILLED
      state.data = payload
      state.dataLength = payload[0].game.length
    },
    [fetchGameData.rejected]: (state, action) => {
      console.log('state: ', state)
      state.loading = HTTP_STATUS.REJECTED
    },
  },
})

export const { reorderPlayers, toggleControl, testSagaReorder } =
  gameSlice.actions

export default gameSlice.reducer
