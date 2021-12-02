import ListGroup from 'react-bootstrap/ListGroup'
import { Pasta } from '../interfaces/pasta'

interface selectedDish {
  selectedDish: Pasta | undefined
}

const DishComments = (props: selectedDish) => (
  <ListGroup>
    {props.selectedDish ? (
      props.selectedDish.comments.map((c) => (
        <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
      ))
    ) : (
      <ListGroup.Item>Click on a pasta to see the reviews!</ListGroup.Item>
    )}
  </ListGroup>
)

export default DishComments
