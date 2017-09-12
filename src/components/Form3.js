import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-toolbox/lib/button';
import { Card, CardActions, CardMedia, CardTitle } from 'react-toolbox/lib/card';
import Dropdown from 'react-toolbox/lib/dropdown';
import Input from 'react-toolbox/lib/input';
import { populateForm } from '../actions';

class Form3 extends React.Component{
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
    const { street, city, state, zip, save } = this.props;
    if (street && city && state && zip && !save) {
      this.props.populateForm('FORM', {
        prop: 'save',
        value: true
      })
    }
  }

  updateUser() {
    const { street, city, state, zip, username } = this.props;
    const url = 'http://localhost:4000/api/user/update';
    const body = JSON.stringify({ street, city, state, zip, username })
    
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
      this.props.history.push('/')
    })
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
        image="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg"
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
  const { street, city, state, zip, username, save } = form;
  return { street, city, state, zip, username, save }
};

export default connect(mapStateToProps, { populateForm })(Form3);
