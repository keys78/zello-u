import { AnimatePresence, motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ToastContainer, toast } from 'react-toastify';

import {
    useDeactivateUserMutation,
    useActivateUserMutation,
    useMarkPaidMutation,
    useMarkUnpaidMutation,
    useDeleteUserMutation,
    useGetUsersQuery
} from '../services/usersApi'


const Options = ({ user, i }) => {
    const [deactivateUser] = useDeactivateUserMutation({ id: user.id });
    const [activateUser] = useActivateUserMutation({ id: user.id });
    const [markPaid] = useMarkPaidMutation({ id: user.id });
    const [markUnpaid] = useMarkUnpaidMutation({ id: user.id });
    const [deleteUser] = useDeleteUserMutation({ id: user.id });
    const { refetch } = useGetUsersQuery();

    const deactivateAlert = () => toast(`${user.firstName} is deactivated`)
    const activateAlert = () => toast(`${user.firstName} is activated`)
    const paidAlert = () => toast(`${user.firstName} is marked paid`)
    const unpaidAlert = () => toast(`${user.firstName} is marked unpaid`)
   

    const handleUserStatus = async () => {
        if(user.userStatus === "active"){
            await deactivateUser(user.id)
            deactivateAlert();
        } else {
            await activateUser(user.id)
            activateAlert()
        } 
      
        refetch();
        toggleOptions();
    }

    const handlePaymentStatus = async () => {
        user.paymentStatus === "unpaid" ? await markPaid(user.id) : await markUnpaid(user.id)
        refetch();
        alert(`${user.firstName} is marked`)
        toggleOptions();
    }
    const singleUserStatus = user.userStatus === "active" ? "Deactivate User" : "Activate User"
    const paymentStatus = user.paymentStatus === "paid" ? "Mark Unpaid" : "Mark Paid"

    const showProfile = () => {
        alert(`${user.firstName} ${user.lastName} is ${user.paymentStatus}`)
        toggleOptions();
    }
    
    

    // useEffect(() => {
    //     // document.body.addEventListener('mousedown', () => {
    //     //     setIsOptionsOpen(!isOptionsOpen)
    //     // });
    // })


    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const toggleOptions = () => {
        setIsOptionsOpen(!isOptionsOpen)
    }


    return (
        <>
         <ToastContainer position="top-right" />
        <div className='relative'>
            <img onClick={toggleOptions}
                src="./assets/More.png"
                alt="morebtn"
                className='vire cursor-pointer'
            />

            <AnimatePresence>
                
                {isOptionsOpen && <ViewMoreModal
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transiton={{ type: 'spring', duration: 0.2 }}
                >
                    <div onClick={toggleOptions}
                        className='rounded-full cursor-pointer p-2 bg-white absolute -top-3 -right-3'>
                        <img src="./assets/Close.png" />
                    </div>
                    <h1 onClick={handlePaymentStatus}>{paymentStatus}</h1>
                    <h1 onClick={showProfile}>View Profile</h1>
                    <h1 onClick={handleUserStatus}>{singleUserStatus}</h1>
                    <Split />
                    <h1 onClick={async () => await deleteUser(user.id)}>Delete</h1>
                </ViewMoreModal>
                }
            </AnimatePresence>
        </div>
        </>
    )
}

const ViewMoreModal = styled(motion.div)`
    position: absolute;
    width: 154px;
    right: 5px;
    top:0;
    padding:10px 5px;
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 9999999999999999999999999;

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
