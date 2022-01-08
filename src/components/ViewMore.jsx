import React from 'react'
import styled from 'styled-components'
import moment from 'moment'


const ViewMore = ({ activity }) => {

    return (
        <div>
            <div className='sub-table newbg'>
                <span className='uppercase'>
                    {moment(activity.date).format("D/MMM/YYYY")}
                </span>
                <span>
                    {activity.userActivity ? activity.userActivity : "USER HAS NO ACTIVITY"}
                </span>
                <span>
                    {activity.details ? activity.details : "No activigruddvdsfdv"}
                </span>
            </div>
        </div>
    )
}

const SubTableHead = styled.div`
   
`

export default ViewMore
