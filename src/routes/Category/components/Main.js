import React, { Component } from 'react'
import AnimalItem from './AnimalItem'
import './Main.scss'
import animals from '../data'



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolltop: 0
        }
        this.updateViewport = this.updateViewport.bind(this);
    }
    componentDidMount() {
        this.updateViewport();
    }
    updateViewport() {
        this.setState({
            scrolltop: this.main.scrollTop
        });
    }
    render() {
        return (
            <main onScroll = {this.updateViewport} ref={(main)=>this.main = main}>
                <div className="category_container">
                    {animals.map((animal, index) => 
                        <AnimalItem url={animal.url} key={index} scrolltop ={this.state.scrolltop}/>
                    )}
                </div>
            </main>
        )
    }
}

export default Main