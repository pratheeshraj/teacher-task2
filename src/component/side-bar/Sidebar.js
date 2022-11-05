import React, { useState } from 'react'
import'./index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faSignOut,faHome,faDashboard,faList,faTable,faFolder,faPersonChalkboard, } from '@fortawesome/free-solid-svg-icons'
import { Link, Route, Routes } from 'react-router-dom'
import Dashboard from './Dashboard'
import Studentlist from './Studentlist'
import Studentmarks from './Studentmarks'
import Todayclasses from './Todayclasses'
import Timetable from './Timetable'
import Home from './Home'
import Createnew from './Createnew'
import Edit from './View'
import View from './Edit'
import Markedit from './Markedit'

    const Sidebar = () => {
   
        const [show, setShow] = useState(false);
  return (
<main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
        <FontAwesomeIcon className='a' icon={faBars}/>
       
        </div>
      </header>
    
      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <FontAwesomeIcon className='a' icon={faHome}/>
              <span className='nav-logo-name'>Homepage</span>
            </Link>

            <div className='nav-list'>
              <Link to='/Dashboard' className='nav-link active'>

              <FontAwesomeIcon className='a' icon={faDashboard}/>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/StudentList' className='nav-link'>
              <FontAwesomeIcon className='a' icon={faList}/>
                <span className='nav-link-name'>StudentList</span>
              </Link>
              <Link to='/StudentMark' className='nav-link'>
              <FontAwesomeIcon className='a' icon={faFolder}/>
                <span className='nav-link-name'>StudentMark</span>
              </Link>
              <Link to='/Todayclasses' className='nav-link'>
              <FontAwesomeIcon className='a' icon={faPersonChalkboard}/>
                <span className='nav-link-name'>Todayclasses</span>
              </Link>
              <Link to='/Timetable' className='nav-link'>
              <FontAwesomeIcon className='a' icon={faTable}/>
                <span className='nav-link-name'>Timetable</span>
              </Link>
           
            </div>
          </div>

          <Link to='/logout' className='nav-link'>
          <FontAwesomeIcon className='a' icon={faSignOut}/>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>

     <div>

   
     <Routes>
      <Route path="/" element={<Home/>}></Route>
    </Routes>
    
    <Routes>
      <Route path="/Dashboard" element={<Dashboard/>}></Route>
    </Routes>
    
    <Routes>
      <Route path="/StudentList" element={<Studentlist/>}></Route>
    </Routes>
    
    <Routes>
      <Route path="/StudentMark" element={<Studentmarks/>}></Route>
    </Routes>
    
    <Routes>
      <Route path="/Todayclasses" element={<Todayclasses/>}></Route>
    </Routes>
    <Routes>
      <Route path="/Timetable" element={<Timetable/>}></Route>
    </Routes>
    <Routes>
      <Route path="/createnew" element={<Createnew/>}></Route>
    </Routes>
    <Routes>
      <Route path="/view/:id" element={<Edit/>}></Route>
    </Routes>
    <Routes>
      <Route path="/edit/:id" element={<View/>}></Route>
    </Routes>
    <Routes>
      <Route path="/markedit" element={<Markedit/>}></Route>
    </Routes>
     </div>
    </main>
  )
}

export default Sidebar