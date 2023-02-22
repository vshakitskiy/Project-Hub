const Idea = ({ idea }) => {
    return (
        <div>
            <h3>{idea.name}</h3>
            <p>{idea.description}</p>
            <i>{idea.team}</i>
        </div>
    )
}

export default Idea