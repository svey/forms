import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Button } from 'react-toolbox/lib/button';
import { Card, CardActions, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import Input from 'react-toolbox/lib/input';
import { populateForm } from '../actions';

class Form2 extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return (
    <Card style={{ width: '50%'}}>
      <CardTitle
        title='EKA Solutions: Signup Part 2'
      />
      <CardMedia
        aspectRatio='wide'
        image="https://cdn.pixabay.com/photo/2016/08/18/00/08/belgium-1601920_960_720.jpg"
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
        <Link to="/form3">
          <Button label="Next" />
        </Link>
      </CardActions>
    </Card>
    )
  }
}

const mapStateToProps = ({ form }) => {
  const { firstName, lastName, phone } = form
  return {
    firstName,
    lastName,
    phone
  }
};

export default connect(mapStateToProps, { populateForm })(Form2);
