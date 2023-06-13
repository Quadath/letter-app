import { useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import * as AuthActionCreators from '../features/authService'

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(AuthActionCreators, dispatch)
}