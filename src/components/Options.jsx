import React, { useState } from 'react'
import styled from 'styled-components'

const Options = () => {
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen)
    }

    return (
        <div className='relative'>
            <img onClick={toggleOptions}
                src="./assets/More.png"
                alt="morebtn"
                className='cursor-pointer'
            />

            {isOptionsOpen && <ViewMoreModal>
                <div onClick={toggleOptions}
                    className='rounded-full cursor-pointer p-2 bg-white absolute -top-3 -right-3'>
                    <img src="./assets/Close.png" />
                </div>
                <h1>Edit</h1>
                <h1>View Profile</h1>
                <h1>Activate User</h1>
                <Split />
                <h1>Delete</h1>
            </ViewMoreModal>
            }
        </div>
    )
}

const ViewMoreModal = styled.div`
    position: absolute;
    width: 154px;
    /* height: 129px; */
    left: 15px;
    top: 12px;
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

        &:nth-child(4) {
            color: #007F00
        }
        &:nth-last-child(1){
            color: #D30000
        }

        &:hover {
            background: #F2F0F9;
            border-radius: 4px;
            cursor: pointer;
        }
    }
`

const Split = styled.div`
    height: 1px;
    margin: 10px 0;
    background: #F2F0F9;
`

export default Options
