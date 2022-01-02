import React, { useState } from 'react'
import styled from 'styled-components'
import Options from './Options'
import ViewMore from './ViewMore'
import moment from 'moment'

const SingleUser = ({ listItem, checked, setChecked }) => {
    const [activeIndex, setActiveIndex] = useState()

    const toggleViewMore = ({ i }) => {
        activeIndex === i ? setActiveIndex('') : setActiveIndex(i)
    }
    const [activeCheck, setActiveCheck] = useState()

    const onChange = (value) => {
        activeCheck === value ? setActiveCheck('') : setActiveCheck(value)
        if (activeCheck === value) {
            setActiveCheck('')
            setChecked(!checked)
        } else {
            setActiveCheck(value)
            setChecked(!checked)
        }
    }


    return (
        <tbody>
            {listItem &&
                listItem.map((user, i) => (
                    <>
                        <TableRow key={i}>
                            <td>
                                <div className='flex gap-5 items-center'>
                                    <input type="checkbox" checked={checked}
                                        onChange={() => onChange(i)}
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
                                    <Options i={i} />
                                </div>

                            </td>

                        </TableRow>

                        <tr className={`${activeIndex === i ? "table-row" : "hidden"}`}>
                            <td colspan="6">
                                <div >
                                    {user.activities.map((activity, i) =>
                                        <ViewMore activity={activity} i={i} />
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
const TableRow = styled.tr`
    border-bottom:1px solid #D9D5EC;
`

const ViewMoreBtn = styled.button`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #6E6893;
`

export default SingleUser
