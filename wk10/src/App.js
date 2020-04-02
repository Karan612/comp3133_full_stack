import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/college';
import './components/student';
import Student from './components/student';
import College from './components/college';

function App() {
  return (
    <React.Fragment>
      <Student name = "Kashyap Gauswami" number = "101111621" enrolled = "3" />
      <Student name = "Karan Patel" number = "101145861" enrolled = "1" />
      <Student name = "Shiv Guard" number = "101156238" enrolled = "4" />
      <College name = "George Brown" location = "Casa Loma" />
    </React.Fragment>
  );
}

export default App;
