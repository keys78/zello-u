import React, { useState } from 'react'
import styled from 'styled-components'
import { radioHeadings } from "../data"
import { usersRadio } from "../data"
import { useGetUsersQuery } from '../services/usersApi'
import { motion, AnimatePresence } from 'framer-motion'


function FilterModal({ listItem, setListItem }) {
    const { data, isSuccess } = useGetUsersQuery();
    const allUsers = isSuccess && data?.data
    const [isOptionsOpen, setIsOptionsOpen] = useState(false)
    const [activeRadio, setActiveRadio] = useState(0);
    const [activeUsersRadio, setActiveUsersRadio] = useState(0);


    const sortArray = ({ i, radio }) => {
        setActiveRadio(i)
        let sortedListItem = []

        radio.title === "First Name" && sortedListItem.push(...listItem.sort((a, b) => (a.firstName.localeCompare(b.firstName))));
        radio.title === "Last Name" && sortedListItem.push(...listItem.sort((a, b) => (a.lastName.localeCompare(b.lastName))));
        radio.title === "Due Date" && sortedListItem.push(...listItem.sort((a, b) => new Date(b.paidOn) - new Date(a.paidOn)));
        radio.title === "Last Login" && sortedListItem.push(...listItem.sort((a, b) => (a.lastLogin.localeCompare(b.lastLogin))));
        radio.title === "Default" && sortedListItem.push(...allUsers)

        setListItem(sortedListItem)
    }


    const sortUsersRadioArray = ({ i, radio }) => {
        setActiveUsersRadio(i)
        let filteredUserStatus = []
   
        radio.title === "Active" && filteredUserStatus.push(...listItem.sort((a, b) => (a.userStatus.localeCompare(b.userStatus))))
        radio.title === "Inactive" && filteredUserStatus.push(...listItem.sort((a, b) => (b.userStatus.localeCompare(a.userStatus))))
        radio.title === "All" &&  filteredUserStatus.push(...allUsers)
         
        setListItem(filteredUserStatus)
    }


    const radioIconActive = "./assets/Radio.png"
    const radioIconInactive = "./assets/Ellipse 1.png"

    const renderRadioHeadings = radioHeadings.map((radio, i) =>
        <button key={i} onClick={() => sortArray({ radio, i })}>
            <span>{radio.title}</span>
            <img src={activeRadio === i ? radioIconActive : radioIconInactive} alt="radio-sort" />
        </button>
    )

    const renderUsersRadioHeadings = usersRadio.map((radio, i) =>
        <button key={i} onClick={() => sortUsersRadioArray({i, radio})}>
            <span>{radio.title}</span>
            <img src={activeUsersRadio === i ? radioIconActive : radioIconInactive} alt="radio-sort" />
        </button>
    )



    return (
        <>
            <FilterButton onClick={() => setIsOptionsOpen(!isOptionsOpen)}>
                <img src="./assets/funnel.png" alt="funnel" />
                <h1>Filter</h1>

                <AnimatePresence>
                {isOptionsOpen && <ViewMoreModal
                 initial={{ y: 100, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 exit={{ y: 100, opacity: 0 }}
                 transiton={{ type: 'spring', duration: 0.2 }}
                >
                    <h2>sort by:</h2>
                    {renderRadioHeadings}
                    <Split />
                    <h2>users:</h2>
                    {renderUsersRadioHeadings}
                </ViewMoreModal>
                }
                </AnimatePresence>
               
            </FilterButton>
        </>
    )
}

const FilterButton = styled.div`
    position: relative;
    cursor: pointer;
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
const ViewMoreModal = styled(motion.div)`
    position: absolute;
    width: 224px;
    left: 0;
    top: 48px;
    padding:20px 10px;
    background: #FFFFFF;
    border: 1px solid #C6C2DE;
    box-sizing: border-box;
    box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.2);
    border-radius: 6px;

    button {
        display: flex;
        justify-content: space-between;
        width: 100%;
        align-items: center;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: 0.05em;
        padding:5px 10px;
        color: #25213B;

        &:hover {
            background: #F2F0F9;
            border-radius: 4px;
            cursor: pointer;
        }
    }

    h2 {
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        color: #6E6893;
        padding:0 0 10px 10px;
    }
`

const Split = styled.div`
    height: 1px;
    margin: 10px 0;
    background: #F2F0F9;
`

export default FilterModal;



// switch(radio.title) {
//     case "First Name":
//          setListItem(sortedListItem.push(...listItem.sort((a, b) => (a.firstName.localeCompare(b.firstName)))));
//     case 'Last Name':
//        setListItem(sortedListItem.push(...listItem.sort((a, b) => (a.lastName.localeCompare(b.lastName)))));
//     case 'Due Date':
//       setListItem(sortedListItem.push(...listItem.sort((a, b) => new Date(b.paidOn) - new Date(a.paidOn))));
//     case 'Last Login':
//       setListItem(sortedListItem.push(...listItem.sort((a, b) => (a.lastLogin.localeCompare(b.lastLogin)))));
//     default:
//         // if(radio.title === "Default") {
//         //     refetch()
//         //     setListtem(sortedListItem.push(...allUsers))
//         // }
      
//   }
