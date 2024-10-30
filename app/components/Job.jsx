import { IdCard } from 'lucide-react'

export default function Job ({ company, title, startDate, endDate, description, website }) {
    return (
        <div
        className="p-2"
        >
            <span className="flex flex-col pb-2">
            <span className="flex flex-row gap-1">
                <IdCard />
                <h3 className="text-md font-bold pl-1">{company}</h3>
            </span>
            <span className=" border-l-2 border-black pl-4 mt-2">
            <h4 className="text-sm font-strong text-gray-700">{title}</h4>
            <p className="text-sm font-light text-gray-700">{startDate} - {endDate}</p>

            <p className="font-light text-sm">{description}</p>
                <a href={website} className="text-sm font-strong text-gray-700">{website}</a>
            </span>
            </span>
        </div>
    )
}