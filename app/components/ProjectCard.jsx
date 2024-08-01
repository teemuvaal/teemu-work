export default function ProjectCard({ title, description }) {
    return (
        <div>
            <div
            className="border border-black rounded-md p-2 w-48"
            >
                <h3>{title}</h3>
                <p
                className="text-sm font-light"
                >{description}</p>
            </div>
        </div>
    )
}