import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Products from '../Products/Products';

const DishCategories = ({ res }) => {

  const [dishCategories, setDishCategories] = useState()
  const [tabs, setTabs] = useState(0)

  // dishCategories click logic
  const handleSelectTabs = (i) => {
    setTabs(i)
  }
  // to store the res props in setDishCategories hook need Component did update effect
  useEffect(() => {
    setDishCategories(res[0]?.table_menu_list)
  }, [res, dishCategories])

  return (
    // dishCategories UI 
    <>
      <Box sx={{ display: 'flex', overflow: 'scroll' }}>
        {
          dishCategories?.map((value, i) => {
            let IndexOfdishCategories = i
            return <>
              <Box sx={{ width: '100%' }}>
                <Box onClick={() => handleSelectTabs(i)} sx={{ fontSize: { xs: '12px', md: '15px' }, color: IndexOfdishCategories !== tabs ? 'gray' : 'red', borderBottom: IndexOfdishCategories === tabs ? '3px solid red' : '', fontFamily: 'sans-serif', cursor: 'pointer', width: '100%', ml: '50px', mr: '50px', pt: '20px', pb: '20px', fontWeight: '700', textAlign: 'center', textShadow: '12px 6px 15px rgba(0, 0, 0, 0.270)' }} >
                  {/* heading  */}
                  {value?.menu_category}
                </Box>
              </Box>
              <Box sx={{ flexDirection: 'column', position: 'absolute', top: '150px ', visibility: IndexOfdishCategories !== tabs && 'hidden' }}>
                {value?.category_dishes?.map((item) => {
                  return (<Box><Products item={item} /></Box>)
                })}
              </Box>
            </>
          })
        }
      </Box>
    </>
  )
}

export default DishCategories