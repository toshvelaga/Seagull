import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar'

class Display extends Component {
    state = {  }
    render() { 
        return (<>
        <Navbar />
            <Cards styles={{width: '30%'}} />
        </>);
    }
}
 
export default Display;