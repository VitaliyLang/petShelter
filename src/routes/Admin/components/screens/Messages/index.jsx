import React from 'react'
import {connect} from 'react-redux'
import Message from './Message/'
import { firebaseConnect, dataToJS } from 'react-redux-firebase'
import {ReadItem} from 'components/fireBase'

class Messages extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let messageArr = [];
        const { users } = this.props,
            onlyKey = true;
        messageArr = ReadItem(users,onlyKey);
        let tamplate = [];
        if(messageArr.length > 0){
            tamplate = messageArr.map((item,i) => {
                return(                    
                    <Message key={i} message={item}/>
                )
            })
        }
        return(
            <section className='messages'>
                {tamplate}
            </section>
        )
    }
}

//export default Messages

const wrappedMessages = firebaseConnect([
    '/'
])(Messages)

export default connect(
  ({firebase}) => ({
    users: dataToJS(firebase, 'users')
  })
)(wrappedMessages)