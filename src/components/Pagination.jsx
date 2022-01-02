import React from 'react'
import styled from 'styled-components'

const Pagination = () => {
    return (
        <PaginationCont>
            <div className='flex gap-12'>
                <div className='flex items-center gap-3'>
                    <p>Row per page : 10</p>
                    <img src="./assets/drop.png" alt="drop-down" />
                </div>
                <div>1 - 10 of 276 </div>
                <div className='flex gap-2 items-center' >
                    <img src="./assets/chevron-left.png" alt="chev-left" />
                    <img src="./assets/chevron-right.png" alt="chev-right" />
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

export default Pagination
