import React from 'react'
import Category from './Category.js'
import { Carousel } from 'react-responsive-carousel'

class CategoriesPanel extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    let data = this.props.categories,
      panelTamplate = [];
    if (data.length > 0) {
      panelTamplate = data.map((item, i) => {
        return (
          <Category category={item} onGetAnimals={this.props.onGetAnimals}
            listAnimals={this.props.listAnimals} key={i} />
        )
      })
    } else {
      panelTamplate = <div />
    }
    return (
      <Carousel className='categories' showArrows={false} showStatus={false}
        showThumbs={false} emulateTouch useKeyboardArrows>
        {panelTamplate}
      </Carousel>
    )
  }
}

export default CategoriesPanel
