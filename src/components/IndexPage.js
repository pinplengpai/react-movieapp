import React, { useState, useEffect} from 'react';

import MovieList from './movie-list';


function IndexPage(){

    // const handleInput = (e) => {
    //     let s = e.target.value;

    //     setState(prevState => {
    //         return {...prevState, s:s}
    //     });
    // }

    
    return (
        <>
            <div >
                <header>
                    <h1> Movie app </h1>
                    <main> 
                        <MovieList />
                    </main>
                </header>
            </div>
        </>
    );
}

export default IndexPage
