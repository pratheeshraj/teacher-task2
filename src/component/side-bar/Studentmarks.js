import React from 'react'
import { Link } from 'react-router-dom'
import"./marks.css"
const Studentmarks = () => {
  return (

    <table id="table">
      <thead>
 <tr id="tr">
  <th id="th">Name</th>
  <th id="th">Maths</th>
  <th id="th">Science</th>
  <th id="th">social</th>
  <th id="th">Tamil</th>
  <th id="th">English</th> 
  <th id="th">Action</th>
 </tr>
 </thead>
 <tr id="th">
  <td id="th">N.pratheesh</td>
  <td id="th">35</td>
  <td id="th">35</td>
  <td id="th">35</td>
  <td id="th">35</td>
  <td id="th">35</td>
  <td id="th"><Link  to="/markedit"type="button" class="btn btn-primary">Edit</Link></td>
 </tr>
 <tr id="th">
  <td id="th">N.pratheesh</td>
  <td id="th">35</td>
  <td id="th">35</td>
  <td id="th">35</td>
  <td id="th">35</td>
  <td id="th">35</td>
  <td id="th"><Link  to="/markedit"type="button" class="btn btn-primary">Edit</Link></td>
 </tr>
 <tfoot> <tr id="tr">
  <th id="th">Name</th>
  <th id="th">Maths</th>
  <th id="th">Science</th>
  <th id="th">social</th>
  <th id="th">Tamil</th>
  <th id="th">English</th> 
  <th id="th">Action</th>
 </tr></tfoot>
    </table>
  )
}

export default Studentmarks