import React from 'react'
import Message from './Message/'

class Messages extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <section className='messages'>
                <Message />
                <Message />
                <Message />
            </section>
        )
    }
}

export default Messages