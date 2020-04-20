import React, { useState, useEffect} from 'react';
import FetchingData from './FetchingData'
import SearchBar from './SearchBar';


function IndexPage(){
    const [state, setState] = useState({
        search: "",
        results: [],
        selected: {}
    })
    const url = "http://www.omdbapi.com/?apikey=7e1991ea";
    const search = (e) => {
        if (e.key === "Enter"){
            
        }
    }
    const handleInput = (e) => {
        let s = e.target.value;

        setState(prevState => {
            return {...prevState, s:s}
        });
    }

    
    return (
        <SearchBar handleInput = {handleInput} />
    )
}

export default IndexPage
