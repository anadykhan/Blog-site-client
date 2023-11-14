import { Avatar, Box, Typography } from "@mui/material"

const Comment = ({data}) => {

  const {name, comment} = data

  return (
      <Box
          display="flex"
          alignItems="center"
          marginBottom={2}
          padding={2}
          borderBottom="1px solid #ccc" // Added bottom border
      >
          <Avatar />
          <Box marginLeft={2}>
              <Typography variant="subtitle1" fontWeight="bold">
                {name}
              </Typography>
              <Typography variant="body2">{comment}</Typography>
          </Box>
      </Box>
  )
}
export default Comment