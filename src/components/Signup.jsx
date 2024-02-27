import { TextField, Typography,Button } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    var[data,setData]=useState();
    const inputHandler=(e)=>{
        setData({...data,[e.target.name]: e.target.value})  
        console.log(data)
    }
  return (
    <div>
        <br />
        <Typography variant='h3'>Blog Form</Typography>
        <br />
        <TextField variant='outlined' label="Blog Name" name='name' onChange={inputHandler}/>
        <br /><br />
        <TextField variant='outlined' label="Description" name='description' onChange={inputHandler} />
        <br /><br/>
        <TextField variant='outlined' label="Author Name" name='author' onChange={inputHandler}/>
        <br />
        <br /><br />
        <Button variant='contained'>submit</Button>
    </div>
  )
}

export default Signup