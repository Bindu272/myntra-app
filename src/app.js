import React from 'react'
import { Provider } from 'react-redux'
import appStore from './Redux/appStore'
import Layout from './Components/Layout/Layout'

const App = () => {
  return (
    <>
        <Provider store={appStore}>
            <Layout/>
        </Provider>
    </>
  )
}

export default App