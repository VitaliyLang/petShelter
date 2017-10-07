import React from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import database from '../store/firebaseConfig/firebase'
class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired
  }
  componentDidMount () {
      let animalsForOffline = database.ref().child('animals');
      animalsForOffline.on(
          'value', snap => localStorage.setItem('offline', JSON.stringify(snap.val()))
      );
  }
  render () {
    return (
      <Provider store={this.props.store}>
        <Router history={browserHistory} children={this.props.routes} />
      </Provider>
    )
  }
}

export default App
