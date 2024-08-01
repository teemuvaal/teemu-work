export default function Job ({ company, title, startDate, endDate, description }) {
    return (
        <div
        className="p-2"
        >
            <span className="flex flex-col pb-2">
            <h3 className="text-md font-bold">{title}</h3>
            <h4 className="text-sm font-strong">{company}</h4>
            </span>
            <span className="flex flex-row gap-2 text-sm font-light">
                <p>{startDate} - {endDate}</p>
            </span>
            <p>{description}</p>
        </div>
    )
}