"use server"

import { getAllWorks } from "@/sanity/services/work"
import { getLocale } from "next-intl/server"
import { type SanityDocument } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";


const Work = async () => {
  const locale = await getLocale();
  const projects = await getAllWorks(locale);




  return (
    <div className=''>
      {JSON.stringify(projects, null, 2)}


      {projects.map((project: SanityDocument) => (
        <div key={project._id}>
          <h1>{project.title}</h1>
          {/* <p>{project.description}</p> */}
          {project.mainImage && <img src={urlFor(project.mainImage)?.width(550).height(310).url()} alt={project.mainImage.alt} />}
        </div>
      ))}

    </div>
  )
}

export default Work