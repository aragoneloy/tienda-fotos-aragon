import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

//state que le pasamos al usestate
const initialState = []
export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState(initialState)
    
    return(
        <ItemsContext.Provider value={{items, setItems} }>
            {children}
        </ItemsContext.Provider>
    )
}