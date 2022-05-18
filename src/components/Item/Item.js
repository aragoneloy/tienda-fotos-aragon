import React from 'react' 
import "../Item/item.css"

//MATERIAL UI IMPORTS
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Item = ({item}) => {
    const { name, price, image} = item;

  return (
    
    <Card sx={{ maxWidth: 345 }} className="item">
      <CardActionArea>
        <CardMedia
          component="img"
          height="340"
          image={image} 
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
          {name}
          </Typography>
          <Typography variant="h5" color="text.secondary">
          ${price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    
  )
}

export default Item;