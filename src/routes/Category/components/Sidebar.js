import React, {Component} from 'react'
import './Sidebar.scss'

class Sidebar extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <aside>
                <h2> Filter </h2>
                <p> Sex </p>
                <label>
                    <input type = "radio" name = "sex" value = "any" defaultChecked /> Any
                </label><br/>
                <label>
                    <input type = "radio" name = "sex" value = "male"/> Male
                </label><br/>
                <label>
                    <input type = "radio" name = "sex" value = "female"/> Female
                </label>
                <p> Size </p>
                <label>
                    <input type = "radio" name = "size" value = "any" defaultChecked /> Any
                </label><br/>
                <label>
                    <input type = "radio" name = "size" value = "small"/> Small
                </label><br/>
                <label>
                    <input type = "radio" name = "size" value = "medium"/> Medium
                </label><br/>
                <label>
                    <input type = "radio" name = "size" value = "large"/> Large
                </label>
                <p> Age </p>
                <label>
                    <input type = "radio" name = "age" value = "baby" defaultChecked /> Any
                </label><br/>
                <label>
                    <input type = "radio" name = "age" value = "baby"/> Baby
                </label><br/>
                <label>
                    <input type = "radio" name = "age" value = "young"/> Young
                </label><br/>
                <label>
                    <input type = "radio" name = "age" value = "adult"/> Adult
                </label><br/>
                <label>
                    <input type = "radio" name = "age" value = "senior"/> Senior
                </label>
            </aside>
        ) 
    }
}

export default Sidebar