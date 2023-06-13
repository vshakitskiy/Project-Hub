import countTeam from "../utils/count"

const ProjectTeam = ({ project }) => {
    return (
        <div className="">
            <div className="flex items-center mb-5 justify-between">
                <h3 className="text-[20px] font-bold">Команда</h3>
                <p className="text-[18px] text-gray font-bold">{project.users.length} {countTeam(project.users.length)}</p>
            </div>
            {project.users.map(member => <div className="mb-3" key={member.id}>
                <h4 className="text-[20px]">{member.surname} {member.name}</h4>
                {member.creator && <p className="text-gray">Лидер команды</p>}
            </div>)}
        </div>
    )
}

export default ProjectTeam