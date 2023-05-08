import React from 'react'

const GameItem = ({game}) => {
    let awayTeamOdds = ''
    let homeTeamOdds = ''
    let awayImpliedOdds = 0
    let homeImpliedOdds = 0
    let totalImpliedOdds = 0
    let awayNoVigOdds = 0
    let homeNoVigOdds = 0

    if (game.away_team === game.bookmakers[0]?.markets[0].outcomes[0].name) {
        awayTeamOdds = game.bookmakers[0]?.markets[0].outcomes[0]
        homeTeamOdds = game.bookmakers[0]?.markets[0].outcomes[1]
        // if both teams are at negative odds
        if (awayTeamOdds?.price <= 0 && homeTeamOdds?.price <= 0) {
            awayImpliedOdds = Math.abs(awayTeamOdds?.price)/(Math.abs(awayTeamOdds?.price) + 100)
            homeImpliedOdds = Math.abs(homeTeamOdds?.price)/(Math.abs(homeTeamOdds?.price) + 100)
            totalImpliedOdds = awayImpliedOdds + homeImpliedOdds
            awayNoVigOdds = awayImpliedOdds / totalImpliedOdds
            homeNoVigOdds = homeImpliedOdds / totalImpliedOdds
            awayNoVigOdds = -(awayNoVigOdds/(1 - awayNoVigOdds)) * 100
            homeNoVigOdds = -(homeNoVigOdds/(1 - homeNoVigOdds)) * 100
        }
        // if away team is favorite
        else if (awayTeamOdds?.price <= 0) {
            awayImpliedOdds = Math.abs(awayTeamOdds?.price)/(Math.abs(awayTeamOdds?.price) + 100)
            homeImpliedOdds = 100/(homeTeamOdds?.price + 100)
            totalImpliedOdds = awayImpliedOdds + homeImpliedOdds

            awayNoVigOdds = awayImpliedOdds / totalImpliedOdds
            homeNoVigOdds = homeImpliedOdds / totalImpliedOdds

            awayNoVigOdds = -(awayNoVigOdds/(1 - awayNoVigOdds)) * 100
            homeNoVigOdds = (1 - homeNoVigOdds) / homeNoVigOdds * 100

        }
        //if home team is favorite
        else {
            awayImpliedOdds = 100/(awayTeamOdds?.price + 100)
            homeImpliedOdds = Math.abs(homeTeamOdds?.price)/(Math.abs(homeTeamOdds?.price) + 100)
            totalImpliedOdds = awayImpliedOdds + homeImpliedOdds
            awayNoVigOdds = awayImpliedOdds / totalImpliedOdds
            homeNoVigOdds = homeImpliedOdds / totalImpliedOdds
            awayNoVigOdds = (1 - awayNoVigOdds) / awayNoVigOdds * 100
            homeNoVigOdds = -(homeNoVigOdds/(1 - homeNoVigOdds)) * 100
        }
    } else {
        awayTeamOdds = game.bookmakers[0]?.markets[0].outcomes[1]
        homeTeamOdds = game.bookmakers[0]?.markets[0].outcomes[0]

        // if both teams are at negative odds
        if (awayTeamOdds?.price <= 0 && homeTeamOdds?.price <= 0) {
            awayImpliedOdds = Math.abs(awayTeamOdds?.price)/(Math.abs(awayTeamOdds?.price) + 100)
            homeImpliedOdds = Math.abs(homeTeamOdds?.price)/(Math.abs(homeTeamOdds?.price) + 100)
            totalImpliedOdds = awayImpliedOdds + homeImpliedOdds
            awayNoVigOdds = awayImpliedOdds / totalImpliedOdds
            homeNoVigOdds = homeImpliedOdds / totalImpliedOdds
            awayNoVigOdds = -(awayNoVigOdds/(1 - awayNoVigOdds)) * 100
            homeNoVigOdds = -(homeNoVigOdds/(1 - homeNoVigOdds)) * 100
        }
        //if away team is favorite
        else if (awayTeamOdds?.price <= 0) {
            awayImpliedOdds = Math.abs(awayTeamOdds?.price)/(Math.abs(awayTeamOdds?.price) + 100)
            homeImpliedOdds = 100/(homeTeamOdds?.price + 100)
            totalImpliedOdds = awayImpliedOdds + homeImpliedOdds

            awayNoVigOdds = awayImpliedOdds / totalImpliedOdds
            homeNoVigOdds = homeImpliedOdds / totalImpliedOdds

            awayNoVigOdds = -(awayNoVigOdds/(1 - awayNoVigOdds)) * 100
            homeNoVigOdds = (1 - homeNoVigOdds) / homeNoVigOdds * 100

        }
        // if home team is favorite
        else {
            awayImpliedOdds = 100/(awayTeamOdds?.price + 100)
            homeImpliedOdds = Math.abs(homeTeamOdds?.price)/(Math.abs(homeTeamOdds?.price) + 100)
            totalImpliedOdds = awayImpliedOdds + homeImpliedOdds
            awayNoVigOdds = awayImpliedOdds / totalImpliedOdds
            homeNoVigOdds = homeImpliedOdds / totalImpliedOdds
            awayNoVigOdds = (1 - awayNoVigOdds) / awayNoVigOdds * 100
            homeNoVigOdds = -(homeNoVigOdds/(1 - homeNoVigOdds)) * 100
        }
    }

    homeNoVigOdds = Math.round(homeNoVigOdds)
    awayNoVigOdds = Math.round(awayNoVigOdds)

    let date = new Date( Date.parse(game.commence_time))

    return (
        <>
        {(homeTeamOdds?.price)
        ?   (<tr>
                <td className='d-none d-md-table-cell'>{date.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</td>
                <td>{game.home_team}</td>
                <td className="text-center">{homeTeamOdds?.price > 0 ? '+' + homeTeamOdds?.price : homeTeamOdds?.price}</td>
                <td className='text-center'>{homeNoVigOdds > 0 ? '+' + homeNoVigOdds : homeNoVigOdds}</td>
                <td>vs</td>
                <td className='text-center'>{awayNoVigOdds > 0 ? '+' + awayNoVigOdds : awayNoVigOdds}</td>
                <td className='text-center'>{awayTeamOdds?.price > 0 ? '+' + awayTeamOdds?.price : awayTeamOdds?.price}</td>
                <td>{game.away_team}</td>
            </tr>
        ) : (null)}
        </>
    )
}

export default GameItem
