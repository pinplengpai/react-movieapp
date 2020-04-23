import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AuthProvider } from './Auth'
import Header from './components/Header'
import Login from './components/Login'
import SignUp from './components/SignUp'
import HomePage from './components/HomePage'
import MyMovies from './components/MyMovies'
import PrivateRoute from './PrivateRoute'



function App() {
 
  return( 
        <AuthProvider>
          <Router>
            <Header/>
                <Switch>
                    <PrivateRoute path="/" exact component={HomePage}/>
                    <PrivateRoute path="/mymovies" exact component={MyMovies}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/signup" exact component={SignUp} />

                </Switch>
            </Router>
          </AuthProvider>
  )
}

export default App;
