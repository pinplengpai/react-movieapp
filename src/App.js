import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { AuthProvider } from './Auth'
import Header from './components/Header'
import Login from './components/Login'
import Signup from './components/Signup'
import HomePage from './components/HomePage'
import MyMovies from './components/MyMovies'
import PrivateRoute from './PrivateRoute'



function App() {
 
  return( //firebaseInitialized !== false ? ( //if firebaseInitialized is not equal to false it will render the rest
        <AuthProvider>
          <Router>
            <Header/>
                <Switch>
                    <PrivateRoute path="/" exact component={HomePage}/>
                    <Route path="/login" exact component={Login}/>
                    <Route path="/signup" exact component={Signup} />
                    <Route path="/mymovies" exact component={MyMovies}/>
                    {/* <Route path="/dashboard" exact component={DashBoard}/> */}

                </Switch>
            </Router>
          </AuthProvider>
  )
}

export default App;
