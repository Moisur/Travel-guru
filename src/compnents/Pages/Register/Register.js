import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import HandelTitle from '../../Sheard/HandelTitle';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Register.css'
import { async } from '@firebase/util';
const Register = () => {
    const [userInfo,setUserInfo]=useState({
        fastName:'',
        lastName:'',
        email:'',
        password:'',
        confirm:'',
    })
    const [errorInfo,setErrorInfo]=useState({
        fastName:'',
        lastName:'',
        email:'',
        password:'',
        confirm:'',
    })
    const handelName =(e)=>{
        const name = e.target.value;
        if(name.length>=5){
            setUserInfo({...userInfo,fastName:e.target.value})
            setErrorInfo({...errorInfo,fastName:''})
        }
        else{
            setErrorInfo({...errorInfo,fastName:'Not Valid Names'})
            setUserInfo({...userInfo,fastName:''})
        }
    }
    const handelLast =(e)=>{
        const lastName = e.target.value;
        if(lastName.length>=4){
            setUserInfo({...userInfo,lastName:e.target.value})
            setErrorInfo({...errorInfo,lastName:''})
        }
        else{
            setErrorInfo({...errorInfo,lastName:'Not Valid Names'})
            setUserInfo({...userInfo,lastName:''})
        }
        
       
    }
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
    const handelConfirm =(e)=>{
        const confirm = e.target.value;
        if(userInfo.password === confirm){
            setUserInfo({...userInfo,confirm:e.target.value})
            setErrorInfo({...errorInfo,confirm:''})
        }
        else{
            setErrorInfo({...errorInfo,confirm:'Not Valid confirm'})
            setUserInfo({...userInfo,confirm:''})
        }
      
    }
    /* ========================================= Sing up are ================================== */
    const [createUserWithEmailAndPassword,user,loading,error] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
    const [updateProfile, updating, updateerror] = useUpdateProfile(auth);

    const Register = async(event)=>{
        event.preventDefault();
        const names = userInfo.fastName;
        const last = userInfo.lastName;
        const displayName = names + last
        console.log(displayName)
        
        await createUserWithEmailAndPassword(userInfo.email,userInfo.confirm)
        await  updateProfile({displayName})
       
        
    }
    if(user || updating){
        console.log(user,updating)
    }
    if(error || updateerror){
        console.log(error,updateerror)
    }
    return (
        <div className='w-[30%] mx-auto font-serif'>
            <HandelTitle handelTitle={'Register'}></HandelTitle>
            <div className='w-[300px] p-3 mb-3 md:w-[100%] mx-auto md:p-10 mt-5  font-serif login-from '>
                <h1 className='mb-4 text-2xl'>Register</h1>
                <form onSubmit={Register}>
                    <div className='flex flex-col'>
                        <input onChange={handelName} className='input-value py-2 mb-2' type="text" placeholder='Fast Names' required />
                        <span className='m-0 p-0 text-red-600 text-sm'>{errorInfo.fastName}</span>
                        <input onChange={handelLast} className='input-value py-2 mb-2' type="text" placeholder='Last Names' required/>
                        <span className='m-0 p-0 text-red-600 text-sm'>{errorInfo.lastName}</span>
                        <input onChange={handelEmail} className='input-value py-2 mb-2' type="email" placeholder='Enter or Email'  />
                        <span className='m-0 p-0 text-red-600 text-sm'>{errorInfo.email}</span>
                        <input onChange={handelPassword} className='input-value py-2 mb-2' type="password" placeholder='password' required/>
                        <span className='m-0 p-0 text-red-600 text-sm'>{errorInfo.password}</span>
                        <input onChange={handelConfirm} className='input-value py-2 mb-2' type="password" placeholder='confirm' />
                        <span className='m-0 p-0 text-red-600 text-sm'>{errorInfo.confirm}</span>
                        <input className='bg-[#fcb100] py-1 rounded' type="submit" value="Create an account" required />
                    </div>
                </form>
                <p className='text-center mt-3 '>Already have an account? <Link to='/login' className='text-[#fcb100]'>Login</Link></p>
            </div>
            <div className='w-[90%] my-3 mx-auto flex justify-between items-center'>
                <div className='h-1 w-36 bg-slate-400'></div>
                or
                <div className='h-1 w-36 bg-slate-400'></div>
            </div>
            <button className='p-1 flex justify-around items-center w-[80%] mx-auto border rounded-2xl'>
                <h1>Google SignUp</h1>
                <img src={require('../../images/icons/google.png')} className='w-7' alt="" />
            </button>
            <button className='p-1 rounded-2xl flex justify-around items-center mt-3 w-[80%] mx-auto border'>
                <h1>Github SignUp</h1>
                <img src={require('../../images/icons/github.png')} className='w-7' alt="" />
            </button>
        </div>
        
    );
};

export default Register;