import Image from "next/image";
import { Instagram, Linkedin, Twitter, Github } from "lucide-react";
import config from "@/config"

export default function Header () {
    return (
        <div>
        <div className='flex'>
            <div className='w-4/5'>              
                <h2 className='text-black'>{config.Name}</h2>
                <div className='flex flex-col p-2'>
                    <p className='font-light text-sm text-gray-800'>{config.Location}</p>
                    <p className='font-light text-gray-800 text-sm'>{config.Email}</p>
                    <span className='flex flex-row gap-2 py-2'>
                        <span
                        className="hover:scale-110"
                        ><a target="_blank" href={config.GitHub}><Github size={16} /></a></span>
                        <span
                        className="hover:scale-110"
                        ><a target="_blank" href={config.LinkedIn}><Linkedin size={16} /></a></span>
                        <span
                        className="hover:scale-110"
                        ><a target="_blank" href={config.Instagram}><Instagram size={16} /></a></span>
                        <span
                        className="hover:scale-110"
                        ><a target="_blank" href={config.Twitter}><Twitter size={16} /></a></span>
                    </span>
                </div>
            </div>
            <div className='w-1/5'>
                <Image
                src={config.Photo}
                width={100}
                height={100}               
                />  
            </div>
        </div>
        </div>
    )
}
