import React, { Component } from 'react'
import './Main.scss'
import * as animals from '../data.json'
import { List } from 'react-virtualized'
import { Link } from 'react-router'

const listModify = []
for (let i = 0, y = 0; i < animals.length; i += 3, y++) {
  listModify[y] = [animals[i], animals[i + 1], animals[i + 2]]
}

function rowRenderer ({
                        key,
                        index,
                        isScrolling,
                        isVisible,
                        style
                      }) {
  const content = isScrolling
    ? <div className='flex-container_img'>
      <Link className="load"><img
        src="http://www.myiconfinder.com/uploads/iconsets/256-256-7a1b32bc6cee8e58f09af677cbfb0255.png"/></Link>
      <Link className="load"><img
        src="http://www.myiconfinder.com/uploads/iconsets/256-256-7a1b32bc6cee8e58f09af677cbfb0255.png"/></Link>
      <Link className="load"><img
        src="http://www.myiconfinder.com/uploads/iconsets/256-256-7a1b32bc6cee8e58f09af677cbfb0255.png"/></Link>
    </div>
    : <div className='flex-container_img'>
      <Link to={`/categories/test/${index}`}><img src={listModify[index][0].url}/></Link>
      <Link to='/categories/test/1'><img src={listModify[index][1].url}/></Link>
      <Link to='/categories/test/1'><img src={listModify[index][2].url}/></Link>
    </div>
  style.top = style.height * index
  return (
    <div
      key={key}
      style={style}
    >
      {content}
    </div>
  )
}

class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: 250
    }
    this.update = this.update.bind(this)
    this.update = this.debounce(this.update, 300)
  }

  debounce (fn, delay) {
    let timer
    return function () {
      clearTimeout(timer)
      timer = setTimeout(fn, delay)
    }
  }

  update () {
    this.setState({
      height: window.innerWidth * 0.8 * 0.3 / 1.33
    })
  }

  componentDidMount () {
    window.addEventListener('resize', this.update)
    this.update()
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.update)
  }

  render () {
    return (
      <List
        width={1200}
        height={600}
        rowCount={listModify.length}
        rowHeight={this.state.height}
        rowRenderer={rowRenderer}
        style={{
          height: '100%',
          width: '80%'
        }}
      />
    )
  }
}

export default Main