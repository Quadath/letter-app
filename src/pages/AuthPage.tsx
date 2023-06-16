export const SuccessBlock = (props: {text:string}) => {
    return (
        <div className="bg-green-200 rounded-2xl w-[200px] p-4 mx-auto my-3">
            <h2 className='text-green-500 font-thin text-center'>{props.text}</h2>
        </div>
    )
}

export const ErrorBlock = (props: {text: string}) => {
    return (
        <div className="bg-red-200 rounded-2xl w-[200px] p-4 mx-auto my-3">
            <h2 className='text-red-500 font-thin text-center'>{props.text}</h2>
        </div>
    )
}