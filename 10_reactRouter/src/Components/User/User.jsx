import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {userId} = useParams();
  return (
    <div className='bg-orange-700 text-center text-white text-3xl'>User number : {userId}</div>
  )
}

export default User