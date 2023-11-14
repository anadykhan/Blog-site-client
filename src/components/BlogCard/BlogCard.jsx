import { Card, Grid, Toolbar } from "@mui/material"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { useUsersByIdData } from "../../hooks/hooks";

const BlogCard = ({ data }) => {
  const navigate = useNavigate()
  const { _id, title, imageURL, owner } = data;
  const { name, isLoading } = useUsersByIdData(owner);

  if (isLoading) {
    return 'Loading'
  }

  const handleClick = () => {
    navigate(`/blogdetails/${_id}`)
  }

  return (
    <div>
      <Card sx={{ maxWidth: 300, boxShadow: 'none', borderRadius: '0' }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imageURL}
          title="green iguana"
          onClick={handleClick}
        />
        <CardContent
        onClick={handleClick}
        >
          <Toolbar
            disableGutters
            sx={{ alignItems: 'start', flexDirection: 'column-reverse' }}
          >
            <Typography
              variant='caption'
              sx={{ marginBottom: '0.3rem' }}
            >
              by {name.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="div"
            >
              {title}
            </Typography>
            <Typography
              variant="caption"
            >
              FASHION
            </Typography>
          </Toolbar>

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button 
          size="small"
          style={{ background: 'black', borderRadius: '0px', color: 'white', paddingRight: '15px' }}
          >
            <Grid
              container
              alignItems='center'
              gap={1}
            >
              <Grid item>
                <AddIcon />
              </Grid>
              <Grid item>
                Wishlist
              </Grid>
            </Grid>
          </Button>
        </CardActions>
      </Card>
    </div>
  )
}
export default BlogCard