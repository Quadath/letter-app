import { Link } from "react-router-dom"

export const Header = (props: {user: string, link: string}) => {
    return (
        <div className="block w-screen h-11 bg-neutral-950 text-slate-200 text-right py-2 px-5">
            <p className='text-lg'>
                <Link to={props.link}>
                    {props.user}
                </Link></p>
        </div>
    )
}