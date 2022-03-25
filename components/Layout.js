import { Fragment, useState, useEffect } from 'react'

// crazy stuff happens when styled or tw used in Layout!
// Is next/Layout that special??? Needs to be debugged
// import tw from 'tailwind-styled-components'
// import styled from 'styled-components'

import Head from 'next/head'
import Navbar from '../components/navbars/Navbar1'
import Footer from '../components/widgets/Footer'
import { useSelector } from 'react-redux'

import { appData } from '../data/appData'

const Layout = (props) => {
  console.log('Render Layout: ', appData.links)

  const [navOpen, setNavOpen] = useState(false)
  const [scrolledFromTop, setScrolledFromTop] = useState(false)

  const showMenu = useSelector((state) => state.appFlags.showMenu)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    // when the user scrolls, check the pageYOffset
    setScrolledFromTop(window.pageYOffset >= 50 ? true : false)
  }

  const handleNav = (data) => {
    // console.log('Layout.handleNav')
    setNavOpen(data)
  }

  const handleScrollFromTop = (data) => {
    setNavOpen(data)
  }

  return (
    <Fragment>
      <Head>
        <title>AntiScrabble</title>
        <meta charSet="utf-8"></meta>
      </Head>

      <div
        className={`bg-white ${navOpen ? 'overflow-hidden' : 'overflow-auto'}`}
      >
        <Navbar
          data={appData.links}
          navOpen={navOpen}
          handleNav={handleNav}
          scrolledFromTop={scrolledFromTop}
        />

        <div className="mt-28 w-full">{props.children}</div>
      </div>
    </Fragment>
  )
}

/* there is no reason for the red squiggly error that I can see! */
export default Layout
