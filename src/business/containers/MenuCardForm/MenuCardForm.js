import React, { Component } from 'react'

// import { connect } from 'react-redux'
import { Redirect } from 'react-router'
// import Header from '../../components/Header/Header'
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import ImageUploader from 'react-images-upload';

import { Link } from "react-router-dom";

// docs for image upload: https://jakehartnell.github.io/react-images-upload/

import './MenuCardForm.css'

class MenuCardForm extends Component {
    constructor(props){
        super(props);
        this.state = {
          pictures: [],
          dishName: '',
          amount: '',
          textValue: ''
        };
        this.onDrop = this.onDrop.bind(this);
      }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
        pictures: pictureFiles
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // this.props.signUp(this.state)
    console.log('submit')
  }

  render() {
    const CHARACTER_LIMIT = 140;

    // const { auth, authError } = this.props
    // if (auth.uid) return <Redirect to="Feed" />
    return (<>
      {/* <Header /> */}
      <div className="container">
        <form onSubmit={this.handleSubmit} className="MenuCardForm">
          <div style={{display: 'inline-block', marginTop: '2rem'}}>

          </div>

          <Typography style={{marginBottom: '2rem'}} component="h1" variant="h5">
            Add a Menu Item
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={this.handleChange}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Dish Name"
              />
            </Grid>

            <Grid item xs={12}>
                <FormControl fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                    <OutlinedInput
                    id="outlined-adornment-amount"
                    value={this.state.amount}
                    onChange={this.handleChange}
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={60}
                    />
                </FormControl>
            </Grid>

            <Grid item xs={12}>
                <TextField style={{width: '100%'}}
                value={this.state.textValue}
                inputProps={{
                    maxlength: CHARACTER_LIMIT
                }}
                helperText={`${this.state.textValue.length}/${CHARACTER_LIMIT}`}
                onChange={this.handleChange}
                id="textValue"
                label="Dish Description"
                margin="dense"
                variant="outlined"
                multiline
                rowsMax="4"
                rows="4"
                // color={this.props.color}
            />
            </Grid>

            <Grid item xs={12}>
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                />
            </Grid>

          </Grid>
          <br></br>
          <Button
            style={{backgroundColor: '#0378d8'}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Save
          </Button>
        </form>
      </div>
      </>
    )
  }
}

export default MenuCardForm;