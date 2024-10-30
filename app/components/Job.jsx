export default function Job ({ company, title, startDate, endDate, description, website }) {
    return (
        <div
        className="p-2"
        >
            <span className="flex flex-col pb-2">
            <h3 className="text-md font-bold">{company}</h3>
            <h4 className="text-sm font-strong text-gray-700">{title}</h4>
            <p className="text-sm font-light text-gray-700">{startDate} - {endDate}</p>
            </span>
            <p className="font-light text-sm">{description}</p>
            <a href={website} className="text-sm font-strong text-gray-700">{website}</a>
        </div>
    )
}