import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import _ from 'lodash'








const Studentlist = () => {
 
    const pageSize = 5
    const [user, setuser] = useState([])
    const [currentpage, setcurrentpage] = useState(1)
    const [postsperpage, setposetperpage] = useState()
    const loaduser=()=>{
        const FetchData = async () => {
            const users = await axios.get("https://634d8895f5d2cc648ea89ba8.mockapi.io/student")
            setuser(users.data)
            setposetperpage(_(users.data).slice(0).take(pageSize).value())
        }
        FetchData()
        
    }

    useEffect(() => {
        loaduser()
    }, [])

const raj=(pageNo)=>{
    setcurrentpage(pageNo)
    const startIndex=(pageNo-1)*pageSize
    const paginationPost=_(user).slice(startIndex).take(pageSize).value();
    setposetperpage(paginationPost)
}

    const pageCount = user ? Math.ceil(user.length / pageSize) : 0

    if (pageCount === 0) return null

    const pages = _.range(1, pageCount + 1)
    let remove=(id)=>{
       axios.delete(`https://634d8895f5d2cc648ea89ba8.mockapi.io/student/${id}`)
.then(loaduser())

              }
           
          const edit=(id)=>{
            console.log(id)
           
          }
    return (

        <>   <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800" style={{ color: "#f10086" }}>Student Data</h1>
            <Link to={"/createnew"} class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm" style={{ backgroundColor: "#f10086" }}>
                <FontAwesomeIcon icon={faDownload}  style={{color:"pink"}}/>Add student</Link>
        </div>

            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>state</th>
                                    <th>City</th>
                                    <th>PhoneNumber</th>
                                    <th>DOD</th>
                                    <th>Gender</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Country</th>
                                    <th>state</th>
                                    <th>City</th>
                                    <th>PhoneNumber</th>
                                    <th>DOD</th>
                                    <th>Gender</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                {
                                    postsperpage.map((users) => {
                                        return <tr>
                                            <td>{users.id}</td>
                                            <td>{users.Name}</td>
                                            <td>{users.email}</td>
                                            <td>{users.country}</td>
                                            <td>{users.state}</td>
                                            <td>{users.city}</td>

                                            <td>{users.phonenumber}</td>
                                            
                                            <td>{users.DOD}</td>
                                            <td>{users.Gender}</td>
                                            
                                            <Link to={`/view/${users.id}`}  class="btn btn-outline-info" color='red'>View</Link>
                                            <Link to={`/edit/${users.id}`}onClick={()=>{edit(users.id)}}  class="btn btn-outline-primary" color='red'>Edit</Link>
                                            <button onClick={()=>remove(users.id)} class="btn btn-outline-danger" color='red'>Delete</button>
                                        </tr>

                                    }

                                    )

                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <nav className='d-flex justify-content-center'>
                <ul className='pagination'>
                    {pages.map((page) => (
                            <li className={
                                page === currentpage ? "page-item active" : "page-item"
                            }><p className='page-link'
                            onClick={()=>raj(page)}>{page}</p></li>
                        ))
                    }

                </ul>
            </nav>
        </>
    )
}

export default Studentlist