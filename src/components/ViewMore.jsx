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
                    {activity.userActivity}
                </span>
                <span>
                    {activity.details}
                </span>
            </div>
        </div>
    )
}

const SubTableHead = styled.div`
   
`

export default ViewMore
