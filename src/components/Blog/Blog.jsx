import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Chip } from '@mui/material';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    overflow: 'hidden',
    width: 'full', // Adjust the card width as needed
    height: '25rem', // Adjust the card height as needed
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // To make the image cover the card
    position: 'absolute',
    top: 0,
    left: 0,
  },
  textOverlay: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '70%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    padding: '20px',
  },
  gradientOverlay: {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to top, rgba(0, 0, 0, 1), transparent)', // Black to transparent gradient
    opacity: 0.7, // Adjust the opacity as needed
  },
});

const Blog = () => {

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <img
        src="https://i.ibb.co/tXMfHQz/1542.jpg" // Replace with your image URL
        alt="Card Background"
        className={classes.image}
      />

      <div className={classes.gradientOverlay}></div>

      <CardContent className={classes.textOverlay}>
        <Typography>
          <Chip
            label="Fashion"
            component="a"
            href="#basic-chip"
            clickable
            sx={{ background: 'black', color: 'white' }}
          />
        </Typography>
        <Typography variant="h3" component="div" sx={{ fontWeight: '500' }}>
          NFT Art Culture
        </Typography>
        <Typography variant="body2" color="white">
          by Sandra Jones
        </Typography>
        <Typography variant="body2" color="white">
          This is the content of the card overlaying the image.
        </Typography>
      </CardContent>
    </Card>
  )
}
export default Blog