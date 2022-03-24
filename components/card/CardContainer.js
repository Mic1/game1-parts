/* This is a true reusable component that is agnostic to its contents */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { reorderPlayers } from '../../features/game/gameSlice'

import tw from 'tailwind-styled-components'
import { reorderCountSel } from '../../features/game/selectors'

// import Card from "./Card"; NOW SENT AS CHILD

const Main = tw.div`
  flex-col
  mx-center
  py-6
  h-full
  xl:flex-1
  xl:overflow-x-hidden
  bg-gray-200
`

const TitleDiv = tw.div`
  px-4
  text-center
  xl:px-8
`
const Title = tw.h3`
  text-xl
  text-gray-900"
`

const Description = tw.p`
text-gray-600
`

const CardsContainer = tw.div`
  mt-6
  flex
  h-full
  flex-wrap
`
const CardWrapper = tw.div`
  space-between
  flex
  flex-wrap
  justify-around
  px-4
  pt-4
  xl:px-8
`

const Card = tw.div`
  mb-4
  sm:mt-0
  sm:w-80
  sm:flex-shrink-0
`

const CardContainer = ({ data, dataObj, children }) => {
  const [cardData, setCardData] = useState([])
  const dispatch = useDispatch()

  const selReorderCount = useSelector(reorderCountSel)

  console.log('children: ', data)
  const len = data[0].game.length
  console.log('CC: ', len)

  /* 	useEffect(() => {
		setCardData(data);
	}, [data]); */

  const moveHandler = (indx, direction) => {
    console.log('CardContainer.moveHandler: ', indx, direction)
    reorderPlayers(indx, direction)
  }

  return (
    <Main>
      {data.map((data, i) => {
        return (
          <div key={i}>
            <TitleDiv>
              <Title>{data[dataObj.title]}</Title>
              <Description>{data[dataObj.description]}</Description>
              <div className="bg-red-400">
                (see README: reorder players count : {selReorderCount})
              </div>
            </TitleDiv>
            <CardsContainer>
              <CardWrapper>
                {data[dataObj.details].map((detail, i) => {
                  return (
                    <Card key={i}>
                      {/* <Card cardInfo={detail} /> */}
                      {React.cloneElement(children, {
                        cardInfo: { detail },
                        cardIndex: i,
                        len: len,
                        moveHndlr: moveHandler,
                      })}
                    </Card>
                  )
                })}
              </CardWrapper>
            </CardsContainer>
          </div>
        )
      })}
    </Main>
  )
}

export default CardContainer

//  sm:overflow-x-auto sm:overflow-y-hidden
//  sm:inline-flex
// sm:overflow-x-auto sm:overflow-y-hidden
