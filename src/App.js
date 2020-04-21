import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import MyMovies from './components/MyMovies';
import IndexPage from './components/IndexPage';


function App() {
  return (
  
        <BrowserRouter>
          <Header/>
            <Switch>
                <Route path="/" exact component={IndexPage} />
                <Route path="/mymovies" exact component={MyMovies}/>
            </Switch>
        </BrowserRouter>
  );
}

export default App;
