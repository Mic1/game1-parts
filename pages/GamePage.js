import tw from 'tailwind-styled-components'

const Container = tw.div`
  flex
  h-screen
  w-full
  bg-blue-300
  py-2
`

const Main = tw.div`
  flex
  w-full
  bg-blue-300
  px-20
  text-center
`

const Screen = tw.div`
  mt-2
  min-w-full
`

function GamePage() {
  return (
    <Container>
      <Main>
        <Screen>GameScreen (all code removed)</Screen>
      </Main>
    </Container>
  )
}

export default GamePage
