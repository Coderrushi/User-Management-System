import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <>
        <div className="container">
            <h1>User Management System</h1>
            <br/>
            <div className='row'>
                <div className="col-xl-6 "><div class="card">
        <div class="card-body">
            <h5 class="card-title">Users</h5>
            <p class="card-text">List of all the registered users.</p>
            <Link to="/users" class="btn btn-primary">Get Users</Link>
        </div>
        <br/>
        </div></div>

        <div className="col-xl-6 "><div class="card">
        <div class="card-body">
            <h5 class="card-title">Register User</h5>
            <p class="card-text">Register a new user.</p>
            <Link to="/register" class="btn btn-primary">Register</Link>
      </div>
      <br/>
        </div></div>
            </div>
        </div>
    </>
  )
}
