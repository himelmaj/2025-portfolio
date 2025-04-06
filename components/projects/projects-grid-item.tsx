"use client"
import { Card, CardContent, CardFooter } from "../ui/card"
import Image from "next/image"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { unstable_ViewTransition as ViewTransition } from "react"


const ProjectGridItem = ({ project }: { project: any }) => {

    const PROJECT_PATH = `test/${project.slug}`

    return (
        < >
            <Link href={PROJECT_PATH} className={cn("p-0 cursor-pointer m-0 px-0 border-0 bg-transparent", project.className)}>
                <CardContent className="relative m-0 px-0 border-0">
                    <Image src={project.mainImage.src} alt={project.mainImage.alt} className="grayscale transition-all duration-300" />
                    <div className="absolute inset-0 bg-amber-500 mix-blend-multiply opacity-0 transition-opacity duration-300 hover:opacity-50" />
                </CardContent>

                <CardFooter className="m-0 px-0 border-0 rounded-none items-center justify-center">
                    {project.title}
                </CardFooter>
            </Link>
        </>
    )
}

export default ProjectGridItem