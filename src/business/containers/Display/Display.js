import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards';

class Display extends Component {
    state = {  }
    render() { 
        return (<>
            <Cards styles={{width: '30%'}} />
        </>);
    }
}
 
export default Display;