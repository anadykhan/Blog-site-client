import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { NavLink } from 'react-router-dom';
const useStyles = makeStyles({
    customAppBar: {
        background: 'white',
        borderBottom: '2px solid black',
    },
    csutomButtom: {
        //Animation applied here
        
    }
})

const Navbar = () => {

    const classes = useStyles()

    return (
        <div>
            <AppBar
                position="static"
                elevation={0}
            >
                <Toolbar
                    disableGutters
                    className={classes.customAppBar}
                >
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                    <Grid
                        container
                        justifyContent='center'

                    >
                        <Grid item>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                <Button
                                sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    <NavLink to='/'>Home</NavLink>
                                </Button>
                                <Button
                                    sx={{ my: 2, color: 'black', display: 'block' }}
                                >
                                    <NavLink to='/addblog'>Add Blog</NavLink>
                                </Button>
                                <Button
                                    sx={{ my: 2, color: 'black', display: 'block' }}

                                >
                                    About Us
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navbar