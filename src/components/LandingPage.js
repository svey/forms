import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Button } from 'react-toolbox/lib/button';
import { Card, CardActions, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import { populateForm } from '../actions';

class LandingPage extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <Card style={{ width: '50%'}}>
      <CardTitle
        title='Welcome to EKA Solutions! Please click continue below to fill out our form'
      />
      <CardMedia
        aspectRatio='wide'
        image="https://images.pexels.com/photos/93398/pexels-photo-93398.jpeg"
      />
      <CardActions>
        <Link to="/form1">
          <Button
            label="Continue"
            onClick={this.props.populateForm.bind(this, 'CLEAR', {
              prop: '',
              value: ''
            })}
          />
        </Link>
      </CardActions>
    </Card>
    )
  }
}

export default connect(null, { populateForm })(LandingPage);
