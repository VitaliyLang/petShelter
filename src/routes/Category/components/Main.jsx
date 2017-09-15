import React, { Component } from 'react'
import './Main.scss'
import * as animals from '../data.json'
import { List } from 'react-virtualized'
import { Link } from 'react-router'
import * as loading from './loading.png'



class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: window.innerWidth * 0.8 * 0.3 / 1.33,
      listModify: animals
    }
    this.update = this.update.bind(this)
    this.rowRenderer = this.rowRenderer.bind(this)
    this.updateDebounce = this.debounce(this.update, 300);
  }

  update() {
    if(window.innerWidth>1000){
      let arr = [];
      for (let i = 0, y = 0; i < animals.length; i += 3, y++) {
        arr[y] = [animals[i], animals[i + 1], animals[i + 2]]
      }
      this.setState({
        height: window.innerWidth * 0.8 * 0.3 / 1.33,
        listModify: arr
      })
    }else if(window.innerWidth > 600){
      let arr = [];
      for (let i = 0, y = 0; i < animals.length; i += 2, y++) {
        arr[y] = [animals[i], animals[i + 1]]
      }
      this.setState({
        height: window.innerWidth * 0.8 * 0.45 / 1.33,
        listModify: arr
      })
    }else{
      let arr = animals;
      this.setState({
        height: window.innerWidth * 0.8 * 0.9 / 1.33,
        listModify: arr
      })
    }
  }

  debounce(fn, delay) {
    let timer
    return function () {
      clearTimeout(timer)
      timer = setTimeout(fn, delay)
    }
  }

  componentDidMount() {
    this.update();
    window.addEventListener('resize', this.updateDebounce);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDebounce)
  }

  rowRenderer({
      key,
      index,
      isScrolling,
      isVisible,
      style
    }) {
    let content = isScrolling
      ? <div className='flex-container_img'>
          {Array.isArray(this.state.listModify[index])
            ? this.state.listModify[index].map((elem, index) => <Link className='load' key={index}><img src={loading} /></Link>)
            : <Link className='load'><img src={loading} /></Link>
          }
        </div>
      : <div className='flex-container_img'>
          {Array.isArray(this.state.listModify[index])
            ? this.state.listModify[index].map((elem, index) =>{
              if(elem===undefined) return <Link/>;
              return <Link to={`/categories/${this.props.category}/1`} key={index}><img src={elem.url} /></Link>
            })
            : <Link to={`/categories/${this.props.category}/1`}><img src={this.state.listModify[index].url} /></Link>
          }
        </div>
    style.top = style.height * index
    return (
      <div key={key} style={style}>
        {content}
      </div>
    )
  }

  render() {
    return (
      <List
        width={1200}
        height={600}
        rowCount={this.state.listModify.length}
        rowHeight={this.state.height}
        rowRenderer={this.rowRenderer}
        style={{
          height: '100%',
          width: '80%',
          outline : 'none'
        }}
      />
    )
  }
}

export default Main
