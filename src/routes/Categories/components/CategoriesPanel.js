import React from 'react'
import Category from './Category.js'

class CategoriesPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        let data = this.props.categories,
            panelTamplate = [];
        if(data.length > 0){
            panelTamplate = data.map((item,i) => {
                return(
                    <li className='categorLi ' key={i}>
                        <Category category={item}/>
                    </li>
                )
            })
        }else{
            panelTamplate = <div/>
        }
        return(
            <div className='main_section'>
                <ul className='categorUl'>
                    {panelTamplate}
                </ul>
                
        </div>
        )
    }
}

export default CategoriesPanel