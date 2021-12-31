import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function FilterModal({radioButton, filterRadio}) {
    const [active, setActive] = useState(0)

    const ledo = ({status, i}) => {
        filterRadio(status)
        console.log(status)
        setActive(i)
        console.log(i)
    }


    return (
        // <div >
        //     {
        //         radioButton.map((status, i)=>{
        //             return <button key={i} type="button"  onClick={() => ledo({status,i})}
        //             className={`btn ${i === active ? "lac" : ""}`}>
        //                  {status}</button>
        //         })
        //     }
        // </div>
        <FilterButton>
            <img src="./assets/funnel.png" alt="funnel" />
            <h1>Filter</h1>
        </FilterButton>
    )
}

const FilterButton  = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap:10px;
    width: 88px;
    height: 40px;
    padding:10px;
    border: 1px solid #C6C2DE;
    border-radius: 6px;

    h1 {
        font-size: 16px;
        line-height: 19px;
        color:#25213B;
    }
`

export default FilterModal;
