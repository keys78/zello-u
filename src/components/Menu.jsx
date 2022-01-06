import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FilterModal from './FilterModal'
import Pagination from './Pagination'
import PayDues from './PayDues'
import SearchBar from './SearchBar'
import SingleUser from './SingleUser'
import TableHead from './TableHead'

const Menu = ({ listItem, setListItem, searchTerm, setSearchTerm }) => {
    
    const [checkedAll, setCheckedAll] = useState(false);
    const [checked, setChecked] = useState([]);

  
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(5);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = listItem && listItem.slice(indexOfFirstUser, indexOfLastUser)
    const totalPages = listItem && listItem.length / usersPerPage

    // useEffect(() => {
    //     if(totalPages === 1) {
    //         setCurrentPage(1)
    //     }
    // }, [totalPages])

    const prev = () => {
        currentPage <= 1 ? setCurrentPage(currentPage) : setCurrentPage(currentPage - 1)
    }

    const next = () => {
        currentPage < totalPages && setCurrentPage(currentPage + 1)
    }

    return (
        <MenuContainer>
            <div className='relative flex justify-between items-center w-full px-5'>
                <div className='flex sm:gap-8 gap-3 sm:flex-row flex-col w-full'>
                    <FilterModal listItem={listItem && listItem} setListItem={setListItem}/>
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
                <PayDues checked={checked} listItem={listItem && listItem}/>
            </div>

            <div className='sm:overflow-x-hidden overflow-x-scroll'>
            <Table >
                <TableHead setChecked={setChecked} checkedAll={checkedAll} setCheckedAll={setCheckedAll} checked={checked} />
                <SingleUser listItem={currentUsers} setChecked={setChecked} setCheckedAll={setCheckedAll} checked={checked} />
            </Table>
            </div>
           
            <Pagination
                usersPerPage={usersPerPage}
                totalUsers={listItem && listItem.length}
                currentPage={currentPage}
                first={indexOfFirstUser}
                last={indexOfLastUser}
                previousPage={prev}
                nextPage={next}
                setUsersPerPage={setUsersPerPage}
            />
          
        </MenuContainer>
    )
}

const MenuContainer = styled.section`
    margin-top: 20px;
    margin-bottom: 40px;
    padding-top:16px;
    background: #ffffff;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
`

const Table = styled.table`
    margin-top: 16px;
    width: 100%;
`

export default Menu;





// const paginate = (pageNumber) => setCurrentPage(pageNumber)
  {/* <input
                type="checkbox"
                onChange={(event) => selectAll(event.target.checked)}
                checked={checkedAll}
            />

            <input
                type="checkbox"
                name="nr1"
                onChange={() => toggleCheck("nr1")}
                checked={checked["nr1"]}
            /> */}
            {/* {renderCheckboxes} */}

            {/* <input
          type="checkbox"
          name="nr2"
          onChange={() => toggleCheck("nr2")}
          checked={checked["nr2"]}
        /> */}


          // const toggleCheck = (inputName) => {
    //     setChecked((prevState) => {
    //         const newState = { ...prevState };
    //         newState[inputName] = !prevState[inputName];
    //         return newState;
    //     });
    // };

    // const selectAll = (value) => {
    //     setCheckedAll(value);
    //     setChecked((prevState) => {
    //         const newState = { ...prevState };
    //         for (const inputName in newState) {
    //             newState[inputName] = value;
    //         }
    //         return newState;
    //     });
    // };

    /* ############################################# */
    /* #### EFFECT TO CONTROL CHECKED_ALL STATE #### */
    /* ############################################# */

    // IF YOU CHECK BOTH INDIVIDUALLY. IT WILL ACTIVATE THE checkedAll STATE
    // IF YOU UNCHECK ANY INDIVIDUALLY. IT WILL DE-ACTIVATE THE checkAll STATE

  
    // const renderCheckboxes = listItem && listItem.map((box, i) => (
    //     <input
    //             key={i}
    //             type="checkbox"
    //             name={box.id}
    //             onChange={() => toggleCheck(box.id)}
    //             checked={checked[box.id]}
    //         />
    // ))


