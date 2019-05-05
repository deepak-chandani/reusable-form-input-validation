import React from 'react';
import Posts from './components/Posts';
import './App.css';
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";

const App = (props) => {
  return (
    <div className="App">
      <RegisterForm />
        <hr />
       <LoginForm />
    </div>
  )
}

export default App;
