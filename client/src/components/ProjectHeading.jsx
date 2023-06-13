const ProjectHeading = ({ project }) => {
    return (
        <div className="shadow shadow-[#00000071] p-1 mb-8">
            <h2 className="text-[23px] text-center mt-3 font-bold mb-2">{project.name}</h2>
            <p className="text-[18px] text-center mx-auto max-w-[300px] font-bold mb-3 text-gray">{project.smdescription}</p>
        </div>
    )
}

export default ProjectHeading