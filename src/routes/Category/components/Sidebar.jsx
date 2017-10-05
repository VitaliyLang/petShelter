import React, { Component } from 'react';
import { browserHistory, Router } from 'react-router';
import './Sidebar.scss';
import { Input, Button } from 'react-materialize';
import { connect } from 'react-redux';
import changeValue from 'store/actions/category/changeRadioValue';
import deleteValue from 'store/actions/category/deleteRadioValue';
import setValues from 'store/actions/category/setValues';
import modalAdopt from 'store/actions/modalAdopt';
import debounce from 'modules/helpers/debounce'


class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.reset = this.reset.bind(this);
        this.setQuery = this.setQuery.bind(this);

        this.values = {
            Sex: ['Any', 'Male', 'Female'],
            Size: ['Any', 'Small', 'Medium', 'Large'],
            Age: ['Any', 'Baby', 'Young', 'Adult', 'Senior']
        }
        this.keys = Object.keys(this.values);
        this.resize = this.resize.bind(this);
        this.debounceResize = debounce(this.resize, 300);
    }
    componentDidMount() {
        window.addEventListener('resize', this.debounceResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.debounceResize);
        this.props.showModal(false);
    }
    resize(){
        this.forceUpdate();
    }
    setQuery() {
        let queryObj = this.props.filter;
        let keys = Object.keys(queryObj);
        let query = [];
        keys.forEach((key) => query.push(encodeURIComponent(key) + '=' + encodeURIComponent(queryObj[key])));
        query = query.join('&');
        let path = this.props.location.pathname;
        browserHistory.push(`${path}?${query}`);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.setQuery();
        this.props.showModal(false);
    }
    componentWillMount() {
        let query = this.props.location.query;
        let cleanQuery = {};
        this.keys.forEach((key) => {
            let find = this.values[key].find((value) => value.toLowerCase() == query[key.toLowerCase()]);
            if (find) return cleanQuery[key.toLocaleLowerCase()] = query[key.toLocaleLowerCase()];
        });
        this.props.setValues(cleanQuery);
    }
    handleChange(e) {
        e.target.value == 'any'
            ? this.props.deleteValue(e.target.name)
            : this.props.changeValue(e.target.name, e.target.value);
    }
    reset() {
        this.props.setValues({});
        this.setQuery();
    }
    render() {
        if (!this.props.show && window.innerWidth < 500){
            return null
        }
        let asideClass;
        if(window.innerWidth < 500){
            asideClass ='aside_category filter_block'
        }else{
            asideClass ='aside_category'
        }
        return (
            <aside className={asideClass} ref={(el) => { this.aside = el }}>
                <form onSubmit={this.handleSubmit}>
                    <h2> Filter </h2>
                    {this.keys.map((key, index) => {
                        return (
                            <div key={index}>
                                <p> {key} </p>
                                {this.values[key].map((value, index) => {
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
                    <Button type="submit" className="filter btn waves-effect waves-light"> Apply </Button>
                    <Button className="filter btn  waves-effect waves-light" onClick={this.reset}> Reset </Button>
                </form>
            </aside>
        )
    }
}
export default connect(
    state => ({
        filter: state.filterAnimals,
        show: state.animalDetail.show
    }),
    dispatch => ({
        changeValue: (name, value) => dispatch(changeValue(name, value)),
        deleteValue: (name) => dispatch(deleteValue(name)),
        setValues: (obj) => dispatch(setValues(obj)),
        showModal: (bool) => dispatch(modalAdopt(bool))
    })
)(Sidebar)