import React from 'react';
 import MovieList from './movie-list';

  function Results({ results }) {
     return(
         <section> 
             {results.map(result => (
                 <MovieList result={result}/>
             ))}   

          </section>
     )
 }

  export default Results  