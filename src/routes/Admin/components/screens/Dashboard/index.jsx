import React from 'react'
import PetsTable from '../../layouts/PetsTable';
class Dashboard extends React.Component {
    render(){
        return(
            <div>
	            <p>There will be such information: how many messages are active</p>
	            <PetsTable />
	          </div>
        )
    }
}

export default Dashboard