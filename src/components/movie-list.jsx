import React, {useState, useEffect} from 'react';
import firebase from '../firebase';  
import style from 'styled-components';
import {Row, Col} from 'antd';
import SearchBar from'./SearchBar'
import { Like } from '.././styles/index'


const PosterImage = style.img`
    width: 300px;
    height: 400px;
    margin: 2%;
`

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
    const [search, setSearch] = useState("")
    const handleInput = event => {
        setSearch(event.target.value);
    }; //js function for searching in the bar
             
    const SearchAbleList = () => {
        return ( 
         <>
            {movies
                .filter(item => item.title.toLowerCase().indexOf(search) !== -1)
                .map(item => {
                return(
                    <li key={item.id}>
                        <Col xl={8} sm={12}>
                            <PosterImage src={item.images}/>
                            <p>{item.title}</p> 
                            <Like> like </Like>
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