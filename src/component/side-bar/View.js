import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import"./view.css"

const View = () => {
  const [use, setuse] = useState([])
  useEffect(() => {
    const FetchData = async () => {
        const users = await axios.get(`https://634d8895f5d2cc648ea89ba8.mockapi.io/student/${id}`)
        setuse(users.data)
     
    }
    FetchData()


}, [])
  const{id}=useParams()

  return (
<><div className='container-lr'>
  <div><h3>User ID:{use.id}</h3></div>
  {use && (


<ul>
  <li className='li'><h4> Name:</h4>{use.Name}</li>
  <li className='li'><h4> Email:</h4>{use.email}</li>
  <li className='li'><h4> Country:</h4>{use.country}</li>
  <li className='li'><h4> state:</h4>{use.state}</li>
  <li className='li'><h4> City:</h4>{use.city}</li>
  <li className='li'><h4> Phone Number:</h4>{use.phonenumber}</li>
  <li className='li'><h4> DOD:</h4>{use.DOD}</li>
  <li className='li'><h4> Gender:</h4>{use.Gender}</li>
</ul>

)}</div></>
  )
}

export default View