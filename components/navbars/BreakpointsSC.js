import tw from 'tailwind-styled-components'

const Container = tw.div`
  m-2
  flex
  h-6
  w-6
  items-center
  justify-center
  rounded-full
  bg-gray-700
  p-3
  font-mono
  text-xs
  text-white
  sm:bg-pink-500
  md:bg-orange-500
  lg:bg-green-500
  xl:bg-blue-500
`

const Al = tw.div`
  block
  sm:hidden
  md:hidden
  lg:hidden
  xl:hidden
`

const Sm = tw.div`
  hidden
  sm:block
  md:hidden
  lg:hidden
  xl:hidden
`

const Md = tw.div`
  hidden
  sm:hidden
  md:block
  lg:hidden
  xl:hidden
`

const Lg = tw.div`
  hidden
  sm:hidden
  md:hidden
  lg:block
  xl:hidden
`

const Xl = tw.div`
  hidden
  sm:hidden
  md:hidden
  lg:hidden
  xl:block
`

const Breakpoints = () => {
  return (
    <Container>
      <Al>al</Al>
      <Sm>sm</Sm>
      <Md>md</Md>
      <Lg>lg</Lg>
      <Xl>xl</Xl>
    </Container>
  )
}

export default Breakpoints
