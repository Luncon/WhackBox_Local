import {Row, Col} from 'react-bootstrap';
import games from '../games';
import Game from '../components/Game'


const HomeScreen = () => {
  return (
    <>
        <h1>Games</h1>
        <Row>
            {games.map((game) =>(
                <Col key={game._id} sm={12} md={6} lg={4} xl={3}>
                    <Game game={game}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default HomeScreen