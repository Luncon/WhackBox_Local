 import {Card} from 'react-bootstrap'


const Game = ({game}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <a href={`/game/${game._id}`}>
            <Card.Img src={game.image} variant="top"/>
        </a>
    

        <Card.Body>
            <a href={`/game/${game._id}`}>
                <Card.Title as='div'>
                   <strong>{game.name}</strong> 
                </Card.Title>
            </a>
            <Card.Text as='h3'>
                {game.desc}
            </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Game