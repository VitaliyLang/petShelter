import React, { Component } from 'react';
import { Button, Input } from 'react-materialize';
import Dropzone from 'react-dropzone'

export default class ModalBox extends Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.clickOk = this.clickOk.bind(this);
        this.state = {
            showPhotoUploader:false,
            animalResp: null,
            files: []
        };
    }
    submit(e) {
        e.preventDefault();
        let userKey = this.props.userKey;
        let animal = {
            category: this.category.state.value,
            age: this.age.state.value,
            size: this.size.state.value,
            sex: this.sex.state.value,
            alias: this.nickname.state.value,
            vaccinations: this.vaccinations.state.value
        };
        this.props.onAddAnimal(userKey,animal);

        this.setState({
            showPhotoUploader: true
        })
    }

    clickOk(e){
        let check = e.target.getAttribute('data-key');
        this.props.showChange();
        if(check == 'yes'){
            this.props.onGiveOrders(
                this.props.userKey
            );
        }
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
        console.log('nextProps.addAnimal',nextProps.addAnimal);
    }

    render() {
        console.log('showPhotoUploader',this.state.showPhotoUploader);
        if (!this.props.show) {
            return null;
        }
        let content;
        if (this.props.showWarn) {
            content = <div className='modal_form'>
                        <h1 className = 'message1'>The order will be removed!
                    Are you sure?</h1>
                    <div>
                        <Button onClick = {this.clickOk} className=" btn waves-effect waves-light" data-key='yes'> Yes </Button>
                        <Button onClick = {this.clickOk} className=" btn waves-effect waves-light" data-key='no'> No </Button>
                    </div>
                    </div>
        }else if(this.state.showPhotoUploader){
            console.log('drop');
            content = 
                <div className="modal_form">
                    <Dropzone onDrop={this.onDrop.bind(this)}>
                        <p>Try dropping some files here, or click to select files to upload.</p>
                    </Dropzone>
                </div>
        }else{
            content =
                <form className='modal_form' onSubmit={this.submit} style={{height:'600px', paddingTop:'50px'}}>
                    <Input type='select' s={12} defaultValue='dog' label="Category" ref={(input) => this.category = input}>
		                <option value='dog'>Dogs</option>
		                <option value='cat'>Cats</option>
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
                    <Input label="Nickname"  ref={(input) => this.nickname = input} />
                    <Input label="Vaccinations" ref={(input) => this.vaccinations = input} />
                                   
                    <div>
                        <Button type="submit" className=" btn waves-effect waves-light"> Apply </Button>
                        <Button onClick={this.clickOk} className=" btn waves-effect waves-light"> Cancel </Button>
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