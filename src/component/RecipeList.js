import React, {useEffect, useState} from 'react';
import '../App.css';
import Recipe from '../Recipe.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import chef from './cheflogin.png';
import { Button, Jumbotron, Nav } from 'react-bootstrap'; 
import { Link } from "react-router-dom";

 const RecipeList = () => {
    const APP_ID = '254236f3';
    const APP_KEY = '3c474a3912dd687126f3fc6aac2b153e';
    
    const [recipe, setRecipse] = useState([]);
    const [search, setSearch] = useState('');
    const [clickbutton, setClickbutton] = useState('chicken');
    
    useEffect(() => {
      getRecipe();
    }, [clickbutton]);
  
    const getRecipe = async () => {
      const response = await fetch(`
      https://api.edamam.com/search?q=${clickbutton}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      console.log(data)
      setRecipse(data.hits);
    };
  
    const updateSearch = e => {
      setSearch(e.target.value);
    };
  
    const getSearch = e => {
      e.preventDefault();
      setClickbutton(search);
      setSearch('');
    }
    return(
        <>
        <Jumbotron className='header-title'>
        <img className='image' src={chef} />
        Bon Apetit
      </Jumbotron>

      <Nav className="justify-content-end bg" activeKey="/home">
        <Nav.Item>
          <Link to='/Home' className='text'>Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/Login' className='text'>Logout</Link>
        </Nav.Item>
      </Nav>

      <div className='App'>
        <form onSubmit={getSearch} className='search-form'>
            <input className='search-bar' type='text' value={search} onChange={updateSearch} />
        <Button variant="outline-dark" className='search-button' type='submit'>
          Search
        </Button>
        </form>
        <div className='recipe'>
        { recipe.length > 0 ?
        recipe.map(recip => (
          <Recipe 
            key={recip.recipe.label}
            title={recip.recipe.label}
            image={recip.recipe.image}
            ingredients={recip.recipe.ingredients}
          />
        ))
        : null
    }
        </div>
      </div>
      </>
    )
}

export default RecipeList;

