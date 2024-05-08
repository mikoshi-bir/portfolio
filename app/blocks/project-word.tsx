import { Project } from "~/components/project";
import { projects } from "../projects"

export default function ProjectWord () {
  return (
    <Project project={projects.card}/>
  )
}