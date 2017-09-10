import React from 'react'

function FormLayout(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      <h1> form Layout</h1>
      {props.children}

    </div>
  );
}
export default FormLayout
