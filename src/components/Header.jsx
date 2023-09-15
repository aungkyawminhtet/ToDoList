import React from 'react'

const Header = (props) => {
  return (
    <div className='navbar navbar-expand bg-primary navbar-dark'>
        <div className="container">
            <a href="#" className="navbar-brand">Todo-List<span class="badge bg-dark ms-2">{props.count}</span></a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link active"><i className='fa-solid fa-user-circle me-2'></i>Profile</a>
                </li>
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle = "dropdown"><i className="fas fa-gear"></i></a>
                    <div className="dropdown-menu dropdown-menu-end">
                        <a href="#" className='dropdown-item'>setting</a>
                        <a href="#" className='dropdown-item'>Logout</a>
                    </div>
                </li>
                
            </ul>
        </div>
    </div>
  )
}

export default Header