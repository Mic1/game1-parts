import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// import { isFirefox } from "react-device-detect";

import Card from '../components/card/Card'
import CardContainer from '../components/card/CardContainer'
import Message from '../components/widgets/Message'

import { fetchGameData } from '../features/game/gameSlice'
import {
  selectLoadingStatus,
  gameData,
  dataObj,
  configObj,
} from '../features/game/selectors'

import { HTTP_STATUS } from '../app/constants'

const SettingsPage = () => {
  const dispatch = useDispatch()
  const dataObjSel = useSelector(dataObj)
  const configObjSel = useSelector(configObj)
  const loading = useSelector(selectLoadingStatus)
  const data = useSelector(gameData)

  //const [reorderCount, setReorderCount] = useState(0)

  console.log('loading: ', loading)

  useEffect(() => {
    dispatch(fetchGameData())
  }, [dispatch])

  /* 	if (isFirefox) {
		alert("Using Firefox!");
	} */

  // CardContainer parent = Fragment so CardContainer inherits no css from parent

  return (
    <React.Fragment>
      {loading === HTTP_STATUS.PENDING && <Message status="loading..." />}
      {loading === HTTP_STATUS.REJECTED && <Message status="error" />}
      {loading === HTTP_STATUS.FULFILLED && (
        <CardContainer data={data} dataObj={dataObjSel}>
          <Card bgOpacity={configObjSel.bgOpacity} />
        </CardContainer>
      )}
    </React.Fragment>
  )
}

export default SettingsPage

// no getServerSideProps to get data, which is loaded from MongoDB serverless function
// and is taking too long at the moment. Means page not rendered on server until it gets
// data = blank screen on client. Function must be tuned.

// data loaded from json file to make demo easier
