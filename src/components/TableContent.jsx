import React from 'react'
import styled from 'styled-components'
import NavFilter from './NavFilter'

const TableContent = () => {
    return (
        <div>
            <TableHeader>TABLE HEADING</TableHeader>
            <NavFilter/>
        </div>
    )
}

const TableHeader = styled.h1`
    margin-top: 50px;
    color: #6E6893;
    font-size:14px;
    line-height:17px;
    letter-spacing:0.1em;
    font-family: 'Inter', sans-serif;
    font-weight:bold;
`

export default TableContent
