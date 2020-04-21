import React, {useState, useEffect} from 'react';
import firebase from '../firebase';  
import { identifier } from '@babel/types';

function useMovies(){
    const [movies, setMovies] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection('movies')  
            .onSnapshot((snapshot) => { //An initial call using the callback you provide creates a document snapshot immediately with the current contents of the single document. Then, each time the contents change, another call updates the document snapshot.
                const newMovies = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data() //operator here to merge the id with all of this data 
                }))

                setMovies(newMovies)
            })
    },[]) //an empty array is very important 

    return movies
} //our API in firestore

const MovieList = () => {
    const movies = useMovies() //referancing data like regular react hook 
    return (
        <>
            <h2>Movie List</h2>
                <ol>
                    {movies.map((movie) =>
                        <li key={movie.id}>
                            <div>
                                Title:{movie.title},
                                Image: {movie.duration}
                            </div>
                        </li>
                    )}
                </ol>
        </>
    )
}

export default MovieList