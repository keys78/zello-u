import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Menu from './Menu'
import NavFilterBtn from './NavFilterBtns'
import { useGetUsersQuery } from '../services/usersApi'


const NavFilter = () => {
    const { data, error, isLoading, isSuccess, isError } = useGetUsersQuery();
    const allUsers = isSuccess && data?.data
    const allCategories = ['All', 'paid', 'unpaid', 'overdue'];


    const [listItem, setListItem] = useState(allUsers);
    const [buttons, setButtons] = useState(allCategories);
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        const searchFilter = data?.data.filter((user) =>
         user.firstName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
         user.lastName.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
         user.email.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
         user.lastLogin.toLowerCase().includes(searchTerm.toLocaleLowerCase()))
         
        setListItem(searchFilter)
    }, [data, searchTerm])



    const filter = (button) => {
        if (button === 'All') {
            setListItem(allUsers);
            return;
        }
        const filteredData = allUsers.filter(user => user.paymentStatus === button);
        setListItem(filteredData)

        console.log(filteredData)
    }


    return (
        allUsers ?
            <NavFilterContainer>
                <DFlexer className='flex justify-between items-center'>
                    <NavFilterBtn buttons={buttons} filter={filter} />
                    <h1>Total Payable amount: <span>$900</span> USD</h1>
                </DFlexer>
                <Menu searchTerm={searchTerm} setSearchTerm={setSearchTerm} listItem={listItem} />
            </NavFilterContainer> : "Loading..."
    )
}

const NavFilterContainer = styled.div`
    width:100%;
    margin-top: 20px;

    h1{
        font-family: Inter;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #6E6893;
    }

    /* span {
        font-weight: 700;
        font-size: 18px;
        line-height: 17px;
        color: #6D5BD0;
        
    } */
`

const DFlexer = styled.div`
    border-bottom: 1px solid #C6C2DE;
`

export default NavFilter


// const allCategories = data && ['All', ...new Set(allUsers.map((user) => (user.paymentStatus)))];
    // const [radioButton, setRadioButton] = useState(allCategorie);
    // const allCategorie = ['Default', 'firstName', 'Last Name', 'userStatus', 'Due Date', 'Last Login', 'All', 'Active', 'Inactive'];


// const filterRadio = (radioBtn) => {
    //     if (radioBtn === 'All') {
    //         setListItem(allUsers);
    //         return;
    //     }
    //     const filteredRadioData = allUsers.filter(user => user.userStatus === radioBtn);
    //     setListItem(filteredRadioData)

    //     console.log(filteredRadioData)
    // }