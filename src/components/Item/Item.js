import React from 'react' 
import { Card, Button } from 'react-bootstrap'
import "../Item/item.css"


const Item = ({item}) => {
    const { name, price, image} = item;

  return (
    
      <Card style={{ width: '18rem' }} className="item">
        <Card.Img variant="top" src={image} alt={name}/>
        <Card.Body className='item-body'>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
          {price}
          </Card.Text>
          <Button variant="secondary">Detalles</Button>
        </Card.Body>
      </Card>
    
  )
}

export default Item