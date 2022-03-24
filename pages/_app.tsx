import '../styles/globals.css'
// import "../styles/scrabbleboard.css";

import { Provider } from 'react-redux';

import type { AppProps } from 'next/app';

import Layout from "../components/Layout";
import store from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  // console.log('pageProps: ', pageProps);
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
 )
}

export default MyApp
