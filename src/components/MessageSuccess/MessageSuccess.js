import React from 'react'
import { Alert } from '@mui/material';
const MessageSuccess = ({purchaseID}) => {
    return ( 
        <div>
            <Alert severity="success">Gracias por su compra! Su ID de transaccion es {purchaseID}</Alert>
        </div>
     );
}
 
export default MessageSuccess;