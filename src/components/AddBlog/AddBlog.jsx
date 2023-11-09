
import { Box, Button, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const AddBlog = () => {

  const handleSubmit = () => {

  }

  return (
    <Box
      width='full'
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      gap={3}

    >
      <Typography
        id="modal-modal-title"
        variant="h5"
        component="h1"
        fontWeight={600}
      >
        What's the INSIGHT?
      </Typography>

      <Typography variant="subtitle2" fontWeight={200}>
        Write your experience in the easiest way possible!
      </Typography>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <TextField
          name="title"
          helperText="What your blog will be called?"
          id="demo-helper-text-misaligned"
          label="Blog Title "
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
          name="catagory"
          helperText="What is the genre of the blog"
          id="demo-helper-text-misaligned"
          label="Catagory"
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
          name="blog"
          helperText="Write your insight"
          id="demo-helper-text-misaligned"
          label="Write your blog"
          defaultValue=""
          multiline
          rows={15}
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
          Publish
        </Button>

      </form>
      <Typography
        variant="body2"
        align="center"
      >
        Do you have an account? If yes <Link className="font-bold">Sign In</Link>
      </Typography>
    </Box>
  )
}
export default AddBlog