import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/arghyadip700')
    //   .then(res => res.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)
    //   })
    // }, [])

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            {data.name}
            <img className='mx-auto my-5 rounded-2xl' src={data.avatar_url} alt="Git picture" width={300} />
            {data.bio}
            <br />
            <br />
            Total Public Repos: {data.public_repos}
            <br />
            <br />
            {data.location}
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const res = await fetch('https://api.github.com/users/arghyadip700')
    return res.json()
}
