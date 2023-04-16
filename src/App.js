import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './component/Navbar/Navbar';
import DishCategories from './component/DishCategories/DishCategories';
import { Box, Divider } from '@mui/material';

function App() {
  const [res, setRes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {

    axios.get('https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099')
      .then((response) => {
        setRes(response.data)
        setIsLoading(true)
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false)
      });

  }, [])

  return (
    < >
      {
        isLoading ? (<>
          <Navbar res={res} />
        <Divider />

          <DishCategories res={res} />
        </>)
          :
          <Box sx={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundImage:'radial-gradient(circle, rgb(30, 0, 255), rgb(0, 153, 255),rgb(109, 248, 255))' }}>
            <h1>Loading . . .</h1>
          </Box>
      }
    </>
  );
}

export default App;
