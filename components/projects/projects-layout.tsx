"use client"

import Image from "next/image"

const ProjectLayout = ({ project }: { project: any }) => {
    return (
        <div className="grid grid-rows-4 pt-5">

            <section className="flex flex-row overflow-auto gap-0.5 row-span-2">
                <Image src={project.mainImage.src} alt={project.mainImage.alt} className="  h-96" />

                {project.images.map((image: any, id: number) => (
                    <Image key={id} src={image.src} alt={image.alt} className=" h-96" />
                ))}
            </section>

            <section className=" row-span-2 w-full bg-green-400 order-last">
                <h2 className=" text-8xl">
                    {project.title}
                </h2>

                <p>
                    {project.description}
                </p>
            </section>

        </div>
    )
}

export default ProjectLayout