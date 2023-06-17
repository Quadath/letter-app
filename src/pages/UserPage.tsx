import { useParams } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { UserFetchActionTypes } from "../store/types/UserTypes";
import { getUserByUsername } from "../services/userService";

export const UserPage = (props: {current: {name: string, username: string, id:string, bio?: string} | null}) => {
    const dispatch = useAppDispatch()
    const current = props.current;

    
    let username : string;
    {
        const u = useParams()['username'];
        username = u === undefined ? '' : u;
    }

    useEffect(() => {
        if (state[username] === undefined) {
            dispatch(getUserByUsername(username))
        }
    }, [username])
    
    const state = useTypedSelector(state => state.users)
    
    let same = false 

    if (state[username] === undefined) return (
        <div className="sm: container mx-auto mt-10 p-5 bg-neutral-700 rounded-xl">
            <p className="text-slate-200 text-lg">Error: no data</p>
        </div>
    )

    const {user, loading, error} = state[username]

    if(user == null) return (
        <div className="sm: container mx-auto mt-10 p-5 bg-neutral-700 rounded-xl">
            <p className="text-slate-200 text-lg">Error: no user</p>
            <p className="text-red-500">{error?.message}</p>
        </div>
    )

    if (user != null && current !== null) {
       same = username === current.username;
    }

    return (
        <div className="sm: container mx-auto mt-10 p-5 bg-neutral-700 rounded-xl">
            {loading && <p className="text-white">loading...</p>}
            <p className="text-slate-200 text-lg">{user.name}</p>
            <span className="">{user.bio} {same && <p>edit</p>}</span>
        </div>
    )
}