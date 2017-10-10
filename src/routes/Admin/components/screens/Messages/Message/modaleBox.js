import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';
import Dropzone from 'react-dropzone';
import './styleModal.scss';

export default class ModalBox extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.click = this.click.bind(this);
        this.addAnimal = this.addAnimal.bind(this);
        this.takeAccept = this.takeAccept.bind(this);
        this.takeAnimal = this.takeAnimal.bind(this);
        this.state = {
            showPhotoUploader:false,
            animalResp: {},
            animal: {},
            files: []
        };
    }
    submit(e) {
        e.preventDefault();
        let animal = {
            category: this.category.state.value,
            age: this.age.state.value,
            size: this.size.state.value,
            sex: this.sex.state.value,
            alias: this.nickname.state.value,
            vaccinations: this.vaccinations.state.value
        };
        this.setState({
            animal:animal
        })
        this.setState({
            showPhotoUploader: true
        })
    }

    click(e){
        let check = e.target.getAttribute('data-key');
        this.props.showChange();
        if(check == 'yes'){
            this.props.onGiveOrders(
                this.props.userKey
            );
        }
    }

    addAnimal(){
        let userKey = this.props.userKey,
            animalObj = this.state.animal,
            photo = this.state.files;
        this.props.onAddAnimal(userKey,animalObj,photo);
        this.setState({
            animalResp: this.props.addAnimal
        })
    }

    takeAccept(){
        let userKey = this.props.userKey;
        this.props.onTakeOrder(userKey);
        this.props.showChange();
    }

    takeAnimal(){
        let userKey = this.props.userKey;
        this.props.onTakeAnimal(
            this.props.message.animalID,
            this.props.message.category,
            true,
            userKey
        )
        this.props.showChange();
    }

    onDrop(files) {
        this.setState({
          files
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            animalResp: nextProps.addAnimal
        })
    }

    render() {
        if (!this.props.show) {
            return null;
        }
        let content;
        if (this.props.showWarn) {
            content = <div className='modal_form'>
                        <h1 className = 'message1'>The order will be removed!
                    Are you sure?</h1>
                    <div className='buttons_box'>
                        <Button onClick = {this.click} className=" btn waves-effect waves-light" data-key='yes'> Yes </Button>
                        <Button onClick = {this.click} className=" btn waves-effect waves-light" data-key='no'> No </Button>
                    </div>
                    </div>
        }else if(this.state.showPhotoUploader){
            content = 
                <div className='modal_form drop'>
                    <Dropzone onDrop={this.onDrop.bind(this)}>
                        <p className="drop_area">Drop pet's photos or click to upload.</p>
                    </Dropzone>
                    <h4>Dropped photos</h4>
                    <ul>
                         {
                            this.state.files.map(f => <li key={f.name}>{f.name}</li>)
                        }
                    </ul>
                    <div className='buttons_box'>
                        <Button onClick = {this.addAnimal} className=" btn waves-effect waves-light" data-key='yes'> Save </Button>
                        <Button onClick = {this.click} className=" btn waves-effect waves-light" data-key='no'> Cancel </Button>
                    </div>
          </div>
        }else  if (this.props.message.type == 'get') {
            content = <div className='modal_form get'>
                        <i className="material-icons" onClick={this.click}>cancel</i>
                        <h1 className = 'message1'>The pet was chosen.</h1>
                        <p> Link to pet {this.props.linkToPet} </p>  
                        <p> You can accept the order (Accept) or sent pet back to list (Decline)</p>                       
                    <div>
                        <Button onClick = {this.takeAccept} className=" btn waves-effect waves-light" data-key='yes'> Accept </Button>
                        <Button onClick = {this.takeAnimal} className=" btn waves-effect waves-light" data-key='no'> Decline </Button>
                    </div>
                    </div>
        }else{
            content =
                <form className='modal_form' onSubmit={this.submit} /*style={{height:'600px', paddingTop:'50px'}}*/>
                    <Input type='select' s={12} defaultValue='dogs' label="Category" ref={(input) => this.category = input}>
		                <option value='dogs'>Dogs</option>
		                <option value='cats'>Cats</option>
		                <option value='other'>Other</option>
	                </Input>
                    <Input type='select' s={12} defaultValue='baby' label="Age"  ref={(input) => this.age = input}>
                        <option value='baby'>Baby</option>
                        <option value='young'>Young</option>
                        <option value='adult'>Adult</option>
                        <option value='senior'>Senior</option>
	                </Input>
                    <Input type='select' s={12} defaultValue='small' label="Size" ref={(input) => this.size = input}>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
	                </Input>
                    <Input type='select' s={12} defaultValue='male' label="Sex" ref={(input) => this.sex = input}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
	                </Input>
                    <Input type='select' s={12} defaultValue='true' label="Vaccinations" ref={(input) => this.vaccinations = input}>
                        <option value='true'>Vaccinated</option>
                        <option value='false'>Not Vaccinated</option>
	                </Input>
                    <Input label="Nickname"  ref={(input) => this.nickname = input} validate={true} required />
                                   
                    <div className='buttons_box'>
                        <Button type="submit" className=" btn waves-effect waves-light"> Apply </Button>
                        <Button onClick={this.click} className=" btn waves-effect waves-light"> Cancel </Button>
                    </div>
                </form>
        }
        return (
            <div className='modal_box_adopt'>
                {content}
            </div>
        );
    }
}