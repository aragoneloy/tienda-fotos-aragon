import React from 'react' 
import "../Item/item.css"

//MATERIAL UI IMPORTS
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Paper } from '@mui/material';

const Item = ({item}) => {
    const { name, price, image} = item;

  return (
    <Paper className="item" elevation={16}>
      <Card sx={{ maxWidth: 345, minWidth: 345 }} className="item">
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
    </Paper>
  )
}

export default Item;