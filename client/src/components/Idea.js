const Idea = ({ idea }) => {
    return (
        <div className="idea-container">
            <h3 className="idea-heading idea-type">Имя проекта: <span>{idea.name}</span></h3>
            <p className="idea-desc idea-type">Описание: <span>{idea.description}</span></p>
            <i className="idea-team idea-type">Колличество человек в команду: <span>{idea.team}</span></i>
        </div>
    )
}

export default Idea