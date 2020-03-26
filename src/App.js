import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe.js';
import LoginPage from './component/LoginPage.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import chef from './component/cheflogin.png';
import { Button, Jumbotron, Nav } from 'react-bootstrap';
import RecipeList from './component/RecipeList.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


const App = () => { 
  const recipe = [{
  }];

  return(
    <> 
    
      <div>
        <Router>
      <div>
      <Switch>
        <Route path='/Home'>
        <RecipeList />
        </Route>
        <Route path='/Login'>
          <LoginPage />
        </Route>
      </Switch>
      </div>
      </Router>
      </div>
          
    </>
  )
}


export default App;
