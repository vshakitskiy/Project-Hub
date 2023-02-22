const Ideas = ({ project }) => {
    return (
        <div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <i>{project.team}</i>
        </div>
    )
}

export default Ideas