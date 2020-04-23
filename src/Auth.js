import React,{ useState, useEffect } from 'react';
import firebase from './firebase'

export const AuthContext = React.creatContext(); //tool to allows to propergate data for all react component tree

export const AuthProvider = ({children}) => { //it will store authentication status 
    const [currentUser, setCurrentUser] = useState(null); //to hold the user 

    useEffect(() => {
        firebase.auth().onAuthStateChanged(setCurrentUser); //and auth will change from firebase. It will run only once 
    },[]);

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