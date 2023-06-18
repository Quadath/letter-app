import { Link } from "react-router-dom"

export const Header = (props: {user: string, link: string}) => {
    return (
        <div className="flex justify-between w-screen h-11 bg-neutral-950 text-slate-200 text-right py-2 px-5">
            <div>
                <p className="inline text-lg">
                    <Link to='users'>
                        Users
                    </Link>
                </p>
            </div>
            <p className='inline text-lg'>
                <Link to={props.link}>
                    {props.user}
                </Link>
            </p>
        </div>
    )
}