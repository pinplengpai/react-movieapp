import React, {useCallback} from 'react'; 
import { withRouter } from "react-router";
import firebase from "../firebase";

  
const SignUp = ({history}) => { //getting histroy object from the routing context 
     const createUser = (userID) => {
        return firebase.firestore().collection('users').doc(`${userID}`)
        .set({
            created: firebase.firestore.FieldValue.serverTimestamp(),
            users: [{ id: userID }]
        });
      }

    const handleSignUp = useCallback( async event =>  { //once we click submite the function will fire which will useCallback to memerise callback
        event.preventDefault(); //so we won't reload the page
        const{ email, password } = event.currentTarget; //
        try {
          await firebase 
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value).then(cred => {
            const user = cred.user.uid;
            createUser(user)
            });            
            history.push("/"); //if user register properly, we will direct them to the root path
        } catch (error) { // if something goes wrong, we will show an error  
            console.log(error);
        }
    }, [history]);

    return (
        <div>
          <h1>Sign up</h1>
          <form onSubmit={handleSignUp}>
          <label id="#signup-name">
              Name
              <input name="name" type="text" placeholder="name" />
            </label>
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

// try {
//   await firebase 
//   .auth()
//   .createUserWithEmailAndPassword(email.value, password.value).then(cred => {
//     const name = document.querySelector('#signup-name').value
//     return firebase.firestore().collection('users').doc(cred.user.uid).set({
//       name: name,
//       email: email.value
//       // signupForm.reset();
//       })
//       .catch(console.error)
//     });
//         history.push("/"); //if user register properly, we will direct them to the root path
//     } catch (error) { // if something goes wrong, we will show an error  
//         alert(error);
//     }
// }, [history]);
