import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import { Divider } from '@mui/material';

const Navbar = ({ res }) => {

    const { cart } = useSelector(state => state.cart)

    return (
        <Box sx={{ flexGrow: 1, position: 'sticky', top: '0px' }}>
            <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontSize: { xs: '15px', md: '20px' }, color: 'gray' }}>
                        {res[0]?.restaurant_name}
                    </Typography>
                    <Box sx={{ display: 'flex' }}>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, mt: { xs: '13px', md: '10px' }, fontSize: { xs: '15px', md: '20px' }, color: 'gray' }} >
                            My Orders
                        </Typography>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="gray"
                        >
                            <Badge badgeContent={cart.length} color="primary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Divider />
        </Box >
    )
}

export default Navbar