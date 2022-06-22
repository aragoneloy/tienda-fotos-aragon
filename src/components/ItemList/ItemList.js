import React from 'react'
import Item from '../Item/Item'
import "./itemList.css"



//React-router
import { Link } from 'react-router-dom'


const ItemList = ({ items }) => {
  
  
  return (
    
      <div className='item-list'>
        {items.map(item => {
           return (
            <Link 
            to={`/detail/${item.id}`}
            key={item.id} 
            style={{textDecoration: 'none'}}
            >
              <Item  item={item} />
            </Link>
        )} )}
      </div>
      
    
  )
}

export default ItemList;

