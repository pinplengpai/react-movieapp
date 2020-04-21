import React, { useState, useEffect} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Results from './Results';
import MovieList from './movie-list';

function IndexPage(){
    const [state, setState] = useState({
        search: "",
        results: []
    });
    const [useLoading, setLoading] = useState(true);

    //  async function FetchingData() {
    //      const response = await axios(url + "&s=" + state.s ).then(({data}) => {
    //             then(({data}) => {
    //                 let results = data.Search;
    
    //                 setState(prevState => {
    //                     return {...prevState, results:results}
    //                 })
    //             });
    //      }
    
    const url = "http://www.omdbapi.com/?apikey=7e1991ea";
    const search = (e) => {
        if (e.key === "Enter"){
            // async function FetchingData() {
            //     const [data, setData] = useState([]);
            // const response = await axios.get(url + "&s=" + state.s ).then(({data}) => {
             
            axios(url + "&s=" + state.s ).then(({data}) => {
                let results = data.Search;

                setState(prevState => {
                    return {...prevState, results:results}
                })
            });
        }
    };
                
                
            
            //   useEffect(() => {
            //     FetchingData();
            //   }, []);
            
    //     }
    // }
    const handleInput = (e) => {
        let s = e.target.value;

        setState(prevState => {
            return {...prevState, s:s}
        });
    }

    
    return (
        <>
            <div >
                <header>
                    <h1> Movie app </h1>
                    <main> 
                        <SearchBar handleInput = {handleInput} search={search}  />
                        <Results results={state.results} />
                        <MovieList />
                    </main>
                </header>
            </div>
        </>
    );
}

export default IndexPage
