import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from "./components/Pages/Home"
import PrivateRoute from './components/Pages/Routes/PrivateRoute';
import PropertyAdd from './components/Pages/PropertyAdd';
import PropertyList from './components/Pages/PropertyList';
import Login from './components/Pages/Login';
import Register from './components/Pages/Register';
import AuthState from './context/authContext/authState';
import setToken from './utils/setToken';

if(localStorage.token){
  setToken(localStorage.token)
 } 

function App() {
  return (
    <>
    <AuthState>
      <BrowserRouter>
        <Switch>
          <Route exact path = '/Home' component= {Home}/>
          <Route exact path="/" component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path="/propertyadd" component={PropertyAdd} />
          <Route exact path="/propertylist" component={PropertyList} />
        </Switch>
      </BrowserRouter>
    </AuthState>
    </>
  );
}

export default App;
