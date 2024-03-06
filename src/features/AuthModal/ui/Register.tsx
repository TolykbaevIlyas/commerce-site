'use client'
import React, { useEffect, useState } from 'react'
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';

interface IRegister {
    change:() => any;
    changeStatus: boolean;
}

const Register = ({change,changeStatus}:IRegister) => {
    const [login, setLogin] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=>{
        if(login.length <= 3){
            console.log("Less than 3")
        }
    },[login])
    
  return (
    <div>
        <h2>Register</h2>
        <Input placeholder='Login' className='mt-10 mx-10' value={login} onChange={(e)=>setLogin(e)}/>
        <Input placeholder='Name' className='mt-10 mx-10' value={name} onChange={(e)=>setName(e)}/>
        <Input placeholder='Email' className='mt-10 mx-10' value={email} onChange={(e)=>setEmail(e)}/>
        <Input placeholder='Password' className='mt-10 mx-10' value={password} onChange={(e)=> setPassword(e)}/>
        {login.length <= 3 ? <div>login Less than 3</div>:null}
        {name.length <= 3 ? <div> name Less than 3</div>:null}
        {password.length <= 3 ? <div>pass Less than 3</div>:null}
        <Button variant='2' className='mt-5' onClick={()=> change(h => !h)}>Register/Login</Button>
    </div>
  )
}

export default Register