import React, { Component } from 'react';
import Cards from '../../components/Cards/Cards';
import Navbar from '../../components/Navbar/Navbar'

class Display extends Component {
    state = { }
    render() { 
        const dishes = {
            dish1: {
                name: 'lasagna', 
                price: 12, 
                description: 'Cooked with italian sausage',
            },
            dish2: {
                name: 'spaghetti',
                price: 13,
                description: 'Cooked with fresh meatballs'
            }
        }

        return (
        <Navbar>
            <div style={{display: 'flex'}}>
                <Cards name={dishes.dish1.name} description={dishes.dish1.description} styles={{width: '30%'}} />
                <Cards name={dishes.dish2.name} description={dishes.dish2.description} styles={{width: '30%'}} />
            </div>
        </Navbar>
        );
    }
}
 
export default Display;