import React, { useState } from 'react'
import styled from 'styled-components'
import FilterModal from './FilterModal'
import Pagination from './Pagination'
import PayDues from './PayDues'
import SearchBar from './SearchBar'
import SingleUser from './SingleUser'
import TableHead from './TableHead'

const Menu = ({ listItem, searchTerm, setSearchTerm }) => {
    const [checked, setChecked] = useState( );

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(5);

    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = listItem && listItem.slice(indexOfFirstUser, indexOfLastUser)

    // console.log(currentUsers.length, usersPerPage)
    
    const prev = () => {
        if(currentPage === 1) {
            setCurrentPage(currentPage)
        } else if(currentPage < 1) {
            setCurrentPage(currentPage)
        } else {
            setCurrentPage( currentPage - 1)
        }

    }
    const next = () => {
        console.log('next')
    
     if (currentUsers.length - 1 != usersPerPage) {
        setCurrentPage(currentPage + 1)

     } else {
        alert('Yoo have reached the last page')
     }
    }
  
    return (
        <MenuContainer>
            <div className='flex justify-between items-center w-full px-5'>
                <div className='flex gap-8'>
                    <FilterModal />
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <PayDues checked={checked}/>
            </div>

            <Table >
                <TableHead setChecked={setChecked} checked={checked}/>
                <SingleUser listItem={currentUsers} setChecked={setChecked} checked={checked}/>
            </Table>
            <Pagination 
             usersPerPage={usersPerPage}
              totalUsers={listItem && listItem.length} 
              currentPage={currentPage}
              first={indexOfFirstUser}
              last={indexOfLastUser}
              previousPage={prev}
              nextPage={next}
              />
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

// const paginate = (pageNumber) => setCurrentPage(pageNumber)
