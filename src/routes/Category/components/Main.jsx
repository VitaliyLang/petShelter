import React, { Component } from 'react'
import './Main.scss'
import { List } from 'react-virtualized'
import { Link } from 'react-router'
import {connect} from 'react-redux'
import changeH from '../../../store/actions/category/changeHeight'
import modifyL from '../../../store/actions/category/modifyList'
import changeB from '../../../store/actions/category/changeBottom'
import changeT from '../../../store/actions/category/changeTop'

class Main extends Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this)
    this.rowRenderer = this.rowRenderer.bind(this)
    this.updateDebounce = this.debounce(this.update, 300);
    this.onRowsRendered = this.onRowsRendered.bind(this);
  }

  update() {
    let animals = this.props.filter.filteredList;
    console.log(animals);
    if (window.innerWidth > 1000) {
      let arr = [];
      for (let i = 0, y = 0; i < animals.length; i += 3, y++) {
        arr[y] = [animals[i], animals[i + 1], animals[i + 2]]
      }
      this.props.changeHeight(window.innerWidth * 0.18);
      this.props.modifyList(arr);
    } else if (window.innerWidth > 600) {
      let arr = [];
      for (let i = 0, y = 0; i < animals.length; i += 2, y++) {
        arr[y] = [animals[i], animals[i + 1]]
      }
      this.props.changeHeight(window.innerWidth * 0.27);
      this.props.modifyList(arr);
    } else {
      let arr = animals;
      this.props.changeHeight(window.innerWidth * 0.55);
      this.props.modifyList(arr);
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
    window.addEventListener('submit', this.update);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDebounce);
    window.removeEventListener('submit', this.update);
  }
  onRowsRendered({ overscanStartIndex, overscanStopIndex, startIndex, stopIndex}){
    this.props.changeTop(startIndex);
    this.props.changeBottom(stopIndex);
  }
  rowRenderer({
      key,
      index,
      isScrolling,
      isVisible,
      style
    }) {
      let content = this.props.categoryStore.top <= index && index <= this.props.categoryStore.bottom
      ?<div className='flex-container_img'>
      {Array.isArray(this.props.categoryStore.listModify[index])
        ? this.props.categoryStore.listModify[index].map((elem, index) => {
          if (!elem) return <Link className='empty'/>;
          return <Link to={`/categories/${this.props.category}/1`} key={index} style={{backgroundImage: `url(${elem.url})`}} />
        })
        : <Link to={`/categories/${this.props.category}/1`} style={{ backgroundImage: `url(${this.props.categoryStore.listModify[index].url})` }} />
      }
    </div>
       :<div className='flex-container_img'>
      {Array.isArray(this.props.categoryStore.listModify[index])
        ? this.props.categoryStore.listModify[index].map((elem, index) => <Link className='load' key={index} />)
        : <Link className='load' />
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
        className='ver-scroll pet-list'
        width={1200}
        height={900}
        rowCount={this.props.categoryStore.listModify.length}
        rowHeight={this.props.categoryStore.height}
        rowRenderer={this.rowRenderer}
        onRowsRendered={this.onRowsRendered}
        style={{
          height: '100%',
          width: '80%',
          outline: 'none',
          backgroundColor: '#383D40'
        }}
      />
    )
  }
}

export default connect(
  state=>({
    categoryStore: state.category,
    filter: state.filterAnimals
  }),
  dispatch=>({
    changeHeight: (heigh)=> dispatch(changeH(heigh)),
    modifyList : (arr)=> dispatch(modifyL(arr)),
    changeTop: (number)=> dispatch(changeT(number)),
    changeBottom: (number)=> dispatch(changeB(number))
  })
)(Main)