import React from 'react';
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main';

const App = () => {

  return (
    <div>
      <Router>

       <Main/>

      </Router>
    </div>
  )
}

export default App;