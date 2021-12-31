import React, { useState } from 'react'
import styled from 'styled-components'
import Options from './Options'
import ViewMore from './ViewMore'

const SingleUser = ({ listItem }) => {
    const [viewMore, setViewMore] = useState(false)
    const [activeIndex, setActiveIndex] = useState(0)

    const toggleViewMore = ({user, i}) => {
        if (i === activeIndex) {
            setViewMore(!viewMore)
        }
    }
    return (
        <div>
            {listItem &&
                listItem.map((user, i) => (
                    <div key={i}>
                        <input type="checkbox" />
                        <img src="./assets/down.png" alt="morebtn" />
                        <div>
                            <Name>{user.firstName} {user.lastName} <br /></Name>
                            <Email>{user.email}</Email>
                        </div>

                        <div>
                            <div className={`active-status ${user.userStatus === "inactive" ? 'inactive-status' : ""} `}>
                                <p />
                                {user.userStatus}
                            </div>
                            <h6 className='last-login'></h6>Last Login: {user.lastLogin}
                        </div>

                        <div>
                            {user.paymentStatus}
                            {user.paidOn}
                            {user.amountInCents}
                        </div>
                        <button onClick={() => toggleViewMore({user, i})}>View More</button>
                        <div className={`${viewMore? "block" : "hidden"}`}>
                        {user.activities.map((activity, i) =>
                            <ViewMore activity={activity} i={i} />
                        )}
                        </div>
                       
                        <Options />
                    </div>
                ))}
        </div>
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


`

export default SingleUser
