import React from 'react'


const ViewMore = ({ activity }) => {

    return (
        <div>
            {activity.date}
            {activity.userActivity}
            {activity.details}
        </div>
    )
}

export default ViewMore
