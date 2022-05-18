import React from 'react'
import Item from '../Item/Item'
import "./itemList.css"

import { Link } from 'react-router-dom'
const ItemList = ({ items }) => {
  return (
    
      <div className='item-list'>
        {items.map(iteracion => {
           return (
            <Link to={`/detail/${iteracion.id}`}>
              <Item key ={iteracion.id} item={iteracion} />
            </Link>
        )} )}
      </div>
      
    
  )
}

export default ItemList

