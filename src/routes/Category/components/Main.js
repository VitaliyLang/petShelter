import React, {Component} from 'react'
import AnimalItem from './AnimalItem'
import './Main.scss'
import animals from '../data'



class Main extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const blocks = animals.map((animal, index)=>{
            return <AnimalItem url = {animal.url} key = {index} />
        })
        return(
            <main>
                <div className = "container">
                    {blocks}
                </div>
            </main>
        )
    }    
}

export default Main