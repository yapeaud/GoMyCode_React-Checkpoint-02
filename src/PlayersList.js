import React from 'react'
import Player from './Player'
import players from './players'

const PlayersList = () => {
    return (
        <>
            <section style={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
                {players.map(player => (
                    <Player key={player.id} {...player} />
                ))}
            </section>
        </>
    )
}

export default PlayersList