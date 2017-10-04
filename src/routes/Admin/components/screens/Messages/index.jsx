import React from 'react'
import {connect} from 'react-redux'
import Message from './Message/'

class Messages extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        let messageArr = [];
        const { users } = this.props,
            onlyKey = true;
        if(users){
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
        return null        
    }
}

export default Messages