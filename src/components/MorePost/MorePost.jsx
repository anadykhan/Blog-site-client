import { Box, Card, Container, Grid, Toolbar } from "@mui/material"
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { useUsersByIdData } from "../../hooks/hooks";

const MorePost = ({ data }) => {
    const { title, imageURL, owner } = data;
    const { name, isLoading } = useUsersByIdData(owner);
    const naviagate = useNavigate()

    if (isLoading) {
        return 'Loading'
    }

    const handleClick = () => {
        naviagate('/blogdetails')
    }
    return (
        <div onClick={handleClick}>
            <Card sx={{ display: 'flex', boxShadow: 'none', width: '43rem', borderRadius: '0rem', gap: '1rem' }}>
                <CardMedia
                    component="img"
                    sx={{ width: 350 }}
                    image="https://i.ibb.co/tXMfHQz/1542.jpg"
                    alt="Live from space album cover"
                />
                <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'justify' }}>
                    <CardContent sx={{ flex: '1 0 auto', width: 'full' }}>
                        <Box
                            sx={{ marginBottom: '1rem' }}
                        >
                            <Typography
                                variant="caption"
                            >
                                FASHION
                            </Typography>

                            <Typography
                                gutterBottom
                                variant="h5"
                                component="div"
                                sx={{ marginBottom: '0rem' }}
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant='caption'
                                sx={{ marginBottom: '0.3rem' }}
                            >
                                by {name.name}
                            </Typography>
                        </Box>

                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">
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

                </Box>
            </Card>
        </div>
    )
}
export default MorePost