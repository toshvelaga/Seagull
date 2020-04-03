import React, { Component } from 'react';
import {MDCTopAppBar} from '@material/top-app-bar';
import AccessTimeIcon from '@material-ui/icons/AccessTime';


const NavBar = () => {
    return (<MDCTopAppBar
        title='San Francisco, CA'
        navigationIcon={<AccessTimeIcon
          onClick={() => console.log('click')}
        />}
        actionItems={[
          <AccessTimeIcon />,
          <AccessTimeIcon />,
          <AccessTimeIcon />,
        ]}
      />);
}
 
export default NavBar;


  