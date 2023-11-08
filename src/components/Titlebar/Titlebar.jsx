import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const useStyles = makeStyles({
    customHeight: {
        minHeight: '6.5rem'
    }
})

const handleFacebook = () => {
    console.log('Working facebook!')
}

const Titlebar = () => {

    const classes = useStyles()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
            position="static"
            color=''
            elevation={0}
            >
                <Toolbar>
                    <Grid 
                    container
                    justifyContent='space-between'
                    alignItems='center'
                    className={classes.customHeight}
                    >
                        <Grid item>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                                onClick={handleFacebook}
                            >
                                <FacebookOutlinedIcon/>
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant="h3"
                                noWrap
                                component="div"
                                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                            >
                                INSIGHT
                            </Typography>
                        </Grid>
                        <Grid item>
                            <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
                        </Grid>
                    </Grid>
                    
                </Toolbar>
            </AppBar>
        </Box>
    )
}
export default Titlebar