import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Button } from 'react-toolbox/lib/button';
import { Card, CardActions, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';
import { populateForm } from '../actions';

class Form3 extends React.Component{
  constructor(props){
    super(props);
  }

  submitForm() {
    const {
      email,
      password,
      username,
      firstName,
      lastName,
      phone,
      street,
      city,
      state,
      zip
    } = this.props;
    const url = 'http://localhost:4000/api/user';

    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        username,
        firstName,
        lastName,
        phone,
        street,
        city,
        state,
        zip
      })
    })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  render(){
    const states = [
      { value: "AL", label: "Alabama" },
      { value: "AK", label: "Alaska" },
      { value: "AS", label: "American Samoa" },
      { value: "AZ", label: "Arizona" },
      { value: "AR", label: "Arkansas" },
      { value: "CA", label: "California" },
      { value: "CO", label: "Colorado" },
      { value: "CT", label: "Connecticut" },
      { value: "DE", label: "Delaware" },
      { value: "DC", label: "District Of Columbia" },
      { value: "FM", label: "Federated States Of Micronesia" },
      { value: "FL", label: "Florida" },
      { value: "GA", label: "Georgia" },
      { value: "GU", label: "Guam" },
      { value: "HI", label: "Hawaii" },
      { value: "ID", label: "Idaho" },
      { value: "IL", label: "Illinois" },
      { value: "IN", label: "Indiana" },
      { value: "IA", label: "Iowa" },
      { value: "KS", label: "Kansas" },
      { value: "KY", label: "Kentucky" },
      { value: "LA", label: "Louisiana" },
      { value: "ME", label: "Maine" },
      { value: "MH", label: "Marshall Islands" },
      { value: "MD", label: "Maryland" },
      { value: "MA", label: "Massachusetts" },
      { value: "MI", label: "Michigan" },
      { value: "MN", label: "Minnesota" },
      { value: "MS", label: "Mississippi" },
      { value: "MO", label: "Missouri" },
      { value: "MT", label: "Montana" },
      { value: "NE", label: "Nebraska" },
      { value: "NV", label: "Nevada" },
      { value: "NH", label: "New Hampshire" },
      { value: "NJ", label: "New Jersey" },
      { value: "NM", label: "New Mexico" },
      { value: "NY", label: "New York" },
      { value: "NC", label: "North Carolina" },
      { value: "ND", label: "North Dakota" },
      { value: "MP", label: "Northern Mariana Islands" },
      { value: "OH", label: "Ohio" },
      { value: "OK", label: "Oklahoma" },
      { value: "OR", label: "Oregon" },
      { value: "PW", label: "Palau" },
      { value: "PA", label: "Pennsylvania" },
      { value: "PR", label: "Puerto Rico" },
      { value: "RI", label: "Rhode Island" },
      { value: "SC", label: "South Carolina" },
      { value: "SD", label: "South Dakota" },
      { value: "TN", label: "Tennessee" },
      { value: "TX", label: "Texas" },
      { value: "UT", label: "Utah" },
      { value: "VT", label: "Vermont" },
      { value: "VI", label: "Virgin Islands" },
      { value: "VA", label: "Virginia" },
      { value: "WA", label: "Washington" },
      { value: "WV", label: "West Virginia" },
      { value: "WI", label: "Wisconsin" },
      { value: "WY", label: "Wyoming" }
    ];

    return (
    <Card style={{ width: '50%'}}>
      <CardTitle
        title='EKA Solutions: Signup Part 3'
      />
      <CardMedia
        aspectRatio='wide'
        image="https://cdn.pixabay.com/photo/2016/08/18/00/08/belgium-1601920_960_720.jpg"
      />
      <section>
        <Input
          required
          type='text'
          label='Street'
          icon='place'
          value={this.props.street}
          onChange={value => this.props.populateForm('FORM', {
            prop: 'street',
            value
          })}
        />
        <Input
          required
          type='text'
          label='City'
          icon='location_city'
          value={this.props.city}
          onChange={value => this.props.populateForm('FORM', {
            prop: 'city',
            value
          })}
        />
        <Dropdown
          auto
          source={states}
          icon='gps_fixed'
          label='State'
          value={this.props.state}
          onChange={value => this.props.populateForm('FORM', {
            prop: 'state',
            value
          })}
        />
        <Input
          required
          type='text'
          label='Zip'
          icon='format_align_center'
          value={this.props.zip}
          onChange={value => this.props.populateForm('FORM', {
            prop: 'zip',
            value
          })}
        />
      </section>
      <CardActions>
        <Link to="/form3">
          <Button
            label="Submit"
            onClick={this.submitForm.bind(this)}
          />
        </Link>
      </CardActions>
    </Card>
    )
  }
}

const mapStateToProps = ({ form }) => {
  const { email, password, username, firstName, lastName, phone, street, city, state, zip } = form;
  return {
    email,
    password,
    username,
    firstName,
    lastName,
    phone,
    street,
    city,
    state,
    zip
  }
};

export default connect(mapStateToProps, { populateForm })(Form3);
