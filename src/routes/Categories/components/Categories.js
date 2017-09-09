import React from 'react'
import CategoriesPanel from './CategoriesPanel'
import './styles.scss'

let categoriesArr = ['dogs','cats','elephants'];

class Categories extends React.Component {
    render(){
        return(
            <CategoriesPanel categories={categoriesArr}/>
        )
    }
}

export default Categories



