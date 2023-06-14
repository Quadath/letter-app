import { useEffect, useState } from 'react'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useAppDispatch } from "../hooks"
import { loginRequest, registerRequest } from "../features/authService"
import { RegisterPage } from './RegisterPage'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { LoginPage } from './LoginPage'


export const AuthPage = () => {
    return (
        <Router>
            <Routes>
                <Route path="/auth/register" element={<RegisterPage/>}/>
                <Route path="/auth/login" element={<LoginPage/>}/>
            </Routes>
        </Router>
    )
}

export const SuccessBlock = (props: {text:string}) => {
    return (
        <div className="bg-green-200 rounded-2xl w-[200px] p-4 mx-auto my-3">
            <h2 className='text-green-500 font-thin text-center'>{props.text}</h2>
        </div>
    )
}

export const ErrorBlock = (props: {text: string}) => {
    return (
        <div className="bg-red-200 rounded-2xl w-[200px] p-4 mx-auto my-3">
            <h2 className='text-red-500 font-thin text-center'>{props.text}</h2>
        </div>
    )
}