import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FilterModal from './FilterModal'
import Pagination from './Pagination'
import PayDues from './PayDues'
import SearchBar from './SearchBar'
import SingleUser from './SingleUser'
import TableHead from './TableHead'

const Menu = ({ listItem, setListItem, searchTerm, setSearchTerm }) => {
    // const [checked, setChecked] = useState(false);
    const [checkedAll, setCheckedAll] = useState(false);
    const [checked, setChecked] = useState({
      nr1: false,
      nr2: false
    });

    const toggleCheck = (inputName) => {
        setChecked((prevState) => {
          const newState = { ...prevState };
          newState[inputName] = !prevState[inputName];
          return newState;
        });
      };

      const selectAll = (value) => {
        setCheckedAll(value);
        setChecked((prevState) => {
          const newState = { ...prevState };
          for (const inputName in newState) {
            newState[inputName] = value;
          }
          return newState;
        });
      };

      

      /* ############################################# */
    /* #### EFFECT TO CONTROL CHECKED_ALL STATE #### */
  /* ############################################# */

  // IF YOU CHECK BOTH INDIVIDUALLY. IT WILL ACTIVATE THE checkedAll STATE
  // IF YOU UNCHECK ANY INDIVIDUALLY. IT WILL DE-ACTIVATE THE checkAll STATE

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);

  
  

    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage] = useState(5);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = listItem && listItem.slice(indexOfFirstUser, indexOfLastUser)
    const totalPages = listItem && listItem.length / usersPerPage
    
    const prev = () => {
        currentPage <= 1 ? setCurrentPage(currentPage) : setCurrentPage(currentPage - 1)
    }

    const next = () => {
        currentPage < totalPages && setCurrentPage(currentPage + 1)
    }
  
    return (
        <MenuContainer>
            <div className='flex justify-between items-center w-full px-5'>
                <div className='flex gap-8'>
                    <FilterModal listItem={listItem} setListItem={setListItem}/>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <PayDues checked={checked}/>
            </div>

            <Table >
                <TableHead setCheckedAll={setCheckedAll} checked={checkedAll} setChecked={setChecked}/>
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
              <input
          type="checkbox"
          onChange={(event) => selectAll(event.target.checked)}
          checked={checkedAll}
        />

        <input
        type="checkbox"
        name="nr1"
        onChange={() => toggleCheck("nr1")}
        checked={checked["nr1"]}
      />

      <input
          type="checkbox"
          name="nr2"
          onChange={() => toggleCheck("nr2")}
          checked={checked["nr2"]}
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
