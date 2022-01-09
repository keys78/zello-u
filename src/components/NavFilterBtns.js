import React, { useState } from 'react'

function NavFilterBtn({buttons, filter}) {
    const [active, setActive] = useState(0)
    const ledo = ({status, i}) => {
        filter(status)
        setActive(i)
    }


    return (
        <div>
            {
                buttons.map((status, i)=>{
                    return <button key={i} type="button"  onClick={() => ledo({status,i})}
                    className={`btn ${i === active ? "active" : ""}`}>
                         {status}</button>
                })
            }
        </div>
    )
}

export default NavFilterBtn;
