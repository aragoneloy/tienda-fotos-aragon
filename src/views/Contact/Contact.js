import * as React from 'react';

import TextField from '@mui/material/TextField';
import { FormGroup } from '@mui/material';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
const Contact = () => {
    return ( 
        <div>
            
            <FormGroup sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginTop: '2rem',

            }}>
                <h3>Contacto</h3>
                <TextField sx={{
                    width: '30vw',
                    margin: '10px',
                }} 
                id="outlined-basic" label="Nombre" variant="outlined" required />
                <TextField sx={{
                    width: '30vw',
                    margin: '10px',
                }} 
                id="outlined-basic" label="Email" variant="outlined" required/>
                <TextField sx={{
                    width: '30vw',
                    margin: '10px',
                }} 
                id="outlined-basic" label="Consulta" variant="outlined" multiline required/>
                <Button variant="contained" endIcon={<SendIcon />}>
                    Enviar
                </Button>
                
            </FormGroup>
        </div>
     );
}
 
export default Contact;