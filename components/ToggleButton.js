/* The toggleButton as a reusable component should be able to be placed in a variety of parents
  e.g. Cards etc. */

import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleControl } from '../features/game/gameSlice'

import tw from 'tailwind-styled-components'

const ToggleDiv = tw.div`
  flex
  justify-around
`
const ToggleLabel = tw.label`
  flex
  cursor-pointer
  items-center
`
const Label = tw.div`
  px-2
`
const Description = tw.div`
  pr-1
  text-sm
  text-gray-400
`
const InputDiv = tw.div`
  relative
`
const Input = tw.input`
  peer
  hidden
`
const Path = tw.div`
  toggle-path
  background-color
  h-5
  w-9
  rounded-full
  bg-gray-200
  shadow-inner
  transition
  duration-300
  ease-in-out
peer-checked:bg-gray-700
`
const Circle = tw.div`
  toggle-circle
  top-0.7
  absolute
  inset-y-0
  left-0
  h-3.5
  w-3.5
  rounded-full
  bg-white
  shadow
  transition-all
  duration-300
  ease-in-out
  peer-checked:translate-x-full
  peer-checked:transform"

`

function ToggleButton({
  cntrlLabel,
  value,
  desc,
  parentIndex,
  childIndex,
  suffix,
}) {
  const elId = 'toggleButton' + suffix
  // console.log("ToggleButton: ", props);
  // const parentIndex = props.parentIndex;
  const dispatch = useDispatch()

  function changeHandler(cntrlLabel, id) {
    console.log('changeHandler: ', parentIndex, childIndex)
    dispatch(toggleControl([parentIndex, cntrlLabel]))
  }

  return (
    <ToggleDiv>
      <ToggleLabel htmlFor={elId}>
        <Label>{cntrlLabel}</Label>
        <Description>{desc}</Description>
        <InputDiv>
          <Input
            id={elId}
            type="checkbox"
            checked={value}
            onChange={() => {
              changeHandler(cntrlLabel, elId)
            }}
          />
          {/* path */}
          <Path />
          {/* circle */}
          <Circle></Circle>
        </InputDiv>
      </ToggleLabel>
    </ToggleDiv>
  )
}

export default ToggleButton
