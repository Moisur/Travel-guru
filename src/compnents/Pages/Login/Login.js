import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import HandelTitle from '../../Sheard/HandelTitle';
import './Login.css'
const Login = () => {
    const [userInfo,setUserInfo]=useState({
        email:'',
        password:'',
    })
    const [errorInfo,setErrorInfo]=useState({
        email:'',
        password:'',
    })
    const handelEmail =(e)=>{
        const email =(/\S+@\S+\.\S+/).test(e.target.value)
        if(email){
            setUserInfo({...userInfo,email:e.target.value})
            setErrorInfo({...errorInfo,email:''})
        }else{
            setErrorInfo({...errorInfo,email:'Not Valid Email'})
            setUserInfo({...userInfo,email:''})
        }
    }
    const handelPassword =(e)=>{
        const password = e.target.value;
        if(password.length>=6){
            setUserInfo({...userInfo,password:e.target.value})
            setErrorInfo({...errorInfo,password:''})
        }
        else{
            setErrorInfo({...errorInfo,password:'Not Valid Password'})
            setUserInfo({...userInfo,password:''})
        }
       
    }
    /* =========================== Login Works =========================  */
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
    const Login =(e)=>{
        const email = userInfo.email
        const password = userInfo.password
        signInWithEmailAndPassword(email,password)
        e.preventDefault();
    }
    return (
        <div className='w-[30%] mx-auto font-serif'>
              <HandelTitle handelTitle={'Login'}></HandelTitle>
            <div className='w-[300px] p-3 mb-3 md:w-[100%] mx-auto md:p-10 mt-20  font-serif login-from '>
                <h1 className='mb-4 text-2xl'>Login</h1>
                <form onSubmit={Login}>
                    <div className='flex flex-col'>
                        <input onChange={handelEmail} className='input-value py-2 mb-3' type="email" placeholder='Enter or Email' required/>
                        <span className='m-0 p-0 text-red-600 text-sm'>{errorInfo.email}</span>
                        <input onChange={handelPassword} className='input-value py-2 mb-3' type="password" placeholder='password' required />
                        <span className='m-0 p-0 text-red-600 text-sm'>{errorInfo.password}</span>
                        <div className='flex justify-between items-center mb-3'>
                            <div>
                                <input type="checkbox" name="" id="box" />
                                <label className='px-2' htmlFor="box">Remember Me</label>
                            </div>
                            <p className='text-[#fcb100]'>Forget Password</p>
                        </div>
                        <input className='bg-[#fcb100] py-1 rounded' type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center mt-3 '>Don't have an account ? <Link to='/register' className='text-[#fcb100]'>Create an account </Link></p>
            </div>
            <div className='w-[90%] my-3 mx-auto flex justify-between items-center'>
                <div className='h-1 w-36 bg-slate-400'></div>
                or
                <div className='h-1 w-36 bg-slate-400'></div>
            </div>
            <button className='p-1 flex justify-around items-center w-[80%] mx-auto border rounded-2xl'>
                <h1>Google SignUp</h1>
                <img src={require('../../images/icons/google.png')}  className='w-7' alt="" />
            </button>
            <button className='p-1 rounded-2xl flex justify-around items-center mt-3 w-[80%] mx-auto border'>
                <h1>Github SignUp</h1>
                <img src={require('../../images/icons/github.png')}  className='w-7' alt="" />
            </button>
        </div>
    );
};

export default Login;