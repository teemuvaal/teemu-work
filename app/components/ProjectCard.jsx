import Image from "next/image";

export default function ProjectCard({ title, description, href, cover }) {
    return (
        <div className="w-40 h-40 relative overflow-hidden rounded-md border border-black group">
            <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                <Image 
                    src={cover} 
                    alt={title} 
                    width={160} 
                    height={160} 
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-75 group-hover:translate-y-1/4"
                />
                <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-75 transform translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                    <h3 className="text-sm font-semibold p-2">{title}</h3>
                    <p className="text-xs font-light px-2 pb-2">{description}</p>
                </div>
            </a>
        </div>
    )
}