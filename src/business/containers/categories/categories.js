import React, { Component } from 'react';
// import { connect } from 'react-redux'
// import { signIn } from '../../../store/actions/actions'
import { Redirect } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from "react-router-dom";

import './Categories.css'

class Categories extends Component {
  state = {
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // this.props.signIn(this.state)
    console.log('submit')
  }
  render() {

    // const { authError, auth, classes } = this.props
    // if (auth.uid) return <Redirect to='/Feed' />

    return (<>
      {/* <Header /> */}
      <div className="container">

        <form onSubmit={this.handleSubmit} className="white">

          <div style={{display: 'inline-block', marginTop: '2rem'}}>
          {/* <Avatar style={{backgroundColor: '#dd004f', fontSize: '2rem'}}>
            <LockOutlinedIcon />
          </Avatar> */}
          </div>
        
          <Typography component="h1" variant="h5">
            Add a Category
          </Typography>

          <div className="SignIn">
          <TextField 
            className="SignIn"
            style={{marginTop: '2rem'}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            notched
            name="email"
            autoComplete="email"
            onChange={this.handleChange}
          />
          <br></br>
          <TextField 
            // style={{width: '50%'}}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            type="password"
            name="password"
            onChange={this.handleChange}
          />
          <div className="submit">
            <Button
              style={{marginTop: '1rem', marginBottom: '2rem', color: 'white', backgroundColor: '#0378d8'}}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Save
            </Button>

            <div>
              {/* { authError ? <p>{authError}</p> : null} */}
            </div>
          </div>
          </div>

        </form>

      </div>
      </>
    )
  }
}

export default Categories;