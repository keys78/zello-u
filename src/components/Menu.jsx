import React, { useState } from 'react'
import styled from 'styled-components'
import FilterModal from './FilterModal'
import Pagination from './Pagination'
import PayDues from './PayDues'
import SearchBar from './SearchBar'
import SingleUser from './SingleUser'
import TableHead from './TableHead'

const Menu = ({ listItem, searchTerm, setSearchTerm }) => {
    const [checked, setChecked] = useState(false);

    return (
        <MenuContainer>
            <div className='flex justify-between items-center w-full px-5'>
                <div className='flex gap-8'>
                    <FilterModal />
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <PayDues />
            </div>

            <Table >
                <TableHead setChecked={setChecked} checked={checked}/>
                <SingleUser listItem={listItem} setChecked={setChecked} checked={checked}/>
            </Table>
            <Pagination />
        </MenuContainer>
    )
}

const MenuContainer = styled.section`
    margin-top: 20px;
    margin-bottom: 40px;
    padding-top:16px;
    background: #FFFFFF;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
`

const Table = styled.table`
    margin-top: 16px;
    width: 100%;
`

export default Menu;