import React from 'react'
import Category from './Category.js'
import { Carousel } from 'react-materialize'
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
                <Carousel images={[
                    'https://lorempixel.com/250/250/nature/1',
                    'https://lorempixel.com/250/250/nature/2',
                    'https://lorempixel.com/250/250/nature/3',
                    'https://lorempixel.com/250/250/nature/4',
                    'https://lorempixel.com/250/250/nature/5'
                ]} />
        </div>
        )
    }
}

export default CategoriesPanel