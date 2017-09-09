import React from 'react'
import {Link} from 'react-router'

class Category extends React.Component{
    constructor(props){
        super(props)
        this.state = {click: false};
    }

    componentDidMount() {
        this.setState({
            click: false
        });
    }

    categorClick(e) {
        e.preventDefault();
        this.setState({click: true});
    }

    render(){
        let data = this.props.category,
            click = this.state.click,
            categorClick = this.categorClick.bind(this);
        return(
            <div onClick={categorClick} 
                className={(click ? 'click': '')}>
                    <Link to='/categories/category'>{data}</Link>
            </div>
        )
    }
}

export default Category