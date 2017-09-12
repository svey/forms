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
  zip: '',
  save: false
};

export default (state = initialState, action) => {
  switch (action.type){
    case 'FORM':
      console.log(action.payload);
      return { ...state, [action.payload.prop]: action.payload.value };
    case 'CLEAR':
      return { ...initialState };
    default:
      return state;
  }
};