import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { Layout } from 'antd';

const HeaderContainer = styled(Layout.Header)`
    background-color: #989898;
    justify-content: space-between;
    justify-content: center;
    box-shadow:10px 10px 10px rgb(0,0,0,0.2);
    li{
        list-style: none;
        display: inline;
        :hover{
            cursor: pointer;
        }
    }
    a{
        text-decoration: none;
        color: white;
        font-family: 'Inconsolata', monospace;
        font-size: 16px;
        :hover{
            color: black;
        }
    }

`
function Header() {
    return (
        <HeaderContainer>
          <ul>
                <li> <Link to="/">Movies</Link></li> 
                <li> <Link to="/mymovies"> My movies</Link></li> 
            </ul>
        </HeaderContainer>
    )
}

export default Header