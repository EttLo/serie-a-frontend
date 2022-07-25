function PlayerDetail({ player }) {
    return (
        <article className="grid-item">
            <p>Player id: {player.id}</p>
            <p>Player name: {player.name}</p>
            <p>Player surname: {player.surname}</p>
            <p>Player dob: {player.dob}</p>
            <p>Player jersey n°: {player.jerseyNumber}</p>
            <p>Player position: {player.position}</p>
            <p>Player team id: {player.teamId}</p>
            <p>Player team name: {player.teamName}</p>
        </article>
    )
}

export default PlayerDetail;