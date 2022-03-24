import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import { reorderPlayers } from '../../features/game/gameSlice'
import tw from 'tailwind-styled-components'

import {
  ZoomInIcon,
  ZoomOutIcon,
  DotsHorizontalIcon,
  DotsVerticalIcon,
} from '@heroicons/react/outline'

import Image from 'next/image'

import StarRatings from '../../components/widgets/StarRatings'
import ToggleButton from '../ToggleButton'

const OuterDiv = tw.div`
  pb-4
  `

// relative inset-0 h-full w-full rounded-lg bg-gray-400 object-cover shadow-md move into
// enclosing Image div from Image tag (must be "relative") distorts image
const ImageDiv = tw.div`
  pb-5/6
  `

const ImageSpan = tw.span`
  absolute
  z-10
  pl-2
  pt-2
   text-white
  `

const PanelWrap = tw.div`
  relative
  px-4
  ${(p) => (p.$collapse ? 'mt-4' : '-mt-16')}
  `
const Panel = tw.div`
  rounded-lg
bg-white/50
  px-4
  pt-2
  pb-4
  shadow-lg
  ${(p) => (p.$showDetail ? 'hidden' : null)}
`

const Header = tw.div`
  flex
  justify-end
`

const HeaderButton = tw.button`
  mr-2
  rounded-md
  border-2
  border-gray-400
  drop-shadow-sm
  hover:border-black
`

const HeaderButtonCollapse = tw(HeaderButton)`
  ${(p) => (p.$collapse ? 'hidden' : null)}
`
const ZoomIconIn = tw(ZoomInIcon)`
  h-5
  w-5
  text-gray-600
`
const HorzIcon = tw(DotsHorizontalIcon)`
  h-5
  w-5
  text-gray-600
  ${(p) => (p.$collapse ? null : 'hidden')}   
`

const VertIcon = tw(DotsVerticalIcon)`
  h-5
  w-5
  text-gray-600
  ${(p) => (p.$collapse ? 'hidden' : null)} 
`
const MoveDiv = tw.div`
flex
items-baseline
${(p) => (p.$collapse ? 'hidden' : null)} 
`
const MoveButton = tw.button`
  m-1
  rounded-md
  bg-gray-600
  p-0.5
  text-xs
  font-semibold
  text-white
  disabled:cursor-default
  disabled:opacity-50
`
const AlterDiv = tw.div`
  ml-2
  inline-flex
  justify-between
  text-xs
  font-semibold
  text-gray-600
  ${(p) => (p.$collapse ? 'hidden' : null)} 
`
const CardInfo = tw.div`
  flex
  items-center
  justify-evenly
  text-gray-500
`
const CardInfoTitle = tw.div`
  mt-1
  mr-2
  text-lg
  font-semibold
  text-gray-900
`
const CardInfoDetail = tw.div`
  text-sm
`
const Params = tw.div`
  rounded-lg
  bg-white
  px-4
  pt-2
  pb-4
  shadow-lg
  ${(p) => (p.$showDetail ? null : 'hidden')}
`
const ParamsHeader = tw.header`
  flex
  justify-end
`
const ZoomIconOut = tw(ZoomOutIcon)`
  h-5"
  w-5
  text-gray-600
`
const ZoomOutButton = tw.button`
  mr-2
  rounded-md
  border-2
  border-gray-400
  drop-shadow-sm
  hover:border-black
`
const ZoomOutDiv = tw.div`
  flex
`

const Card = (props) => {
  const [collapse, setCollapse] = useState(true)
  const [showDetail, setShowDetail] = useState(false)
  const { bgOpacity, cardIndex, len, moveHndlr } = props
  const cardInfo = props.cardInfo.detail
  const indx = cardIndex + 1

  // console.log('Card.opacity: ', bgOpacity)

  const dispatch = useDispatch()

  const toggleCollapse = () => {
    // console.log('collapse: ', collapse)
    setCollapse(!collapse)
  }

  const toggleShowDetail = () => {
    // console.log('toggleShowDetail: ', collapse)
    setShowDetail(!showDetail)
  }

  const formattedNumber = (num) => {
    const formatter = new Intl.NumberFormat()
    return formatter.format(num)
  }

  const reorderHandler = (indx, direction) => {
    dispatch(reorderPlayers([indx, direction]))
  }

  // Next image blur config
  const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

  const triplet = (e1, e2, e3) =>
    keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63)

  const rgbDataURL = (r, g, b) =>
    `data:image/gif;base64,R0lGODlhAQABAPAA${
      triplet(0, r, g) + triplet(b, 255, 255)
    }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

  return (
    <OuterDiv>
      <ImageDiv>
        <ImageSpan>{indx}</ImageSpan>
        <ImageDiv>
          {/* moving Image css to enclosing ImageDiv and making "relative" distorts the image.
          Latest Next has changed Image properties -  people reporting that this has broken a lot of code */}
          <Image
            className="absolute inset-0 h-full w-full rounded-lg bg-gray-400 object-cover shadow-md"
            src={cardInfo.imageUrl}
            width={500}
            height={400}
            alt="pic"
            placeholder="blur"
            blurDataURL={rgbDataURL(237, 181, 6)}
          />
        </ImageDiv>
      </ImageDiv>
      <PanelWrap $collapse={collapse}>
        <Panel $showDetail={showDetail}>
          <Header>
            <div>
              <HeaderButtonCollapse
                $collapse={collapse}
                onClick={toggleShowDetail}
              >
                <ZoomIconIn />
              </HeaderButtonCollapse>
              <HeaderButton onClick={toggleCollapse}>
                <HorzIcon $collapse={collapse} />
                <VertIcon $collapse={collapse} />
              </HeaderButton>
            </div>
          </Header>
          <MoveDiv $collapse={collapse}>
            <MoveButton
              disabled={indx === len}
              onClick={() => {
                reorderHandler(indx - 1, 'down')
              }}
            >
              Move Down
            </MoveButton>
            <AlterDiv $collapse={collapse}>alter playing order</AlterDiv>
            <MoveButton
              disabled={indx === 1}
              onClick={() => {
                reorderHandler(indx - 1, 'up')
              }}
            >
              Move Up
            </MoveButton>
          </MoveDiv>
          <CardInfo>
            <CardInfoTitle>{cardInfo.title}</CardInfoTitle>
            <CardInfoDetail>
              <h2>played: {formattedNumber(cardInfo.gamesPlayed)}</h2>
              <h2>won: 986</h2>
              <h2>place: 7th</h2>
            </CardInfoDetail>
          </CardInfo>

          <StarRatings
            collapse={collapse}
            numStars="5"
            rating={cardInfo.rating}
            starColor="text-teal-500"
            starSize="5"
            starSizeSC="1.25rem"
            reviewNum={cardInfo.reviewCount}
            category="Overall"
          />
        </Panel>
        <Params $showDetail={showDetail}>
          <ParamsHeader>
            <ZoomOutDiv>
              <ZoomOutButton onClick={toggleShowDetail}>
                <ZoomIconOut />
              </ZoomOutButton>
            </ZoomOutDiv>
          </ParamsHeader>

          {Object.entries(cardInfo.parms).map(function (key, index) {
            return (
              <ToggleButton
                key={index}
                parentIndex={cardIndex}
                childIndex={index}
                suffix={indx + '_' + index}
                cntrlLabel={key[0]}
                value={key[1].value}
                desc={key[1].desc}
              />
            )
          })}
        </Params>
      </PanelWrap>
    </OuterDiv>
  )
}

export default Card
