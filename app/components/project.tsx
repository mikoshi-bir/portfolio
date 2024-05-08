import gitLogo from "../blocks/assets/git.png"
import linkLogo from "../blocks/assets/link.png"


export type ProjectProps = {
  project: {
    name: string
    description: string
    tools: string[]
    background: string
    githubLink: string
    projectLink: string
  }
}
export function Project ({ project }: ProjectProps) {

  const cardStyle = {
    backgroundImage: `url(${project.background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <div style={cardStyle} className="rounded-xl relative min-h-[340px] group">
      <div className="absolute bottom-5 left-5 z-[2] flex items-center gap-2.5 bg-white rounded-full py-2 px-3.5">
          {project.name}
          <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
      </div>
      <div className="flex flex-col gap-5 absolute inset-0 w-full h-full bg-white rounded-[10px] p-8 opacity-0 group-hover:opacity-100 group-hover:animate-fadeIn shadow-[0_0_1px_1px_rgba(0,0,0,0.03)]">
        <div>{project.description}</div>
        <div className="flex flex-row gap-2 max-w-[200px] flex-wrap ">{project.tools.map((tool) => (
        <div key={tool} className="bg-[#98d0ff] rounded-md px-2 py-0.5">
          {tool}
        </div>
      ))}
      </div>
        <div className="flex gap-3">
          <div className="flex border-b border-black">
            <a href={project.githubLink} className="flex items-center gap-1" target="_blank" rel="noopener noreferrer">
              <img src={gitLogo} alt="Git" />гитхаб</a>
          </div>
          <div className="flex border-b border-black">
            <a href={project.projectLink} className="flex items-center gap-1" target="_blank" rel="noopener noreferrer">
              <img src={linkLogo} alt="Link" />ссылка на проект</a>
          </div>
          </div>
      </div>
    </div>
  )
}