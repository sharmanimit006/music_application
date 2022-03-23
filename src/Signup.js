import React from 'react'
import {Link} from 'react-router-dom';
import {TextField,Button,Divider} from '@material-ui/core';


 function Signup() {
    
  return (
    <>
    <div className='icon'>
        <div className="icon-class"></div>
        <div className='text'>SIGN UP</div>
    </div>
    <div className="row m-2">
        <div className="col-6  p-2">
            <TextField id="firstname" type="text" variant="outlined" label="enter the first name" fullWidth/>
            <TextField id="lastname" type="text" variant="outlined" label="enter the last name" fullWidth/>
        </div>
        
    </div>
    <div className="row m-2">

<div >
        <TextField id="email" className="p-2"  type="text" variant="outlined" label="Enter Email" fullWidth/>
        </div>
        <div >
        <TextField id="password" className="p-2" type="password" variant="outlined" label="Enter Password" fullWidth/>
        </div>
        <Button variant="contained" color="primary" fullWidth>Create Account</Button>

    </div>
    <Divider variant="middle"/>
    <p className="text-center">
        <Link to="/login" className="text-black-50"><h5>Already have an account</h5></Link>

    </p>

    
   
    
    
    </>
  )
}
export default Signup;