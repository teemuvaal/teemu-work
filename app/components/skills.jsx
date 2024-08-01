import Technologies from "./Technologies.json"
import Image from "next/image"



export default function Skills () {
    return (
        <div className='py-4'>
            <h1 className='font-strong'>Skills</h1>
            <div>
                <h2 className='font-light text-sm p-2'>
                    Technologies
                </h2>
                <div className='flex flex-wrap px-2 gap-1'>
                    {Technologies.map((technology, index) => (
                        <Image key={index} src={technology.icon} alt={technology.name} width={24} height={24} />
                    ))}
                </div>
            </div>
            <div>
                <h2 className='font-light text-sm p-2'>
                    Other
                </h2>
            </div>
        </div>
    )
}