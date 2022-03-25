import { Fragment, useState } from 'react'

import tw from 'tailwind-styled-components'

import BreakpointsSC from './BreakpointsSC'
import NavLink from './NavLink'

const Nav = tw.nav`
  relative
  mb-3
  flex
  flex-wrap
  items-center
  justify-between
  bg-blue-500
  px-2
  py-3
`

const NavContainer = tw.div`
  container
  mx-auto
  flex
  flex-wrap
  items-center
  justify-between
  px-4
`

const Logo = tw.div`
  relative
  flex
  w-full
  justify-between
  md:static
  md:block
  md:w-auto
  md:justify-start
`

const LogoContents = tw.h1`
  whitespace-no-wrap
  mr-4
  inline-block
  py-2
  text-sm
  font-bold
  uppercase
  leading-relaxed
  text-white
`

const Burger = tw.button`
  block
  cursor-pointer
  rounded
  border
  border-solid
  border-transparent
  bg-transparent
  px-3
  py-1
  text-xl
  leading-none
  text-white
  outline-none
  focus:outline-none
  md:hidden
`
const NavTools = tw.div`
  flex-grow
  items-center
  md:flex
  ${(p) => (p.$navOpen ? 'flex' : 'hidden')}
`
const ToolList = tw.ul`
  flex
  list-none
  flex-col
  md:ml-auto
  md:flex-row
`
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
const LinkSpan = tw.span`
  ml-2
`

function Navbar1({ data, navOpen, scrolledFromTop, handleNav }) {
  console.log('NavBar1.data: ', data)

  const [currLink, setCurrLink] = useState('HOME')

  const clickHandler = (e) => {
    setCurrLink(e.target.innerText)
  }

  return (
    <Fragment>
      <Nav>
        <NavContainer>
          <Logo>
            <LogoContents href="">AntiScrabble</LogoContents>

            <Burger type="button" onClick={() => handleNav(!navOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </Burger>
          </Logo>
          <NavTools $navOpen={navOpen} id="example-navbar-danger">
            <ToolList onClick={clickHandler}>
              <BreakpointsSC />

              {data.map((item, index) => {
                return (
                  <li key={item.key} tabIndex={item.key}>
                    <NavLink
                      route={item.route}
                      label={item.label}
                      d={item.d}
                      txtColor={item.txtColor}
                      txtColorSC={item.txtColorSC}
                      handleNav={handleNav}
                      currLink={currLink}
                    />
                  </li>
                )
              })}
            </ToolList>
          </NavTools>
        </NavContainer>
      </Nav>
    </Fragment>
  )
}

export default Navbar1
