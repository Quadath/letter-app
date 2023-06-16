import { useTypedSelector } from "../hooks/useTypedSelector";

export const UserPage = (props: {current: {name: string, username: string, id:string, bio?: string} | null}) => {
    const current = props.current;

    const user = null;

    if(user == null) return (
        <div className="w-[500px] mx-auto mt-10 p-5 bg-neutral-700 rounded-xl">
            <p className="text-slate-200 text-lg">Error: no user</p>
        </div>
    )

    let same = false;
    if (user != null && current != null && user.id === current.id) {
        same = true;
    }

    return (
        <div className="w-[500px] mx-auto mt-10 p-5 bg-neutral-700 rounded-xl">
            <p className="text-slate-200 text-lg">{user.name}</p>
            <span className="">{user.bio} {same && <p>edit</p>}</span>
        </div>
    )
}