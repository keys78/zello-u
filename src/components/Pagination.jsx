import React from 'react'
import { useState } from 'react/cjs/react.development'
import styled from 'styled-components'

const Pagination = ({ usersPerPage, totalUsers, first, last, previousPage, nextPage, setUsersPerPage }) => {
    const [showdrop, setShowdrop] = useState(false)

    return (
        <PaginationCont>
            <div className='flex gap-12 relative'>
                <div className='flex items-center gap-3 relative'>
                    <p>Rows per page : {usersPerPage}</p>
                    <img onClick={() => setShowdrop(!showdrop)} className='cursor-pointer' src="./assets/drop.png" alt="drop-down" />

                    {showdrop && <Dropdown onClick={() => setShowdrop(!showdrop)}>
                        <h1 onClick={() => setUsersPerPage(2)}>Set to 2</h1>
                        <h1 onClick={() => setUsersPerPage(5)}>Set to 5</h1>
                        <h1 onClick={() => setUsersPerPage(10)}>Set to 10</h1>
                    </Dropdown>
                    }
                </div>
                <div>{first + 1} - {last} of {totalUsers} </div>
                <div className='flex gap-10 items-center' >
                    <img onClick={previousPage} src="./assets/chevron-left.png" className='cursor-pointer' alt="chev-left" />
                    <img onClick={nextPage} src="./assets/chevron-right.png" className='cursor-pointer' alt="chev-right" />
                </div>
            </div>


        </PaginationCont>
    )
}

const PaginationCont = styled.div`
    width: 100%;
    text-align: right;
    padding:15px 18px 15px 0;
    background: #F4F2FF;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.05em;
    color: #6E6893;
`

const Dropdown = styled.div`
    position: absolute;
    text-align: left !important;
    width: 100px;
    right: 10px;
    top:12px;
    padding:10px 5px;
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 6px;

    div {
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    }

    h1 {
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.05em;
        padding:5px;

        &:hover {
            background: #F2F0F9;
            border-radius: 4px;
            cursor: pointer;
        }
    }
`


export default Pagination


{/* <ul> */ }
{/* const pageNumbers = [];
for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
pageNumbers.push(i)
} */}
{/* {pageNumbers.map(number => (
    <li key={number}>
        <a onClick={() => paginate(number)} href="#">{number}</a>
    </li>
))} */}
// </ul>