import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const Bar = styled(Input)`
    display: block;
    width: 70%;
    margin: 0 auto;
    padding: 15px;
    background-color: #fff;
    border-radius: 8px;
    color: #53565A;
    font-size: 20px;
    transition: 0.4s ease-out;
     :focus {
        box-shadow: 0 0 8px 3px #448434;
    }

`





function SearchBar({ handleInput, search }) {
    return (
       <section>
           <Bar type="text" placeholder="Try 'Love, Rosie'" onChange={handleInput} onKeyPress={search}/>
       </section>
    )
}

export default SearchBar