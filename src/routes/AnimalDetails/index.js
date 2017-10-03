import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import AnimalInfo from './components/AnimalInfo'
import AnimalPictures from './components/AnimalPictures.js'
import { connect } from 'react-redux'
import './style.scss'
import debounce from 'modules/helpers/debounce'
import getAnimals from 'store/actions/animals'
import modalAdopt from 'store/actions/modalAdopt'
import animalDetailResize from 'store/actions/animalDetailResize'
import takeAnimal from 'store/actions/takeAnimal'
import signUp from 'store/actions/signup'
import NotFound from '../NotFound'

class AnimalDetails extends Component {
  constructor (props) {
    super(props)
    this.btnClick = this.btnClick.bind(this)
    this.resize = this.resize.bind(this)
    this.debounceResize = debounce(this.resize, 100)
    this.start = this.start.bind(this)
  }
  componentDidMount () {
    window.addEventListener('resize', this.start)
  }
  componentWillUnmount () {
    window.addEventListener('resize', this.start)
  }
  resize () {
    this.props.resize(false)
  }
  start () {
    if (!this.props.isResizing) {
      this.props.resize(true)
    }
    this.debounceResize()
  }
  componentWillMount () {
    let link0 = location.pathname.replace('categories', 'animals')
    link0 = link0.split('/')
    let link = ''
    for (var i = 0; i + 1 < link0.length; i++) {
      link += link0[i].toLowerCase() + '/'
    }
    link += link0[i]
    this.props.onGetAnimals(link)
  }
  btnClick () {
    this.props.showModal(!this.props.show)
  }
  render () {
    let Picture
    if (this.props.isResizing) {
      Picture = null
    } else {
      Picture = <AnimalPictures animal={this.props.listAnimals.animals} />
    }
    if (this.props.listAnimals.animals === null) {
      return <NotFound />
    }
    if (this.props.listAnimals.isLoading) {
      return null
    }
    return (
      <div className='flex-container img-detail'>
        <AnimalInfo animal={this.props.listAnimals.animals} show={this.props.show} click={this.btnClick} adopt={this.props.takeAnimal} signUp={this.props.signUp} succeed={this.props.succeed} />
        {Picture}
      </div>
    )
  }
}

export default connect(
  state => ({
    listAnimals: state.listAnimals,
    show: state.animalDetail.show,
    isResizing: state.animalDetail.isResizing,
    succeed: state.takeAnimal.isTaking
  }),
  dispatch => ({
    onGetAnimals: (link) => dispatch(getAnimals(link)),
    showModal: (bool) => dispatch(modalAdopt(bool)),
    resize: (bool) => dispatch(animalDetailResize(bool)),
    takeAnimal: (key, category, status) => dispatch(takeAnimal(key, category, status)),
    signUp : (obj) => dispatch(signUp(obj))
  })
)(AnimalDetails)
