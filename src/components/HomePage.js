import React from 'react';
import MovieList from './movie-list';
import { Button } from 'antd';


function HomePage(){

    return (
        <>
            <div >
                <header>
                    <Button onClick={() => app.auth().signOut()}>Sign Out</Button>
                    <main> 
                        <MovieList />
                    </main>
                </header>
            </div>
        </>
    );
}

export default HomePage
