import { Button, Stack } from '@mui/material'
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';
import IcecreamIcon from '@mui/icons-material/Icecream';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';

const Shortcuts = () => {

  const cuisineData = [
    {
      id: 1,
      icon: <BeachAccessIcon/>,
      title: "Mediterranean",
    }, 
    {
      id: 2,
      icon: <FilterDramaIcon/>,
      title: "British",
    }, 
    {
      id: 3,
      icon: <IcecreamIcon/>,
      title: "Italian",
    }, 
    {
      id: 4,
      icon: <SoupKitchenIcon/>,
      title: "Vietnamese",
    }
  ]

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }} 
      spacing={2} 
      sx={{
        marginX: "auto", 
        marginY: 2, 
        justifyContent: "space-between", 
        maxWidth: "800px"
      }}
    >
      {
        cuisineData.map((category) => (
          <Button 
            key={category.id}
            startIcon={category.icon}
            variant="outlined"
            sx={{
              color: '#000000', 
              borderColor: '#000000',
              '&:hover': {
                borderColor: '#000000',
                backgroundColor: '#f5f5f5'
              }
            }}
          >
            {category.title}
          </Button>
        ))
      }
    </Stack>
  )
};



export default Shortcuts