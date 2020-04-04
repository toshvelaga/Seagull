import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'

class Home extends Component {
    state = {  }
    render() { 
        return (<>
            <Navbar />
            <h1>Home</h1>
        </>
        );
    }
}
 
export default Home;