import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

export default function AddUser() {

    let navigate=useNavigate()

    const [user,setUsers]=useState({
        familyname:"",
        name:"",
        phonenumber:"",
        email:"",
        salary:""
    })

    const{familyname,name,phonenumber,email,salary}=user

    const onInputChange=(e)=>{

        setUsers({...user,[e.target.name]:e.target.value})
    }

    const onSubmit=async (e)=>{
        e.preventDefault()
        await axios.post("http://localhost:8080/user",user)
        navigate("/")
    }

  return (
  <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Register User</h2>

            <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor='Familyname' className='form-label'>
                    Family name
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter your family name'
                name='familyname'
                value={familyname}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='Name' className='form-label'>
                    Name
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter your name'
                name='name'
                value={name}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='phonenumber' className='form-label'>
                    Phone number
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter your phone number'
                name='phonenumber'
                value={phonenumber}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                    Email
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter your email'
                name='email'
                value={email}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='salary' className='form-label'>
                    Salary
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter your salary'
                name='salary'
                value={salary}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <button type='submit' className='btn btn-outline-primary'>
                Submit
            </button>
            <Link className='btn btn-outline-danger mx-2' to='/'>
                Cancel
            </Link>
            </form>
        </div>
    </div>
  </div>
  )
}
