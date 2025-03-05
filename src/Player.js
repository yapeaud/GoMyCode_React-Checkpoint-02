import React from 'react'
import { Card } from 'react-bootstrap'


const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <>
            <Card style={{ width: "18rem", margin: "10px" }}>
                <Card.Img variant="top" src={imageUrl} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <strong>Équipe :</strong> {team} <br />
                        <strong>Nationalité :</strong> {nationality} <br />
                        <strong>Numéro :</strong> {jerseyNumber} <br />
                        <strong>Âge :</strong> {age} ans
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Player