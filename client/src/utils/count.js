const countTeam = length => {
    if (length == 1) return "участник"
    else if (length <= 4) return "участника"
    else return "участников"
}

export default countTeam