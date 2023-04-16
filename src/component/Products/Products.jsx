import { Box, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'
import Divider from '@mui/material/Divider';
import veg from '../../assets/png/veg.png'
import nonveg from '../../assets/png/nonveg.png'
import { useDispatch } from 'react-redux'
import { addCart, removeCart } from '../../features/cart/cartSlice'
const Products = ({ item }) => {

    const dispatch = useDispatch()
    const [cartCounter, setCartCounter] = useState(0)

    //cart quantity minuse
    const handleCartCounterMinuse = (product) => {

        // if cartCounter is greater then 0 then update the cart icon on the top bar.
        if (cartCounter > 0) {
            dispatch(removeCart())
        }
        
        //if cartCounter is less then on equal to 0 then set the setCartCounter() hook 0 else dicrease counter
        if (cartCounter <= 0) {
            setCartCounter(0)
        } else {
            setCartCounter(p => p - 1)
        }
    }

    //cart quantity pluse
    const handleCartCounterPluse = (product) => {
        setCartCounter(p => p + 1)
        dispatch(addCart(product))
    }

    return (<>
        <Box
            sx={{ display: 'flex', flexDirection: 'row', width: '97vw', pt: '10px', ml: { xs: '0px', md: '25px' } }}
        >
            <Box
                sx={{ ml: { xs: '10px', md: '0px' } }}
            >
                <CardMedia
                    sx={{ pt: '5px', boxShadow: '5px 5px 8px rgba(192, 192, 192, 0.551)' }}
                    component="img"
                    height="20vmax"
                    image={item.dish_Type === 1 ? nonveg : veg}
                    alt="Paella dish"
                />
            </Box>
            <Box
                sx={{ width: '70vw', ml: '5px' }}
            >
                <Typography sx={{ fontFamily: 'sans-serif', fontSize: { xs: '15px', md: '25px' }, fontWeight: '700', color: 'rgb(71, 71, 71)', textShadow: '2px 2px 10px rgba(0, 0, 0, 0.154)' }} variant="h5" >{item?.dish_name}</Typography>
                <Box
                    sx={{ display: 'flex', width: '100%' }}
                >

                    <Typography variant="h6"
                        sx={{ width: '100%', fontFamily: 'sans-serif', fontSize: { xs: '10px', md: '18px' }, lineHeight: { xs: '30px', md: '30px' }, fontWeight: '700', color: 'rgb(92, 92, 92)' }}
                    >{item?.dish_currency} {item?.dish_price}</Typography>
                    <Box
                        sx={{
                            display: 'flex', justifyContent: 'end'
                            , width: '100%'
                        }}
                    >

                        <Typography variant="h6"
                            sx={{ width: '100%', fontFamily: 'sans-serif', fontSize: { xs: '10px', md: '18px' }, lineHeight: { xs: '30px', md: '30px' }, textAlign: 'right', mr: '20px', fontWeight: '700', color: 'rgb(92, 92, 92)' }}
                        >{item?.dish_calories} calories</Typography>
                    </Box>
                </Box>
                <Box>

                </Box>
                <Typography sx={{ lineHeight: '20px', fontFamily: 'sans-serif', color: 'gray', fontSize: { xs: '14px', md: '14px' } }} variant="subtitle1" >{item?.dish_description}</Typography>
                <Box
                    sx={{ display: 'flex', mt: '20px', mb: '10px' }}
                >
                    {item?.dish_Availability ? <>
                        <Box onClick={() => handleCartCounterMinuse(item)} variant="contained" sx={{ width: '40px', backgroundColor: 'green', color: 'white', borderTopLeftRadius: "15px", borderBottomLeftRadius: "15px", boxShadow: '10px 10px 18px rgba(192, 192, 192, 0.951)', cursor: 'pointer' }}>
                            <Typography sx={{ textAlign: 'center' }} >
                                -
                            </Typography>
                        </Box>
                        <Typography sx={{ backgroundColor: 'green', pl: '9px', pr: '9px', color: 'white', boxShadow: '10px 10px 18px rgba(192, 192, 192, 0.951)' }} variant="subtitle1" > {cartCounter} </Typography>
                        <Box onClick={() => handleCartCounterPluse(item)} variant="contained" sx={{ width: '40px', backgroundColor: 'green', color: 'white', borderTopRightRadius: "15px", borderBottomRightRadius: "15px", boxShadow: '10px 10px 18px rgba(192, 192, 192, 0.951)', cursor: 'pointer' }}>
                            <Typography sx={{ textAlign: 'center' }} >
                                +
                            </Typography>
                        </Box>
                    </>
                        :
                        <Typography variant="subtitle1" sx={{ color: 'red' }} >
                            Not Available
                        </Typography>
                    }
                </Box>
                <Typography variant="subtitle1" sx={{ color: 'red', mb: '10px' }} >{item?.addonCat.length !== 0 && 'Customization Available'}</Typography>
            </Box>
            <Box
                sx={{ width: '25vw' }}
            >
                <Box
                    sx={{ mr: { xs: '7px', md: '10px' }, display: 'flex', justifyContent: 'end' }}
                >
                    <CardMedia
                        sx={{ borderRadius: { xs: '5px', md: '15px' }, width: { xs: '100%', md: '80%' }, height: { xs: "10vmax", md: "25vh" }, mb: '10px', boxShadow: '10px 10px 18px rgba(192, 192, 192, 0.951)' }}
                        component="img"
                        // height="15px"
                        image={item?.dish_image}
                        alt="Paella dish"
                    />
                </Box>
            </Box>
        </Box>
        <Divider />
    </>
    )
}

export default Products