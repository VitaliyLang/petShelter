import React, { Component } from 'react'
import './Main.scss';
import { List } from 'react-virtualized';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import debounce from 'modules/helpers/debounce';
import NotFound from '../../NotFound'
import changeH from 'store/actions/category/changeHeight';
import modifyL from 'store/actions/category/modifyList';
import changeB from 'store/actions/category/changeBottom';
import changeT from 'store/actions/category/changeTop';
import getAnimals from 'store/actions/animals';
import placeholder from './job-placeholder.gif';
import Picture from './Picture.jsx'



class Main extends Component {
  constructor(props) {
    super(props)
    this.update = this.update.bind(this)
    this.rowRenderer = this.rowRenderer.bind(this)
    this.updateDebounce = debounce(this.update, 300);
    this.onRowsRendered = this.onRowsRendered.bind(this);
  }
  update() {
    if(!this.props.listAnimals){
      this.props.modifyList([]);
      return;
    }
    let animals = this.props.listAnimals;
    let keys = Object.keys(animals);

    const filter = this.props.filter;
    const filterKeys = Object.keys(filter);

    const WIDTH = window.innerWidth;
    const ITEM_HEIGHT_L = 0.6;
    const ITEM_HEIGHT_M = 0.4;
    const ITEM_HEIGHT_S = 0.2;
    const M = 960;
    const S = 600;

    const arr = [];
    const temporary = [];


    for (let i = 0; i < keys.length; i++) {
      temporary[i] = Object.assign(animals[keys[i]], { 'key': keys[i] });
    }
    let filtered = temporary.filter((animal) => {
      return filterKeys.every((key) => {
        return filter[key] === animal[key]
      })
    })

    animals = filtered.filter((item) => item.active == true);
    keys = Object.keys(animals);

    if (WIDTH > M) {
      for (let i = 0, y = 0; i < keys.length; i += 3, y++) {
        arr[y] = [animals[i], animals[i + 1], animals[i + 2]]
      }
      this.props.changeHeight(WIDTH * ITEM_HEIGHT_S);
    } else if (WIDTH > S) {
      for (let i = 0, y = 0; i < keys.length; i += 2, y++) {
        arr[y] = [animals[i], animals[i + 1]]
      }
      this.props.changeHeight(WIDTH * ITEM_HEIGHT_M);
    } else {
      for (let i = 0; i < keys.length; i++) {
        arr[i] = animals[i];
      }
      this.props.changeHeight(WIDTH * ITEM_HEIGHT_L);
    }

    this.props.modifyList(arr);
  }
  componentWillMount() {
    let link = `/animals/${this.props.category.toLowerCase()}`;
    Promise.resolve(this.props.onGetAnimals(link)).then(() => this.update());
  }
  componentDidMount() {
    window.addEventListener('resize', this.updateDebounce);
    window.addEventListener('submit', this.update);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDebounce);
    window.removeEventListener('submit', this.update);
    this.props.modifyList(null);
  }
  onRowsRendered({ overscanStartIndex, overscanStopIndex, startIndex, stopIndex }) {
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
      ? <div className='flex-container_img'>
        {Array.isArray(this.props.categoryStore.listModify[index])
          ? this.props.categoryStore.listModify[index].map((elem, index) => {
            if (!elem) return <div key={index} />;

              return <Picture key = {elem.key}
                       to={`/categories/${this.props.category}/${elem.key}`}
                       url = {elem.url}/>
          })
          : <Picture to={`/categories/${this.props.category}/${this.props.categoryStore.listModify[index].key}`}
            url = {this.props.categoryStore.listModify[index].url}
            key={index}
          />
        }
      </div>
      : <div className='flex-container_img'>
        {Array.isArray(this.props.categoryStore.listModify[index])
          ? this.props.categoryStore.listModify[index].map((elem, index) => <Link className='load' key={index} />)
          : <Link className='load' key={index} />
        }
      </div>
    style.top = style.height * index
    return (
      <div key={index} style={style}>
        {content}
      </div>
    )
  }
  render() {
    if (!this.props.categoryStore.listModify) {
      return null
    }
    if (!this.props.categoryStore.listModify.length) {
      return <h1 className='message1'>
        Unfortunately no animals matched your search.
             </h1>
    }
    return (
      <List
        className='ver-scroll pet-list'
        width={1200}
        height={650}
        rowCount={this.props.categoryStore.listModify.length}
        rowHeight={this.props.categoryStore.height}
        rowRenderer={this.rowRenderer}
        onRowsRendered={this.onRowsRendered}
        style={{
          height: '100%',
          width: '80%',
          outline: 'none'
        }}
      />
    )
  }
}



export default connect(
  state => ({
    categoryStore: state.category,
    filter: state.filterAnimals,
    listAnimals: state.listAnimals.animals
  }),
  dispatch => ({
    changeHeight: (heigh) => dispatch(changeH(heigh)),
    modifyList: (arr) => dispatch(modifyL(arr)),
    changeTop: (number) => dispatch(changeT(number)),
    changeBottom: (number) => dispatch(changeB(number)),
    onGetAnimals: (link) => dispatch(getAnimals(link))
  })
)(Main)