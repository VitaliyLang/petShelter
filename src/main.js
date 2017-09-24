import React from 'react'
import ReactDOM from 'react-dom'
import createStore from './store/createStore'
require('normalize')
// Store Initialization
// ------------------------------------
const store = createStore(window.__INITIAL_STATE__)

// SW and Manifest Register
// ------------------------------------
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}

const head = document.getElementsByTagName('head')[0];

const manifest = () =>{
    let link = document.createElement('link');
    link.setAttribute('rel', 'manifest');
    link.setAttribute('href', '/manifestrules.json');
    return link;
}

head.appendChild(manifest());

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')

let render = () => {
  const App = require('./components/App').default
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <App store={store} routes={routes} />,
    MOUNT_NODE
  )
}

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e)
        renderError(e)
      }
    }

    // Setup hot module replacement
    module.hot.accept([
      './components/App',
      './routes/index',
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// Let's Go!
// ------------------------------------
render()
