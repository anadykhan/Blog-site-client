
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { FormGroup, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";
import { FormControl } from "@mui/base";

const useStyles = makeStyles({
    customAppBar: {
        minHeight: "6.5rem",
    },
});

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    bgcolor: "white",
    p: 4,
    backdropFilter: "blur(5px)",
    display: "flex-col",
    justifyContent: "center",
    alignItems: "center",
};

const handleFacebook = () => {
    console.log("Working facebook!");
};

const Titlebar = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = () => {
        console.log('button working ')
    }

    const classes = useStyles();

    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" elevation={0} color="">
                    <Toolbar>
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            className={classes.customAppBar}
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
                                    <FacebookOutlinedIcon />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <Typography
                                    variant="h3"
                                    noWrap
                                    component="div"
                                    sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                                >
                                    INSIGHT
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton onClick={handleOpen}>
                                    <PersonOutlineOutlinedIcon></PersonOutlineOutlinedIcon>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                    "& .MuiModal-backdrop": {
                        backgroundColor: "rgba(0, 0, 0, 0.8);",
                        backdropFilter: "blur(2px)",
                    },
                }}
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h3"
                        component="h1"
                        align="center"
                    >
                        INSIGHT
                    </Typography>

                    <Typography variant="subtitle2" align="center" fontWeight={200}>
                        Log in to your account
                    </Typography>

                    <Box>
                        {/* Use Box or another appropriate container component instead of Typography */}
                        <TextField
                            name="email"
                            helperText="Please enter your email"
                            id="demo-helper-text-misaligned"
                            label="Email"
                            sx={{
                                "& fieldset": {
                                    borderRadius: 0,
                                    display: "flex",
                                },
                                "& input": {
                                    paddingLeft: "30px",
                                },
                                width: "100%",
                                "& .MuiFormHelperText-root": {
                                    fontWeight: "bold",
                                    color: "black",
                                    marginLeft: "0rem",
                                    marginTop: "0.7rem",
                                },
                            }}
                        />
                    </Box>

                    <Box>
                        {/* Use Box or another appropriate container component instead of Typography */}
                        <TextField
                            name="password"
                            helperText="Please enter your Password"
                            id="demo-helper-text-misaligned"
                            label="Password"
                            sx={{
                                "& fieldset": {
                                    borderRadius: 0,
                                    display: "flex",
                                },
                                "& input": {
                                    paddingLeft: "30px",
                                },
                                width: "100%",
                                "& .MuiFormHelperText-root": {
                                    fontWeight: "bold",
                                    color: "black",
                                    marginLeft: "0rem",
                                    marginTop: "0.7rem",
                                },
                            }}
                        />
                    </Box>
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ background: 'black', borderRadius: '0px' }}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>

                    <Typography
                        variant="body2"
                        align="center"
                    >
                        Do you have an account? If not <Link className="font-bold">Create One</Link>
                    </Typography>
                </Box>
            </Modal>
        </Box>
    );
};
export default Titlebar;
