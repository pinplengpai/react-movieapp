import React,{ useState, useEffect } from 'react';
import firebase from './firebase'

export const AuthContext = React.createContext();//tool to allows to propergate data for all react component tree

export const AuthProvider = ({children}) => { //it will store authentication status //reactnode at that component
    const [currentUser, setCurrentUser] = useState(null); //to hold the user 
    const [pending, setPending] = useState(true);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) =>{
            setCurrentUser(user)
            setPending(false)
        }); //and auth will change from firebase. It will run only once 
    },[]);

    if(pending){
        return <>Loading...</>
      }

    return(
        <AuthContext.Provider
         value={{
             currentUser
         }}
        >
            {children}
        </AuthContext.Provider>
    );
};