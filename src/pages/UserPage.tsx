import { useParams } from "react-router";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { UserFetchActionTypes } from "../store/types/UserTypes";
import { getUserByUsername } from "../services/userService";

export const UserPage = (props: {current: {name: string, username: string, id:string, bio?: string} | null}) => {
    const dispatch = useAppDispatch()
    const current = props.current;

    const user = useParams()['username'];
    useEffect(() => {
        if (user === undefined) return;
        dispatch(getUserByUsername(user))
    }, [user])

    if(user == null) return (
        <div className="w-[500px] mx-auto mt-10 p-5 bg-neutral-700 rounded-xl">
            <p className="text-slate-200 text-lg">Error: no user</p>
        </div>
    )

    // let same = false;
    // if (user != null && current != null && user.id === current.id) {
    //     same = true;
    // }

    // return (
    //     <div className="w-[500px] mx-auto mt-10 p-5 bg-neutral-700 rounded-xl">
    //         <p className="text-slate-200 text-lg">{user.name}</p>
    //         <span className="">{user.bio} {same && <p>edit</p>}</span>
    //     </div>
    // )

    return (
        <p>Error</p>
    )
}