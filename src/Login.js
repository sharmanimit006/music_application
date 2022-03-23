//import { Checkbox } from '@material-ui/core'
import React from 'react';
import {Link} from 'react-router-dom';
import {TextField,Button,Divider} from '@material-ui/core';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
//import PersonIcon from '@material-ui/icons/person';
 function Login() {
    



  return (
    <>
     <div className='icon'>
        <div className="icon-class">
            
        </div>
        <div className='text'>LOG IN</div>
    </div>
   
    <div className="row-m-2">

<div>
        <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email" fullWidth/>
        </div>
        <div>
        <TextField id="password"className="p-2" type="password" variant="outlined" label="Enter Password" fullWidth/>
        </div>
        <FormControlLabel
        control={
            <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontsize="small"/>}
            checkedIcon={<CheckBoxIcon fontsize="small"/>}
            />
        }
        label="remember me"
        
        
        
        
        />

    <div>
        <Button variant="contained" color="primary" fullWidth >Log in</Button>
        </div>

    </div>
    <Divider variant="middle"/>
    <p className="text-center">
        <Link to="/" className="text-black-50"><h5>create an acccount</h5></Link>

    </p>

    </>
  )
}
export default Login;