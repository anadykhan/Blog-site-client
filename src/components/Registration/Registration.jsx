import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Link } from "react-router-dom";

const Registration = () => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    console.log(email, password)
  }

  return (
    <Box
    width='full'
    display={"flex"}
    justifyContent={"center"}

    >
      <Box
        display='flex'
        flexDirection='column'
        gap={3}
        width={450}

      >
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h1"
          fontWeight={600}
        >
          JOIN US
        </Typography>

        <Typography variant="subtitle2" fontWeight={200}>
          Log in to your account
        </Typography>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <TextField
            name="email"
            helperText="Please enter your email"
            id="demo-helper-text-misaligned"
            label="Email"
            defaultValue=""
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

          <TextField
            name="password"
            helperText="Please enter your Password"
            id="demo-helper-text-misaligned"
            label="Password"
            defaultValue=""
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
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ background: 'black', borderRadius: '0px' }}
          >
            Submit
          </Button>

        </form>
        <Typography
          variant="body2"
          align="center"
        >
          Do you have an account? If yes <Link className="font-bold">Sign In</Link>
        </Typography>
      </Box>
    </Box>
    
  )
}
export default Registration