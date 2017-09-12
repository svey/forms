import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardActions, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import { populateForm } from '../actions';

class Form2 extends React.Component{
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.populateForm('FORM', {
      prop: 'save',
      value: false
    })
  }

  componentDidUpdate() {
    const { firstName, lastName, phone, save } = this.props;
    if (firstName && lastName && phone && !save) {
      this.props.populateForm('FORM', {
        prop: 'save',
        value: true
      })
    }
  }

  updateUser() {
    const { firstName, lastName, phone, username } = this.props;
    const url = 'http://localhost:4000/api/user/update';
    const body = JSON.stringify({ firstName, lastName, phone, username })
    
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
        this.props.history.push('/form3')
      })
      .catch(err => console.log(err));
  }

  render(){
    return (
    <Card style={{ width: '50%'}}>
      <CardTitle
        title='EKA Solutions: Signup Part 2'
      />
      <CardMedia
        aspectRatio='wide'
        image="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg"
      />
      <section>
        <Input
          required
          type='text'
          label='First Name'
          icon='filter_1'
          value={this.props.firstName}
          onChange={value => this.props.populateForm('FORM', {
            prop: 'firstName',
            value
          })}
        />
        <Input
          required
          type='text'
          label='Last Name'
          icon='filter_2'
          value={this.props.lastName}
          onChange={value => this.props.populateForm('FORM', {
            prop: 'lastName',
            value
          })}
        />
        <Input
          required
          hidden
          type='tel'
          icon='phone'
          label='Phone'
          value={this.props.phone}
          onChange={value => this.props.populateForm('FORM', {
            prop: 'phone',
            value
          })}
        />
      </section>
      <CardActions>
          <Button
            label="Save"
            onClick={this.updateUser.bind(this)}
            disabled={!this.props.save}
          />
      </CardActions>
    </Card>
    )
  }
}

const mapStateToProps = ({ form }) => {
  const { firstName, lastName, phone, username, save } = form
  return {
    firstName,
    lastName,
    phone,
    username,
    save
  }
};

export default connect(mapStateToProps, { populateForm })(Form2);
