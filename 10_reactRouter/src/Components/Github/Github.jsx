import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

    // const [data, setData] = useState([]);

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ayush844')
    //     .then(res => res.json())
    //     .then(data => setData(data));
    // }, [])


    const data = useLoaderData();

  return (
    <div className='text-center text-4xl bg-orange-700 text-white'>
        GITHUB FOLLOWERS: {data.login}
        <img src={data.avatar_url} alt='image'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/ayush844');
    return response.json();
}