import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from 'react-router-dom';
import  MovieList  from './Movies/MovieList'
import  Movie  from './Movies/Movie'
import { useParams } from "react-router-dom";

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
      <div>
        <SavedList list={savedList} />
          <Route exact path="/" component={MovieList}/>
          {/* <Route exact path="/movies/:movieId" component={Movie}/> */}
          <Route path="/movies/:id" render={props => (<Movie {...props}/>)}/>
      </div>
  );
};

export default App;
