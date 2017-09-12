import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardActions, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import { populateForm } from '../actions';

class Form1 extends React.Component{
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props){
    super(props);
  }

  componentDidUpdate() {
    const { email, password, username, save } = this.props;
    if (email && password && username && !save) {
      this.props.populateForm('FORM', {
        prop: 'save',
        value: true
      })
    } 
  }

  createUser() {
    const { email, password, username } = this.props;
    const url = 'http://localhost:4000/api/user';
    const body = JSON.stringify({ email, password, username, id: username })
    
    console.log(body)
    
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body
    })
    .then(res => {
      console.log(res)
      this.props.history.push('/form2')
    })
    .catch(err => console.log(err));
  }

  formComplete() {
    const { email, password, username } = this.props;
    if (email, password, username) {
      this.props.populateForm('FORM', {
        prop: 'save',
        value: true
      })
    } 
  }

  render(){

    return (
    <Card style={{ width: '50%'}}>
      <CardTitle
        title='EKA Solutions: Signup Part 1'
      />
      <CardMedia
        aspectRatio='wide'
        image="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg"
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

          <Button
            label="Save"
            onClick={this.createUser.bind(this)}
            disabled={!this.props.save}
          />
 
      </CardActions>
    </Card>
    )
  }
}

const mapStateToProps = ({ form }) => {
  const { email, password, username, save } = form;
  return {
    email,
    password,
    username,
    save
  }
};

export default connect(mapStateToProps, { populateForm })(Form1);
