import React from 'react'

function Result({ result }) {
    return(
        <div>
            <img src={result.Poster} alt="poster"/>
            <h3>{result.Title}</h3>
        </div>
    )
}

export default Result