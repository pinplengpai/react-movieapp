import React from 'react';
import MovieList from './movie-list';
import { Button } from 'antd';
import firebase from '../firebase';



function HomePage(){

    return (
        <>
            <div >
                <header>
                    <Button onClick={() => firebase.auth().signOut()}>Sign Out</Button>
                    <main> 
                        <MovieList />
                    </main>
                </header>
            </div>
        </>
    );
}

export default HomePage
