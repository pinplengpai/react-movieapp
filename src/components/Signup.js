import React, {useCallback} from 'react'; 
import { withRouter } from "react-router";
import firebase from "../firebase";

const SignUp = ({history}) => { //getting histroy object from the routing context 
    const handleSignUp = useCallback(async event =>  { //once we click submite the function will fire which will useCallback to memerise callback
        event.preventDefault(); //so we won't reload the page
        const{ email, password } = event.target.elements; //
        try {
            await firebase 
                .auth()
                .createUserWithEmailAndPassword(email.value, password.value);
            history.push("/"); //if user register properly, we will direct them to the root path
        } catch (error) { // if something goes wrong, we will show an error  
            alert(error);
        }
    }, [history]);

    return (
        <div>
          <h1>Sign up</h1>
          <form onSubmit={handleSignUp}>
            <label>
              Email
              <input name="email" type="email" placeholder="Email" />
            </label>
            <label>
              Password
              <input name="password" type="password" placeholder="Password" />
            </label>
            <button type="submit">Sign Up</button>
          </form>
        </div>
    );
};

export default withRouter(SignUp);
