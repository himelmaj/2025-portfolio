import { getProjects } from "@/actions/get-projects"

import ProjectGridItem from "./projects-grid-item"

const ProjectGrid = async ({ projects }: { projects: any }) => {
    return (
        <section className="grid grid-cols-9 grid-flow-dense gap-4">

            {projects.map((project: any) => (
                <ProjectGridItem key={project.slug} project={project} />
            ))}
            {/* {JSON.stringify(projects, null, 2)} */}
        </section>
    )
}

export default ProjectGrid