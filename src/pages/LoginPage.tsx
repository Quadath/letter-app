import { useEffect, useState } from 'react'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useAppDispatch } from "../hooks"
import { LoginRequestBody, loginRequest } from "../features/authService"
import { SuccessBlock, ErrorBlock } from './AuthPage'
import { Link } from 'react-router-dom'


export const LoginPage = () => {

    const {message, loading, errors} = useTypedSelector(state => state.login)
    const dispatch = useAppDispatch()
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const handleSubmit = (formData: LoginRequestBody, e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(loginRequest(formData))
        setFormData({
            username: "",
            password: "",
        })
    }

    return (
        <form className='w-[260px] p-4 pb-6 mt-5 mx-auto bg-slate-600 rounded-lg shadow-sm'>
            <h2 className='text-slate-200 text-2xl font-bold p-1 text-center'>Login</h2>
            <label className='block w-[200px] p-1 my-0 mx-auto text-left font-bold text-slate-300' htmlFor="username">Username</label>
            <input className='block w-[200px] p-1 my-0 mx-auto h-7 rounded-md' type="text" id="username" placeholder='Username'
            value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value})}/>

            <label className='block w-[200px] p-1 my-0 mx-auto text-left font-bold text-slate-300' htmlFor="password">Password</label>
            <input className='block w-[200px] p-1 my-0 mx-auto h-7 rounded-md' type="password" id="password" placeholder='Password'
            value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value})}/>

            {message == '' && !loading && <button className='block w-[200px] h-10 bg-cyan-500 mt-5 rounded-md mx-auto my-0 text-slate-200 font-bold'
            onClick={(e) => handleSubmit(formData, e)}>Register</button>}

            {message != '' && errors == null && <SuccessBlock text="Successfully logged in!"/>}
            {loading && <p className='text-center font-bold text-slate-200'>loading...</p>}
            {errors != null && <ErrorBlock text="An error has occured."/>}
            
            <p className='block text-slate-300 font-thin text-center pt-3 text-sm/[10px] mx-auto'>
                Do not have account yet?
                <Link className="text-cyan-500" to='/auth/register'>Login</Link>
            </p>
        </form>
    )
}

