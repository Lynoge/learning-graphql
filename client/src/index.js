import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ApolloProvider } from 'react-apollo'
import registerServiceWorker from './registerServiceWorker'
import store from './store'

console.log(store)

const WrappedApp = (
  <ApolloProvider client={store}>
    <App />
  </ApolloProvider>
)

ReactDOM.render(WrappedApp, document.getElementById('root'))
registerServiceWorker()
