import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Options from './Options'
import ViewMore from './ViewMore'
import moment from 'moment'
import { subTableHeadings } from '../data'
import { motion } from 'framer-motion'


const SingleUser = ({ listItem, checked, setChecked, setCheckedAll }) => {
    const renderSubTableHeading = subTableHeadings.map((subTable, i) => (
        <h3 key={i}>{subTable.title}
            <span className='relative'
                data-tooltip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, mollitia."
            >
                {subTable.title === "Detail" && <img src={subTable.icon} alt="info-icon" />}
            </span>
        </h3>
    ))

    const [activeIndex, setActiveIndex] = useState()
    const toggleViewMore = ({ i }) => {
        activeIndex === i ? setActiveIndex('') : setActiveIndex(i)
    }

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


    const toggleCheck = (inputName) => {
        setChecked((prevState) => {
            const newState = { ...prevState };
            newState[inputName] = !prevState[inputName];
            return newState;
        });
    };

    return (
        <tbody>
            {listItem &&
                listItem.map((user, i) => (
                    <>
                        <TableRow
                            initial={{ opacity: 0, translateY: -50 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.2, delay: i * 0.3 }}
                            className={`${activeIndex === i ? "newbg" : ""}`}
                            key={user.id}>
                            <td>
                                <div className='flex gap-5 items-center'>
                                    <input type="checkbox"
                                        key={i}
                                        type="checkbox"
                                        name={user.id}
                                        onChange={() => toggleCheck(user.id)}
                                        checked={checked[user.id]}
                                    />
                                    <img className={`${activeIndex === i ? "upside" : "downside"}`} src="./assets/down.png" alt="morebtn" />
                                </div>
                            </td>
                            <td>
                                <Name>{user.firstName} {user.lastName} <br /></Name>
                                <Email>{user.email}</Email>
                            </td>
                            <td>
                                <button className={`active-status ${user.userStatus === "inactive" ? 'inactive-status' : ""} `}>
                                    <p />
                                    <h3>{user.userStatus}</h3>
                                </button>
                                <h6 className='last-login'>Last Login: <span>{moment(user.lastLogin).format("D/MMM/YYYY")}</span></h6>
                            </td>
                            <td>
                                <button className={`paid-status 
                                ${user.paymentStatus === "overdue" && 'overdue-status' ||
                                    user.paymentStatus === "unpaid" && "unpaid"
                                    } `}>
                                    <p />
                                    <h3>{user.paymentStatus}</h3>
                                </button>
                                <h6 className='pay-date'>Paid on <span>
                                    {user.paidOn ? moment(user.paidOn).format("D/MMM/YYYY") : ": null"}
                                </span>
                                </h6>
                            </td>
                            <td>
                                <div className='amount'>
                                    {"$"}{user.amountInCents / 100} <p >USD</p>
                                </div>
                            </td>
                            <td >
                                <div className='flex gap-7 justify-end items-center'>
                                    <ViewMoreBtn onClick={() => toggleViewMore({ i })}>View More</ViewMoreBtn>
                                    <Options user={user} i={i} />
                                </div>

                            </td>

                        </TableRow>

                        <tr className={`${activeIndex === i ? "table-row" : "hidden"}`}>
                            <td className='td-custom' colSpan="6">
                                <div>
                                    <div className='sub-table'>
                                        {renderSubTableHeading}
                                    </div>
                                    {user.activities.map((activity, i) =>
                                        <ViewMore key={i} activity={activity} i={i} />
                                    )}
                                </div>
                            </td>
                        </tr>
                    </>

                ))
            }

        </tbody>
    )
}

const Name = styled.h1`
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #25213B!important;

`
const Email = styled.h1`
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.05em;
    color: #6E6893 !important;
    margin-top: 5px;

`
const TableRow = styled(motion.tr)`
    border-bottom:1px solid #D9D5EC;
`

const ViewMoreBtn = styled.button`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #6E6893;
`

export default SingleUser

