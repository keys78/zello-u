import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import FilterModal from './FilterModal'
import Pagination from './Pagination'
import PayDues from './PayDues'
import SearchBar from './SearchBar'
import SingleUser from './SingleUser'
import TableHead from './TableHead'

const Menu = ({ listItem, setListItem, searchTerm, setSearchTerm }) => {
    const keepArr = listItem && listItem.map((user) => user.id)
    // let obj = listItem && keepArr.reduce(function(acc, curr) {
    //     acc[curr] = false;
    //     return acc;
    //   }, {});
    //   console.log(obj)
    // const checkedObj = keepArr && keepArr.reduce((acc,curr)=> (acc[curr]=false,acc),{});
    // console.log(checkedObj)
    
    const [checkedAll, setCheckedAll] = useState(false);
    const [checked, setChecked] = useState(listItem.length > 1 && keepArr.reduce(function(acc, curr) {
        acc[curr] = false;
        return acc;
      }, {}));
    console.log(checked)
    // const [checked, setChecked] = useState({
    //     731: false,
    //     732: false,
    //     733: false,
    //     734: false,
    //     735: false,
    //     736: false,
    //     737: false,
    //     738: false,
    //     739: false,
    //     740: false,
    //     741: false,
    //     742: false,
    //     743: false,
    //     744: false,
    //     745: false,
    //     746: false,
    //     747: false,
    //     748: false,
    //     749: false,
    //     750: false
    // });

  
    const [currentPage, setCurrentPage] = useState(1);
    const [usersPerPage, setUsersPerPage] = useState(5);
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = listItem && listItem.slice(indexOfFirstUser, indexOfLastUser)
    const totalPages = listItem && listItem.length / usersPerPage

    useEffect(() => {
        if(totalPages === 1) {
            setCurrentPage(1)
        }
    }, [currentUsers])

    
    const prev = () => {
        currentPage <= 1 ? setCurrentPage(currentPage) : setCurrentPage(currentPage - 1)
    }

    const next = () => {
        currentPage < totalPages && setCurrentPage(currentPage + 1)
    }

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
                <TableHead listItem={listItem && listItem} setChecked={setChecked} checkedAll={checkedAll} setCheckedAll={setCheckedAll} checked={checked} />
                <SingleUser listItem={currentUsers} setChecked={setChecked} checkedAll={checkedAll} setCheckedAll={setCheckedAll} checked={checked} />
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