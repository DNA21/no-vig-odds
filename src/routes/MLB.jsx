import React from 'react'
import { Container, Table } from 'reactstrap'
import GameItem from '../components/GameItem'

const MLB = ({ games }) => {
    console.log(games)

    return (
        <Container className='bgSecondary rounded-4 mt-4'>
            <Table hover>
                <thead>
                    <tr className='border-bottom tableTheme'>
                        <th>Time</th>
                        <th>Home</th>
                        <th>Fanduel Odds</th>
                        <th>No-Vig Odds</th>
                        <th></th>
                        <th>No-Vig Odds</th>
                        <th>Fanduel Odds</th>
                        <th>Away</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game) => {
                        return (
                            <GameItem  key={game.id} game={game} />
                        )
                    })}
                </tbody>
            </Table>
        </Container>
    )
}

export default MLB
