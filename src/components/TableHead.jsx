import React from 'react'
import styled from 'styled-components'
import { tableHeading } from '../data'

const TableHead = () => {
    const renderTableHeading = tableHeading.map((table, i) => (
        <div key={i}>
            <h1>{table.title}</h1>
        </div>
    ))
    return (
        <TableHeadContainer >
            <TableGrid className='mx-5'>
                <input type="checkbox" />
                {renderTableHeading}
                <img src="./assets/More.png" alt="morebtn" />
            </TableGrid>
        </TableHeadContainer>
    )
}

const TableHeadContainer = styled.div`
    margin-top: 16px;
    background: #F4F2FF;
    padding:15px 0;
`

const TableGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    align-items: center;
    justify-content: center;

    h1 {
        font-weight: 600;
        font-size: 15px;
        line-height: 15px;
        letter-spacing: 0.05em;
        color: #6E6893;
    }
`

export default TableHead
