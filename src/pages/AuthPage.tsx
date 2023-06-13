import { useEffect } from 'react'
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useAppDispatch } from "../hooks"
import { registerRequest } from "../features/authService"


export const AuthPage = () => {
    const {message, loading, errors} = useTypedSelector(state => state.register)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(registerRequest({
            name: 'Roman',
            username: "abcdefg",
            password: 'annann',
            repeat: 'annann'
        }))
    }, [])

    return (
        <div>

        </div>
    )
}