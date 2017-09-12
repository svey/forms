import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Button } from 'react-toolbox/lib/button';
import { Card, CardActions, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import { populateForm } from '../actions';

class Form1 extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <Card style={{ width: '50%'}}>
      <CardTitle
        title='EKA Solutions: Signup Part 1'
      />
      <CardMedia
        aspectRatio='wide'
        image="https://cdn.pixabay.com/photo/2016/08/18/00/08/belgium-1601920_960_720.jpg"
      />
      <section>
        <Input
          required
          type='text'
          label='Username'
          icon='account_circle'
          value={this.props.username}
          onChange={value => this.props.populateForm('FORM', {
            prop: 'username',
            value
          })}
        />
        <Input
          required
          type='email'
          label='Email address'
          icon='email'
          value={this.props.email}
          onChange={value => this.props.populateForm('FORM', {
            prop: 'email',
            value
          })}
        />
        <Input
          required
          hidden
          type='password'
          icon='fingerprint'
          label='Password'
          value={this.props.password}
          onChange={value => this.props.populateForm('FORM', {
            prop: 'password',
            value
          })}
        />
      </section>
      <CardActions>
        <Link to="/form2">
          <Button label="Next" />
        </Link>
      </CardActions>
    </Card>
    )
  }
}

const mapStateToProps = ({ form }) => {
  const { email, password, username } = form
  return {
    email,
    password,
    username
  }
};

export default connect(mapStateToProps, { populateForm })(Form1);
