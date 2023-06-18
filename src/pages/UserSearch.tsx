import { useEffect, useState } from "react"
import { useAppDispatch } from "../hooks"
import { useDebounce } from "usehooks-ts"
import { searchUsersQuery } from "../services/userService"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { Link } from "react-router-dom"


export const UserSearch = () => {
    const dispatch = useAppDispatch()
    const [query, setQuery] = useState('')
    const debouncedData = useDebounce<typeof query>(query, 1000)

    const {users, loading, error} = useTypedSelector(state => state.userSearch)


    useEffect(() => {
        if (debouncedData.length >= 3) {
            dispatch(searchUsersQuery(debouncedData))
        }
    }, [debouncedData])

    console.log(users)

    return (
        <div className="w-[400px] mt-10 mx-auto p-5 bg-neutral-700 rounded-xl">
            <h2 className="text-center text-white p-1">Who are you looking for?</h2>
            <input className="w-[100%] rounded-sm p-2" value={query} onChange={(e) => {setQuery(e.target.value)}}>

            </input>
            <ul>
                {loading && <p>loading...</p>}
                {error && <h2>ERROR</h2>}
                {debouncedData.length >= 3 && users?.map(user => {
                    return (
                        <li className="text-white bg-neutral-500 rounded-sm my-2 p-2" key={user.username}>
                            <Link to={`${user.username}`}>{user.name} <span className="font-thin text-slate-300">@{user.username}</span></Link>
                        </li>
                    )
                })}
                {users?.length === 0 && <p className="text-white text-center">No users found.</p>}
            </ul>
        </div>
    )
}