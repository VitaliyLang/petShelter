import React from 'react'
import { Link } from 'react-router'

class Category extends React.Component {
  constructor (props) {
    super(props)
    this.state = { width:$(window).width(), height:$(window).height() }
    this.key
    this.updateWidth = this.updateWidth.bind(this)
  }

  updateWidth () {
    this.setState({ width: $(window).width(), height:$(window).height() })
  }

  componentWillMount () {
    this.updateWidth()
  }

  componentDidMount () {
    window.addEventListener('resize', this.updateWidth)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateWidth)
  }

  categorClick (e) {
    e.preventDefault()
    let link = '/animals/' + e.target.id, onlyKey = true, annArr = []
    let { onGetAnimals } = this.props
    onGetAnimals(link)
  }

  render () {
    let width = this.state.width,
      height = this.state.height

    width < height ? this.key = 'm' : this.key = 'd'

    let data = this.props.category,
      categorClick = this.categorClick.bind(this)
    return (
      <div className='category'>
        <img src={data.url[this.key]} />
        <p className='legend' onClick={categorClick}>
          <Link to={'/categories/' + data.category.toLowerCase()} id={data.category.toLowerCase()}>
            {data.category}
          </Link>
        </p>
      </div>
    )
  }
}

export default Category
