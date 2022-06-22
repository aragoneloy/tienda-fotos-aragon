import React, {useContext} from 'react';
import { CartContext } from '../../Context/CartContext';

//Import reactbootstrap y react-icons
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext);

    
    return ( 
        <>
            <Link to='/cart'>
                <IconButton aria-label="cart" sx={{
                    margin: '10px',
                }}>
                    <StyledBadge badgeContent={cartQuantity} color="primary">
                        <ShoppingCartIcon color='primary'/>
                    </StyledBadge>
                </IconButton>
            </Link>
        </>
     );
}
 
export default CartWidget;


