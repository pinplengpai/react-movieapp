import React,{useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header'
import MyMovies from './components/MyMovies'
import IndexPage from './components/IndexPage'
import HomePage from './components/HomePage'
import Register from './components/Register'
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import firebase from './firebase'



function App() {
  const [firebaseInitialized, setFirebaseInitialized] = useState(false)

  useEffect(() => { //if firebase is initialize then we would want to setfirebase. 
    firebase.isInitialized().then(val => {
      setFirebaseInitialized(val)
    })
  })
  return firebaseInitialized !== false ? ( //if firebaseInitialized is not equal to false it will render the rest
        <Router>
          <Header/>
              <Switch>
                  <Route path="/" exact component={HomePage} />
                  <Route path="/login" exact component={Login}/>
                  <Route path="/register" exact component={Register} />
                  <Route path="/dashboard" exact component={DashBoard}/>
                  <Route path="/mymovies" exact component={MyMovies}/>
                  <Route path="/index" exact component={IndexPage}/>
              </Switch>
          </Router>
  ):<div>Loading...</div> //later let's put the nice one 
}

export default App;
