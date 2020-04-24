import React, {useState, useEffect} from 'react';
import firebase from '../firebase';  
import style from 'styled-components';
import {Row, Col, Button} from 'antd';
import SearchBar from'./SearchBar'


const PosterImage = style.img`
    width: 300px;
    height: 400px;
    margin: 2%;
`

function useMovies(){
    const [movies, setMovies] = useState([])

    useEffect(() => {
        const FetchMovie = async() => {
            const db = firebase.firestore()
            const data = await db.collection("movies").get()
            setMovies(data.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
                }))
                )
        }
        FetchMovie()
    }, [])

    return movies
} //our API in firestore

const MovieList = () => {
    const movies = useMovies() //referancing data like regular react hook 
    const [search, setSearch] = useState("")
    const handleInput = event => {
        setSearch(event.target.value);
    }; //js function for searching in the bar
    //1. link data from firestore and userID together 
    // function HandleLike() {
    //     const userID = firebase.auth().currentUser.uid;
    //     const theirMovies = {
    //         id : userID,
    //         image: movies.images,
    //         title: movies.title //not sure if it needs to be mapped 
    //     };
    //     const cred = () => {
    //         return firebase.firestore().collection('users').doc(userID).set()
    //     }
    //     return firebase.firestore().collection("users").add(theirMovies);
    // }

    //2. When user click  "like items"(collections'movies') it will be able to store for each user individually and display on "my movie page" 
        //READ method but link to another page and link User data with Store

    //3. able to unlike from each movie that have been liked previously only on the "MY MOVIE page" and MAYBE able to unlike on dashboard when the user Like the movie already 
        // // DELETE METHOD 
        // const handleUnlike = id => { //userid which link with the movie that user has been liked
        //     firebase.auth()
        //       .firebase()
        //       .collection('movies')
        //       .doc(id)
        //       .delete()
        // }


    
    
    const SearchAbleList = () => {
        return ( 
         <>
            {movies
                .filter(item => item.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
                .map(item => {
                return(
                    <li key={item.id}>
                        <Col xl={8} sm={12}>
                           <PosterImage src={item.images}/>
                            <p>{item.title}</p> 
                             <Button  > like </Button> 
                             {/* if the user has been liked the unlike button will show up // onClick={HandleLike} */}
                             <Button > unlike </Button> {/*onClick={handleUnlike} in the button*/} 
                        </Col>
                    </li>      
                )
            })}
        </>
        )
    }


    return (
        <>
            <h2>Movie List</h2>
            <SearchBar handleInput = {handleInput} />
                <Row gutter={16,16}>
                    <ul>
                       <SearchAbleList />
                    </ul>
                </Row>
        </>
    )
}



export default MovieList