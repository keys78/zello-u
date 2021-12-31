import React from 'react'
import styled from 'styled-components'
import FilterModal from './FilterModal'
import PayDues from './PayDues'
import SearchBar from './SearchBar'
import SingleUser from './SingleUser'
import TableHead from './TableHead'

const Menu = ({ listItem, searchTerm, setSearchTerm }) => {
    return (
        <MenuContainer>
            <div className='flex justify-between items-center w-full px-5'>
                <div className='flex gap-8'>
                <FilterModal />
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                </div>
                <PayDues />
            </div>
            
            <TableHead />
            <SingleUser listItem={listItem} />
        </MenuContainer>
    )
}

const MenuContainer = styled.section`
    margin-top: 20px;
    padding-top:16px;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
`

export default Menu;