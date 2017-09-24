import React, { Component} from 'react';
import { browserHistory, Router } from 'react-router';
import './Sidebar.scss';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import changeValue from 'store/actions/category/changeRadioValue';
import deleteValue from 'store/actions/category/deleteRadioValue';
import setValues from 'store/actions/category/setValues';


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
        this.setQuery = this.setQuery.bind(this);
    }
    setQuery(){
        let queryObj = this.props.filter;
        let keys = Object.keys(queryObj);
        let query = [];
        keys.forEach((key)=>query.push(encodeURIComponent(key) +'='+ encodeURIComponent(queryObj[key])));
        query = query.join('&');
        let path = this.props.location.pathname;
        browserHistory.push(`${path}?${query}`);
    }
    handleSubmit(e) {
        if(window.innerWidth<500){
            this.aside.classList.remove('filter_block')
        }
        e.preventDefault();
        this.setQuery();
    }
    componentWillMount(){
        let query = this.props.location.query;
        this.props.setValues(query);
    }
    componentDidMount(){
        if(window.innerWidth<500){
            this.aside.classList.add('filter_block')
        }
    }
    handleChange(e) {
        e.target.value == 'any'
            ? this.props.deleteValue(e.target.name)
            : this.props.changeValue(e.target.name, e.target.value);
    }
    reset(){
        this.props.setValues({});
        this.setQuery();
    }
    render() {
        let values = {
            Sex: ['Any', 'Male', 'Female'],
            Size: ['Any', 'Small', 'Medium', 'Large'],
            Age: ['Any', 'Baby', 'Young', 'Adult', 'Senior']
        }
        let keys = Object.keys(values);
        return (
            <aside className="aside_category" ref={(el)=>{this.aside=el}}>
                <form onSubmit={this.handleSubmit}>
                    <h2> Filter </h2>
                    {keys.map((key, index) => {
                        return (
                            <div key={index}>
                                <p> {key} </p>
                                {values[key].map((value, index) => {
                                    let check = value.toLowerCase() == 'any' ? undefined : value.toLowerCase();
                                    return <Input
                                                type='radio'
                                                name={key.toLowerCase()}
                                                className='with-gap'
                                                label={value}
                                                value={value.toLowerCase()}
                                                onChange={this.handleChange}
                                                checked={this.props.filter[key.toLowerCase()] === check}
                                                key={index}
                                            />
                                    })
                                }
                            </div>)
                    })
                    }
                    <Button type="submit" className="filter waves-effect waves-light primaryBtn"> Apply </Button>
                    <Button  className="filter waves-effect waves-light primaryBtn" onClick={this.reset}> Reset </Button>
                </form>
            </aside>
        )
    }
}
export default connect(
    state => ({
        filter: state.filterAnimals
    }),
    dispatch => ({
        changeValue: (name, value) => dispatch(changeValue(name, value)),
        deleteValue: (name) => dispatch(deleteValue(name)),
        setValues: (obj) => dispatch(setValues(obj))
    })
)(Sidebar)