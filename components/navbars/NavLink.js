import React from 'react'
import Link from 'next/link'

import tw from 'tailwind-styled-components'

const LinkContainer = tw.a`
  flex
  items-center
  px-3
  py-2
  text-xs
  font-bold
  uppercase
  leading-snug
  text-white
  hover:opacity-75
  hover: cursor-pointer
`

//${(p) => p.$txtcolor}
const LinkSpan = tw.span`
  ml-2
  font-semibold
  text-sm
  hover:underline
  hover:decoration-2
  hover:underline-offset-4
  hover:decoration-white
  ${(p) =>
    p.$label === p.$currlink ? 'underline decoration-2 underline-offset-4' : ''}
`

function NavLink({
  route,
  label,
  exact,
  d,
  txtColor,
  txtColorSC,
  handleNav,
  currLink,
}) {
  console.log('NavLink')
  return (
    <Link href={route} exact={exact}>
      <LinkContainer
        onClick={() => {
          handleNav(false)
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d={d}
          />
        </svg>
        <LinkSpan
          $label={label}
          $currlink={currLink}
          $txtcolor={txtColor}
          txtcolorsc={txtColorSC}
        >
          {label}
        </LinkSpan>
      </LinkContainer>
    </Link>
  )
}

export default NavLink
