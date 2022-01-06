import React, { useState } from 'react'
import styled from 'styled-components'

const SearchBar = ({ searchTerm, setSearchTerm}) => {
    
    return (
        <SearchContainer>
            <img style={{ padding: "10px"}} src="./assets/Search.png" />
            <SearchInput placeholder="Search Users by Name, Email or Date" 
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
        </SearchContainer>
    )
}

const SearchInput  = styled.input`
    width: 100%;
    height: 38px;
    background: #F4F2FF;
    border-radius: 6px;

    &:focus {
        outline: none;
    }
`

const SearchContainer  = styled.div`
    display: flex;
    align-items: center;
    width: 392px;
    height: 40px;
    border-radius: 6px;
    background: #F4F2FF;
    border: 1px solid transparent;


    &:hover {
        background: #F4F2FF;
        border: 1px solid #6D5BD0;
    }

    @media (max-width: 640px) {
       width: 100%;
  }
`

export default SearchBar
