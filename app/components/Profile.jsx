import config from "@/config"

export default function Profile () {
    return (
        <div
        className="py-2">
        <h1 className='text-md font-bold'>About</h1>
        <p className='font-light text-sm text-gray-700 py-1 px-2'>{config.Profile}</p>
        </div>
    )
}