import React from 'react'
import Formsy from 'formsy-react'
import MainInput from 'modules/inputs/MainInput'
import { connect } from 'react-redux'
import Button from 'modules/buttons/PrimaryButton'
import addAnimal from '../../store/actions/addAnimal'
// import 'modules/inputs/inputs.scss'

const Animal = React.createClass({
  getInitialState () {
    return {
      canSubmit: false
    }
  },
  enableButton () {
    this.setState({
      canSubmit: true
    })
  },
  disableButton () {
    this.setState({
      canSubmit: false
    })
  },
  submit (model) {
    this.addAnimal(model);
    console.log(model)
  },

  addAnimal (animalInformation) {
    this.props.onAddAnimal('LDq2ZZuAYpNAvGMVcjnnnlRcMcA3', animalInformation)
  },
  render () {
    return (
      <div className='animal_form_wrapper main_section'>
        <div className='animal_form'>
          <div className='form_box'>
            <Formsy.Form className='form' onValidSubmit={this.submit} onValid={this.enableButton} onInvalid={this.disableButton}>
              <MainInput name='category' type='text' placeholder='Category' required />
              <MainInput name='sex' type='text' placeholder='Sex' required />
              <MainInput name='size' type='text' placeholder='Size' required />
              <MainInput name='age' type='text' placeholder='age' required />
              <MainInput name='alias' type='text' placeholder='Alias' required />
              <Button type='submit'>Submit</Button>
            </Formsy.Form>
          </div>
        </div>
      </div>
    )
  }
})

let mapStateToProps = (state) => {
  return {
    addAnimal: state.addAnimal
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAddAnimal: (key, obj) => dispatch(addAnimal(key, obj))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Animal)
