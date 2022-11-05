
import React from "react";

import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { update } from "lodash";


const Edit = () => {
    const[Name,setName]=useState("")
    
    const[email,setemail]=useState("")

    const[country,setcountry]=useState("")

    const[state,setstate]=useState("")
    
    const[city,setcity]=useState("")

    const[phonenumber,setphone]=useState("")

    const[DOD,setdate]=useState("")

    const[Gender,setgender]=useState("")

    const navigator=useNavigate()

    const{id}=useParams()
    useEffect(() => {
      const FetchData = async () => {
        
          const users = await axios.get(`https://634d8895f5d2cc648ea89ba8.mockapi.io/student/${id}`)
          console.log(users.data.country)
          setName(users.data.Name)
          setemail(users.data.email)
          setcountry(users.data.country)
          setstate(users.data.state)
          setcity(users.data.city)
          setphone(users.data.phonenumber)
          setdate(users.data.DOD)
          setgender(users.data.Gender)
         
       
      }
      FetchData()
  const data={
    Name: Name,
    email: email,
    country: country,
    state: state,
    city: city,
    phonenumber: phonenumber,
    DOD: DOD,
    Gender: Gender,
  }

      const update=(e)=>{
       e.preventDefault()
        axios.put(`https://634d8895f5d2cc648ea89ba8.mockapi.io/student/${id}`,data)
        .then(navigator('/'))
      }
      
 
  }, [])
   
   
    return (
    
        <form>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <label>User Name</label>
                <input
                  name="Name"
                  onChange={(e)=>setName(e.target.value)}
                  value={Name}
                  type={"text"}
                 
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    name="email"
                    onChange={(e)=>setemail(e.target.value)}
                    value={email}
                    type={"email"}
                    class="form-control"
                 
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>country</label>
                <select className="form-control"    name="country"
                   onChange={(e)=>setcountry(e.target.value)}
                    value={country}>
                  <option>India</option>
                  <option>America</option>
                  <option>China</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>State</label>
                <select className="form-control"  name="state"
                   onChange={(e)=>setstate(e.target.value)}
                    value={state}>
                  <option>Tamil Nadu</option>
                  <option>Kerala</option>
                  <option>Karnadaka</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>City</label>
                <select className="form-control"name="city"
                    onChange={(e)=>setcity(e.target.value)}
                    value={city}>
                  <option>India</option>
                  <option>America</option>
                  <option>China</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" className="form-control" name="phonenumber"
                   onChange={(e)=>setphone(e.target.value)}
                    value={phonenumber}/>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Date Of Birth</label>
                <input type={"date"} className="form-control"name="DOD"
                   onChange={(e)=>setdate(e.target.value)}
                    value={DOD} />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
                <label>Gender</label>
                <select className="form-control"name="Gender"
                    onChange={(e)=>setgender(e.target.value)}
                    value={Gender}>
                  <option>female</option>
                  <option>male</option>
                  <option>Transexual Person</option>
                </select>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="form-group">
             <button onClick={update}>update</button>
              </div>
            </div>
          </div>
       
      </div>
      </form>
    );
  };

export default Edit;
