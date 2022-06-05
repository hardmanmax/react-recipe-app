import { Card, CardContent, CardMedia, Typography } from '@mui/material'


const RecipePreview = ({recipe}) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={recipe.image}
        alt={recipe.title}
      />
      <CardContent>
        <Typography
          variant="h6" 
          sx={{
            whiteSpace: 'nowrap', 
            overflow: 'hidden', 
            textOverflow: 'ellipsis'
          }}
        >
          {recipe.title}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default RecipePreview