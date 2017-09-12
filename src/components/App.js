import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import { Button } from 'react-toolbox/lib/button';
import { Card } from 'react-toolbox/lib/card';
import routes from '../routes';
// import DatePicker from 'react-toolbox/lib/date_picker';
// import Avatar from 'react-toolbox/lib/avatar';
// import Link from 'react-toolbox/lib/link';
// import Dialog from 'react-toolbox/lib/dialog';
// import Input from 'react-toolbox/lib/input';

const App = (props) => {
  return (
    <Card>
      <div>Here I am!</div>
      {props.children}
    </Card>
  );
};

export default App
