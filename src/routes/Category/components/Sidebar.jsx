import React, {Component} from 'react'
import './Sidebar.scss'
import {Input, Button} from 'react-materialize'
import {connect} from 'react-redux'
import changeValue from '../../../store/actions/category/changeRadioValue'
import deleteValue from '../../../store/actions/category/deleteRadioValue'
import setFiltered from '../../../store/actions/category/setFilteredList.js'
import * as animals from '../data.json'


class Sidebar extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeAny = this.handleChangeAny.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        let keys = Object.keys(this.props.filter);
        let filteredList = animals.filter((animal)=>{
            return keys.every((key)=> {
                return this.props.filter[key] === animal[key]||Array.isArray(this.props.filter[key])})
        })
        this.props.setFilteredList(filteredList);
    }
    handleChange(e){
        this.props.changeValue(e.target.name, e.target.value);
    }
    handleChangeAny(e){
        this.props.deleteValue(e.target.name);
    }
    render(){
        return(
            <aside className = "aside_category">
                <form onSubmit = {this.handleSubmit}>
                    <h2> Filter </h2>

                    <p> Sex </p>
                    <Input type = 'radio' name = 'sex' className='with-gap' label = 'Any' value = 'any' onChange={this.handleChangeAny} checked={this.props.filter.sex===undefined}/>
                    <Input type = 'radio' name = 'sex' className='with-gap' label = 'Male' value = 'male' onChange={this.handleChange} checked={this.props.filter.sex==='male'}/>
                    <Input type = 'radio' name = 'sex' className='with-gap' label = 'Female' value = 'female' onChange={this.handleChange} checked={this.props.filter.sex==='female'}/>

                    <p> Size </p>
                    <Input type = 'radio' name = 'size' className='with-gap' label = 'Any' value = 'any' onChange={this.handleChangeAny} checked={this.props.filter.size===undefined}/>
                    <Input type = 'radio' name = 'size' className='with-gap' label = 'Small' value = 'small' onChange={this.handleChange} checked={this.props.filter.size==='small'}/>
                    <Input type = 'radio' name = 'size' className='with-gap' label = 'Medium' value = 'medium' onChange={this.handleChange} checked={this.props.filter.size==='medium'}/>
                    <Input type = 'radio' name = 'size' className='with-gap' label = 'Large' value = 'large' onChange={this.handleChange} checked={this.props.filter.size==='large'}/>

                    <p> Age </p>
                    <Input type = 'radio' name = 'age' className='with-gap' label = 'Any' value = 'any' onChange={this.handleChangeAny} checked={this.props.filter.age===undefined}/>
                    <Input type = 'radio' name = 'age' className='with-gap' label = 'Baby' value = 'baby' onChange={this.handleChange} checked={this.props.filter.age==='baby'}/>
                    <Input type = 'radio' name = 'age' className='with-gap' label = 'Young' value = 'young' onChange={this.handleChange} checked={this.props.filter.age==='young'}/>
                    <Input type = 'radio' name = 'age' className='with-gap' label = 'Adult' value = 'adult' onChange={this.handleChange} checked={this.props.filter.age==='adult'}/>
                    <Input type = 'radio' name = 'age' className='with-gap' label = 'Senior' value = 'senior' onChange={this.handleChange} checked={this.props.filter.age==='senior'}/>

                    <Button type = "submit" className = "filter waves-effect waves-light primaryBtn"> Apply </Button>
                </form>
            </aside>
        ) 
    }
}

export default connect(
    state=>({
        filter : state.filterAnimals
    }),
    dispatch=>({
        changeValue: (name,value)=>dispatch(changeValue(name,value)),
        deleteValue: (name)=>dispatch(deleteValue(name)),
        setFilteredList : (arr)=>dispatch(setFiltered(arr))
    })
)(Sidebar)