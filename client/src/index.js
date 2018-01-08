import React from 'react'
import ReactDOM from 'react-dom'
import Home from './containers/home'
import { ApolloProvider } from 'react-apollo'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

const WrappedApp = (
  <ApolloProvider client={store}>
    <Home />
  </ApolloProvider>
)

ReactDOM.render(WrappedApp, document.getElementById('root'))
registerServiceWorker()
