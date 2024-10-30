import ProjectCard from "./ProjectCard"
import config from "@/config"

export default function Projects() {
    return (
        <div
        className="py-2"
        >
            <h2 className="font-bold">Projects, etc.</h2>
            <div className="flex flex-col lg:flex-row gap-2 p-2 md:flex-col">
                {config.Projects.map((project, index) => (
                    <ProjectCard key={index} title={project.title} description={project.description} href={project.href} cover={project.cover}/>
                ))}
            </div>
        </div>
    )
}