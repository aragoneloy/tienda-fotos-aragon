import React, { useContext } from 'react'
import Item from '../Item/Item'
import "./itemList.css"

import { ItemsContext } from '../../Context/ItemContext'

//React-router
import { Link } from 'react-router-dom'
const ItemList = ({ items }) => {
  
  
  return (
    
      <div className='item-list'>
        {items.map(item => {
           return (
            <Link to={`/detail/${item.id}`}>
              <Item key={item.id} item={item} />
            </Link>
        )} )}
      </div>
      
    
  )
}

export default ItemList;

