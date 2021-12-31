import React from 'react'
import styled from 'styled-components'

const PayDues = () => {
    return (
        <DuesBtn>
            <h1>PAY DUES</h1>
        </DuesBtn>
    )
}

const DuesBtn = styled.div`
    background: #6D5BD0;
    border-radius: 6px;
    width: 99px;
    padding:10px;
    cursor: pointer;

    h1 {
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    color: #FFFFFF !important;
    }
`

export default PayDues
