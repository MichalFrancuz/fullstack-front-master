import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function EditUser() {

    let navigate=useNavigate()

    const {id}=useParams()

    const [user,setUser]=useState({
        familyname:"",
        name:"",
        phonenumber:"",
        email:"",
        salary:""
    })

    const{familyname,name,phonenumber,email,salary}=user

    const onInputChange=(e)=>{

        setUser({...user,[e.target.name]:e.target.value})
    }

    useEffect(()=>{
        loadUser();
    }, [])

    const onSubmit=async (e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:8080/user/${id}`,user)
        navigate("/")
    }

    const loadUser =async ()=>{
        const result=await axios.get(`http://localhost:8080/user/${id}`)
        setUser(result.data)
    }

  return (
  <div className='container'>
    <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <h2 className='text-center m-4'>Edit User</h2>

            <form onSubmit={(e)=>onSubmit(e)}>
            <div className='mb-3'>
                <label htmlFor='Familyname' className='form-label'>
                    Familyname
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter your familyname'
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
                <label htmlFor='Phonenumber' className='form-label'>
                    Phonenumber
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter your phonenumber'
                name='phonenumber'
                value={phonenumber}
                onChange={(e)=>onInputChange(e)}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor='email' className='form-label'>
                    E-mail
                </label>
                <input
                type={'text'}
                className='form-control'
                placeholder='Enter your e-mail'
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
