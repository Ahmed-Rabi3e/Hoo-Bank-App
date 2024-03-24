import { Link } from 'react-router-dom'

const FeaturesItems = (props) => {
    return (
        <div className={props.className}>
            <div className='h-96 border-2 border-neutral-400 shadow-2xl flex-1 flex flex-col justify-center items-center p-3 my-6 z-50'>
                <div className=' bg-secondary p-4 mb-4 rounded-full'>
                    {props.icon}
                </div>
                <h2 className=' font-poppins text-2xl my-4 text-white'>{props.title}</h2>
                <p className='text-center text-neutral-400 leading-8'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                <Link to='/' className=' uppercase p-2 mt-2 font-mono text-2xl text-neutral-300 hover:underline hover:text-secondary'>More</Link>
            </div>
        </div>
    )
}

export default FeaturesItems