import { useState } from 'react'
import Link from 'next/link'
import tw from 'tailwind-styled-components'

import BreakpointsSC from './BreakpointsSC'
import { BeakerIcon } from '@heroicons/react/solid'

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

const LogoContents = tw.a`
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

function Navbar1({ navOpen, scrolledFromTop, handleNav }) {
  // const [navOpen, setNavOpen] = useState(false);
  const [currLink, setCurrLink] = useState('HOME')

  const clickHandler = (e) => {
    setCurrLink(e.target.innerText)
  }

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo>
            <LogoContents href="#pablo">AntiScrabble</LogoContents>

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

              <li className="">
                <Link href="/" exact>
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <LinkSpan>Home</LinkSpan>
                  </LinkContainer>
                </Link>
              </li>
              <li className="">
                <Link href="/GamePage">
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
                        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <LinkSpan>Game</LinkSpan>
                  </LinkContainer>
                </Link>
              </li>
              <li className="">
                <Link href="/Settings">
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <LinkSpan className="ml-2">Settings</LinkSpan>
                  </LinkContainer>
                </Link>
              </li>

              <li className="">
                <Link href="/TogglePage">
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
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <LinkSpan>TogglePage</LinkSpan>
                  </LinkContainer>
                </Link>
              </li>
            </ToolList>
          </NavTools>
        </NavContainer>
      </Nav>
    </>
  )
}

export default Navbar1
