const initialState = {
  email: '',
  password: '',
  username: '',
  firstName: '',
  lastName: '',
  phone: '',
  city: '',
  street: '',
  state: '',
  zip: ''
};

export default (state = initialState, action) => {
  switch (action.type){
    case 'FORM':
      console.log(state);
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};