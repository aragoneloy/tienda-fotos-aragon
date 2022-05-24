import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

//state que le pasamos al usestate
const initialState = [
    {   id: 1,
        name: "Foto 1",
        price: 100,
        image:"https://images.unsplash.com/photo-1651715933770-d67ded27f5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80",
        description: "Hermosa vista del camino hacia la cima de la montaña",
        category: "nature"
    },
    {   id: 2,
        name: "Foto 2",
        price: 200,
        image:"https://images.unsplash.com/photo-1643958415975-b75211d0fd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        description: "Tranquila y relajante vista al muelle de un lago con montañas de fondo",
        category: "nature"
    },
    {   id: 3,
        name: "Foto 3",
        price: 300,
        image:"https://images.unsplash.com/photo-1651932167017-60502240bb22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        description: "Impactante vista de la cascada escondida",
        category: "nature"
    },

    {   id: 4,
        name: "Foto 4",
        price: 100,
        image:"https://images.unsplash.com/photo-1651715933770-d67ded27f5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80",
        description: "Hermosa vista del camino hacia la cima de la montaña",
        category: "urban"
    },
    {   id: 5,
        name: "Foto 5",
        price: 200,
        image:"https://images.unsplash.com/photo-1643958415975-b75211d0fd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        description: "Tranquila y relajante vista al muelle de un lago con montañas de fondo",
        category: "urban"
    },
    {   id: 6,
        name: "Foto 6",
        price: 300,
        image:"https://images.unsplash.com/photo-1651932167017-60502240bb22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        description: "Impactante vista de la cascada escondida",
        category: "urban"
    },

    {   id: 7,
        name: "Foto 7",
        price: 100,
        image:"https://images.unsplash.com/photo-1651715933770-d67ded27f5d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=740&q=80",
        description: "Hermosa vista del camino hacia la cima de la montaña",
        category: "abstract"
    },
    {   id: 8,
        name: "Foto 8",
        price: 200,
        image:"https://images.unsplash.com/photo-1643958415975-b75211d0fd47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
        description: "Tranquila y relajante vista al muelle de un lago con montañas de fondo",
        category: "abstract"
    },
    {   id: 9,
        name: "Foto 9",
        price: 300,
        image:"https://images.unsplash.com/photo-1651932167017-60502240bb22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        description: "Impactante vista de la cascada escondida",
        category: "abstract"
    }
]

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState(initialState)

    return(
        <ItemsContext.Provider value={[items, setItems]}>
            {children}
        </ItemsContext.Provider>
    )
}