import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MCQ from './MCQ';

const App = (): React.JSX.Element => {
  return <>
    <Navbar />
    <MCQ />
  </>
};

export default App;
