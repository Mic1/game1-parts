import '../styles/globals.css'

import { Provider } from 'react-redux'

import Layout from '../components/Layout'
import store from '../app/store'

function MyApp({ Component, pageProps, appData }) {
  console.log('MyApp.appData: ', appData)
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

MyApp.getInitialProps = async (ctx) => {
  console.log('MyApp.getInitialProps: ')

  const appData = { prop1: 'reloaded each Page Load', prop2: 'prop2' }
  return { appData }
}

export default MyApp
