import React from 'react'
import { Alert, Container } from 'reactstrap'
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <Container className='mt-4 bgSecondary rounded-4 pt-4 pb-4'>
            <Alert className='mx-4' color='info'>
                <h4 className='alert-heading'>
                    Why Do I Need to Know the No-Vig Odds?
                </h4>
                <p>
                    We find the no-vig odds, or the fair odds, to figure out the actual chances a team will win or lose.  It is what a price of a bet would be if the sportsbook didn't have a vigorish (i.e. their 'take').  This is only one tool of many to use to beat the books!
                </p>
            </Alert>
            <div className='d-flex justify-content-center'>
                <Carousel />
            </div>
        </Container>
    )
}

export default Home
