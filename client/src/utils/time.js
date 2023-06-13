const Time = () => {
    const date = new Date
    const hour = date.getHours()

    return hour < 6 || hour > 18
        ? "Добрый вечер"
        : hour < 12
            ? "Доброе утро"
            : "Добрый день"
}

export default Time