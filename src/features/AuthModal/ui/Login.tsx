
import React, { useState } from 'react'
import { Input } from '../../../shared/ui/Input';
import { Button } from '../../../shared/ui/Button';

interface ILogin {
    change: () => void;
    changeStatus: boolean;
}

const Login = ({change,changeStatus}:ILogin) => {
    const [login, setLogin] = useState();
    const [register, setRegister] = useState();

  return (
    <div className='flex flex-col border-t-2 border-grey bg'>
        <h2>Login</h2>
        <Input placeholder='Login' className='mt-10 mx-10' value={login} onChange={(e)=>setLogin(e)}/>
        <Input placeholder='Password' className='mt-10 mx-10' value={register} onChange={(e)=> setRegister(e)}/>
        <Button variant='2' className='mt-5' onClick={()=> change(!changeStatus)}>Register/Login</Button>
    </div>
  )
}

export default Login