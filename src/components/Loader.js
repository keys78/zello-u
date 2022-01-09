import React from 'react'

const Loader = () => {
    return (
        <div className='flex justify-center items-center'>
            <div>
                <img className='w-40' src="https://i.gifer.com/3IsP.gif" alt='loader' />
                <p>Loading Data Please Wait....</p>
            </div>
        </div>
    )
}

export default Loader
