import Image from "next/image";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";

export default function Header () {
    return (
        <div>
        <div className='flex'>
            <div className='w-4/5'>              
                <h2 className='text-black'>Teemu Vaalasmaa</h2>
                <div className='flex flex-col p-2'>
                    <p className='font-light text-sm text-gray-800'>Helsinki, Finland</p>
                    <p className='font-light text-gray-800 text-sm'>teemu.vaalasmaa@gmail.com</p>
                    <span className='flex flex-row gap-2 py-2'>
                        <span
                        className="hover:scale-110"
                        ><a target="_blank" href='https://github.com/teemuvaal'><Github size={16} /></a></span>
                        <span
                        className="hover:scale-110"
                        ><a target="_blank" href='https://www.linkedin.com/in/teemuvaalasmaa/'><Linkedin size={16} /></a></span>
                        <span
                        className="hover:scale-110"
                        ><a target="_blank" href='https://www.instagram.com/flipsku/'><Instagram size={16} /></a></span>
                        <span
                        className="hover:scale-110"
                        ><a target="_blank" href='https://twitter.com/flipsku'><Twitter size={16} /></a></span>
                    </span>
                </div>
            </div>
            <div className='w-1/5'>
                <Image
                src='/notion-avatar.png'
                width={100}
                height={100}
                />  
            </div>
        </div>
        </div>
    )
}