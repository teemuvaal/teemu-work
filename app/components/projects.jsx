import ProjectCard from "./ProjectCard"

export default function Projects() {
    return (
        <div
        className="py-2"
        >
            <h2>Projects, etc.</h2>
            <div className="flex flex-row gap-2 p-2">
                <ProjectCard title="Oisko" description="Oisko is a simple social calendar tool built with NextJS, Supabase and Tailwind CSS."  href="https://oisko.app" cover='/Oisko.png'/>
                <ProjectCard title="GameGains" description="Ultrahack 2019 #3 place." href={"https://ultrahack.org/files/Ultrahack%20Sprint%20I%202019%20press%20release.pdf"} />
                <ProjectCard title="Drone Hackathon" description="Ultrahack 2019 #1 place." />
            </div>

        </div>
    )
}