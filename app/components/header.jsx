import Image from "next/image";

export default function Header () {
    return (
        <div>
        <div className='flex'>
            <div className='w-4/5'>              
                <h2 className='text-black'>Teemu Vaalasmaa</h2>
                <div className='flex flex-col p-2'>
                    <p className='font-light text-sm text-gray-800'>Education technology specialist, Data analyst, Geek</p>
                    <p className='font-light text-sm text-gray-800'>Helsinki, Finland</p>
                    <p className='font-light text-gray-800 text-sm'>teemu.vaalasmaa@gmail.com</p>
                </div>
            </div>
            <dvi className='w-1/5'>
                <Image
                src='/notion-avatar.png'
                width={100}
                height={100}
                />
            </dvi>
        </div>
        </div>
    )
}