import { useState, useEffect } from 'react'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useAppDispatch } from "../hooks"
import { RegisterRequestBody, registerRequest } from "../services/authService"
import { SuccessBlock, ErrorBlock } from './AuthPage'
import { Link } from 'react-router-dom'
import {useDebounce} from 'usehooks-ts'
import classNames from 'classnames'
import { ErrorBoundary } from '../components/ErrorBoundary'

export const RegisterPage = () => {

    const {message, loading, errors} = useTypedSelector(state => state.register)
    const dispatch = useAppDispatch()
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        password: "",
        repeat: ""
    })
    const [formErrors, setFormErrors] = useState({
        name: false,
        username: false,
        password: false,
        repeat: false
    })

    const debouncedData = useDebounce<typeof formData>(formData, 1000)
    
    useEffect(() => {
        setFormErrors({
            name: formData.name !== '' && formData.name.length < 5,
            username: formData.username !== '' && formData.username.length < 5,
            password: formData.password !== '' && formData.password.length < 6,
            repeat: formData.repeat !== '' && formData.password !== formData.repeat
        })
    }, [debouncedData])

    const handleSubmit = (formData: RegisterRequestBody, e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(registerRequest(formData))
        setFormData({
            name: "",
            username: "",
            password: "",
            repeat: ""
        })
    }
    return (
        <ErrorBoundary fallback={<p>something went wrong..</p>}>
            <form className='w-[260px] p-4 pb-6 mt-5 mx-auto bg-slate-600 rounded-lg shadow-sm'>
                <h2 className='text-slate-200 text-2xl font-bold p-1 text-center'>Register</h2>
                <label className='block w-[200px] p-1 my-0 mx-auto text-left font-bold text-slate-300 justify-between' htmlFor="name">Name
                {formErrors.name && <span className='font-thin block leading-none text-red-400'>Minimum 5 characters.</span>}
                </label>
                <input className={classNames('block w-[200px] p-1 my-0 mx-auto h-7 rounded-md', {'border-2 border-red-600' : formErrors.name})} 
                type="text" id="name" placeholder='Name'
                value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value.replace(/[^a-zA-Z0-9]/g, '')})}/>

                <label className='block w-[200px] p-1 my-0 mx-auto text-left font-bold text-slate-300' htmlFor="username">Username
                {formErrors.username && <span className='font-thin block leading-none text-red-400'>Minimum 5 characters.</span>}
                </label>
                <input className={classNames('block w-[200px] p-1 my-0 mx-auto h-7 rounded-md', {'border-2 border-red-600' : formErrors.username})} 
                type="text" id="username" placeholder='Username'
                value={formData.username} onChange={(e) => setFormData({...formData, username: e.target.value.replace(/[^a-zA-Z0-9]/g, '')})}/>

                <label className='block w-[200px] p-1 my-0 mx-auto text-left font-bold text-slate-300' htmlFor="password">Password
                {formErrors.password && <span className='font-thin block leading-none text-red-400'>Minimum 6 characters.</span>}
                </label>
                <input className={classNames('block w-[200px] p-1 my-0 mx-auto h-7 rounded-md', {'border-2 border-red-600' : formErrors.password})} 
                type="password" id="password" placeholder='Password'
                value={formData.password} onChange={(e) => setFormData({...formData, password: e.target.value.replace(/[^a-zA-Z0-9!#()&.]/g, '')})}/>

                <label className='block w-[200px] p-1 my-0 mx-auto text-left font-bold text-slate-300' htmlFor="repeat">Password confirm
                {formErrors.repeat && <span className='font-thin block leading-none text-red-400'>Passwords do not match</span>}
                </label>
                <input className={classNames('block w-[200px] p-1 my-0 mx-auto h-7 rounded-md', {'border-2 border-red-600' : formErrors.repeat})} 
                type="password" id="repeat" placeholder='Confirm'
                value={formData.repeat} onChange={(e) => setFormData({...formData, repeat: e.target.value.replace(/[^a-zA-Z0-9!#()&.]/g, '')})}/>

                {message === '' && !loading && <button className='block w-[200px] h-10 bg-cyan-500 mt-5 rounded-md mx-auto my-0 text-slate-200 font-bold'
                onClick={(e) => handleSubmit(formData, e)}>Register</button>}
                
                {message !== '' && errors == null && <SuccessBlock text="Account successfully created!"/>}
                {loading && <p className='text-center font-bold text-slate-200'>loading...</p>}
                {errors !== null && <ErrorBlock text={errors.errors[0]?.msg}/>}

                <p className='block text-slate-300 font-thin text-center pt-3 text-sm/[10px] mx-auto'>
                    Already have account?
                    <Link className="text-cyan-500" to='/auth/login'> Login</Link>
                </p>
            </form>
        </ErrorBoundary>
    )
}
