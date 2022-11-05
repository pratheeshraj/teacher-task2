import React from "react";
import { useFormik } from "formik";
import axios from "axios";

const Createnew = () => {
  const formik = useFormik({
    initialValues: {
      Name: "",
      email: "",
      country: "",
      state: "",
      city: "",
      phonenumber: "",
      DOD: "",
      Gender: "",
    },
 validate:(values)=>{
let error={}

if(!values.Name){

  error.Name="PLease Enter Your Name"
}
if(values.Name && (values.Name.length<=3 || values.Name.length>15)){

  error.Name="userName must be between 3 to 15 characters"
}

return error

 },
    onSubmit:async (values) => {
   try {
    const useData=await axios.post("https://634d8895f5d2cc648ea89ba8.mockapi.io/student",values)
    alert("success")
   } catch (error) {
    alert("Error")
   }
    }
  });
  return (
  
      <form onSubmit={formik.handleSubmit}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label>User Name</label>
              <input
                name="Name"
                onChange={formik.handleChange}
                value={formik.values.Name}
                type={"text"}
                className={`form-control ${formik.errors.Name ? 'error-box':'null'}`}
              />
             {formik.errors.Name ?  <span style={{color:"red"}}>{formik.errors.Name}</span> : null}
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
                  onChange={formik.handleChange}
                  value={formik.values.email}
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
                  onChange={formik.handleChange}
                  value={formik.values.country}>
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
                  onChange={formik.handleChange}
                  value={formik.values.state}>
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
                  onChange={formik.handleChange}
                  value={formik.values.city}>
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
                  onChange={formik.handleChange}
                  value={formik.values.phonenumber}/>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Date Of Birth</label>
              <input type={"date"} className="form-control"name="DOD"
                  onChange={formik.handleChange}
                  value={formik.values.DOD} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
              <label>Gender</label>
              <select className="form-control"name="Gender"
                  onChange={formik.handleChange}
                  value={formik.values.Gender}>
                <option>female</option>
                <option>male</option>
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="form-group">
             <input type={"submit"} className="btn btn-primary" />
            </div>
          </div>
        </div>
     
    </div>
    </form>
  );
};

export default Createnew;
