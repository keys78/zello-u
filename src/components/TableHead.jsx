import React, { useEffect } from 'react'
import styled from 'styled-components'
import { tableHeading } from '../data'

const TableHead = ({ setCheckedAll, setChecked, checkedAll, checked }) => {
    const renderTableHeading = tableHeading.map((table, i) => (
        <th key={i}>{table.title}</th>
    ))

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

     
    

    return (
        <thead>
            <TableHeadContainer >
                <th className='flex items-center'>
                    <input type="checkbox" 
                     onChange={(event) => selectAll(event.target.checked)}
                     checked={checkedAll}
                    />
                </th>
                {renderTableHeading}
                <th className='flex items-center justify-end'> <img src="./assets/More.png" alt="morebtn" /></th>
            </TableHeadContainer>
        </thead>
    )
}

const TableHeadContainer = styled.tr`
    background: #F4F2FF;
    border-top:1px solid #D9D5EC;
    border-bottom:1px solid #D9D5EC;

    th {
        font-weight: 600;
        font-size: 15px;
        line-height: 15px;
        letter-spacing: 0.05em;
        color: #6E6893;

        &:nth-child(3) {
           padding-right:206px;
        }
        &:nth-child(5) {
            text-align: right;
        }
    }
   
`



export default TableHead
