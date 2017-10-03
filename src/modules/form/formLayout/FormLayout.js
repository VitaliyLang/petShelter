import React from 'react'
import './FormLayout.scss'

function FormLayout (props) {
  return (

    <form className='form'>
      {props.children}
    </form>

  )
}
export default FormLayout
