import { styles } from "../utils/styles"
import countTeam from "../utils/count"

const ProjectCard = ({ project, handleFunc }) => {
    return <div
        key={project.id}
        className="max-w-[300px] mx-auto p-2 shadow-sm shadow-[#000] mb-3"
    >
        <h3 className="text-[20px] font-bold mb-1 ml-3">{project.name}</h3>
        <div className="flex">
            <p className="ml-3 text-gray mr-2">{project.industry}</p>
            <p className="text-gray">|</p>
            <p className="ml-3 text-gray mb-2">{project.users.length} {countTeam(project.users.length)}</p>
        </div>
        <p className="ml-3 mb-3 w-[100%]">{project.smdescription}</p>
        <button
            className={`${styles.button} block mx-auto mt-2 mb-2`}
            onClick={() => handleFunc(project)}
        >Перейти</button>
    </div>
}

export default ProjectCard