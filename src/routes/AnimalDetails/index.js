import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import AnimalInfo from './components/AnimalInfo'
import AnimalPictures from './components/AnimalPictures.js'
import { connect } from 'react-redux'
import './style.scss'
import debounce from 'modules/helpers/debounce'
import getAnimals from 'store/actions/animals'
import takeAnimal from 'store/actions/takeAnimal'
import signUp from 'store/actions/signup'
import NotFound from '../NotFound'

class AnimalDetails extends Component {
  constructor (props) {
    super(props);
    this.btnClick = this.btnClick.bind(this);
    this.resize = this.resize.bind(this);
    this.debounceResize = debounce(this.resize, 100);
    this.start = this.start.bind(this);
    this.state = {
      show : false,
      isResizing: false
    }
  }
  componentDidMount () {
    window.addEventListener('resize', this.start)
  }
  componentWillUnmount () {
    window.removeEventListener('resize', this.start);
  }
  resize () {
    this.setState({
      isResizing: false
    })
  }
  start () {
    if (!this.state.isResizing) {
      this.setState({
        isResizing: true
      })
    }
    this.debounceResize()
  }
  componentWillMount () {
    let link = `/animals/${this.props.params.categID.toLowerCase()}/${this.props.params.animalID}`;
    this.props.onGetAnimals(link);
  }
  btnClick () {
    this.setState((prevState)=>({
      show: !prevState.show
    }))
  }
  render () {
    let Picture
    if (this.state.isResizing) {
      Picture = null
    } else {
      Picture = <AnimalPictures animal={this.props.listAnimals.animals} />
    }
    if (this.props.listAnimals.animals === null) {
      return <NotFound />
    }
    if (this.props.listAnimals.isLoading || !this.props.listAnimals.animals.alias) {
      return null
    }
    return (
      <div className='flex-container img-detail'>
        <AnimalInfo onGetAnimals = {this.props.onGetAnimals} params = {this.props.params} animal={this.props.listAnimals.animals} show={this.state.show} click={this.btnClick} adopt={this.props.takeAnimal} signUp={this.props.signUp} succeed={this.props.succeed} isOffline={this.props.listAnimals.isOffline} />
        {Picture}
      </div>
    )
  }
}

export default connect(
  state => ({
    listAnimals: state.listAnimals,
    succeed: state.takeAnimal.isTaking
  }),
  dispatch => ({
    onGetAnimals: (link) => dispatch(getAnimals(link)),
    takeAnimal: (key, category, status) => dispatch(takeAnimal(key, category, status)),
    signUp : (obj) => dispatch(signUp(obj))
  })
)(AnimalDetails)
