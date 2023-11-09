import { Avatar, Box, TextField, Typography } from "@mui/material"
import Comment from "../Comment/Comment"
import { Button } from "@mui/base"

const BlogDetails = () => {

    const handleComment = (e) => {
        e.preventDefault()
        const comment = e.target.comment.value
        console.log(comment)
    }

    return (
        <div className="flex justify-between gap-10">
            <Box 
            width={650}
            >
                <Box
                display="flex"
                flexDirection='column'
                gap={3}
                >
                    <img src="https://i.ibb.co/tXMfHQz/1542.jpg" />
                    <Typography
                        variant="body1"
                    >
                        Fashion
                    </Typography>

                    <Box
                        borderBottom={1}
                        sx={{ borderColor: 'black', paddingBottom: '1rem' }}
                    >
                        <Typography
                            variant="h2"
                            fontWeight='medium'
                        >
                            NFT: Modern Art
                        </Typography>
                    </Box>

                    <Typography
                        variant="body2"
                    >
                        by Sandra Jones
                    </Typography>

                    <Typography
                    textAlign="justify"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, illo voluptatibus sunt dolorem enim obcaecati doloribus quas eum porro culpa illum minima neque dolores. Commodi, aperiam qui dicta pariatur dolores ab nulla velit reiciendis molestias ipsa cum laboriosam quidem maiores quos voluptatum officia fugit impedit delectus ipsam. Voluptatem eveniet fugiat illum incidunt accusantium quam ad exercitationem, harum quod? Sed commodi quos molestiae dolorem repellendus id voluptatem, consequuntur, accusamus veniam saepe perferendis pariatur beatae? Excepturi illo soluta, eveniet quidem obcaecati cupiditate perspiciatis laudantium quia sint neque iste, recusandae asperiores labore blanditiis alias maiores pariatur delectus dicta, natus inventore eos! Itaque, unde!
                    </Typography>
                </Box>
            </Box>
            <div>
                <Typography
                variant="h6"
                >
                    Comments
                </Typography>
                <Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        marginBottom={2}
                        padding={2}
                        borderBottom="1px solid #ccc"
                    >
                        <Avatar />
                        <Box marginLeft={2} width="100%">
                            <form onSubmit={handleComment}>
                                <TextField
                                    name="comment"
                                    fullWidth
                                    variant="standard"
                                    label="Add a comment..."
                                    multiline
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    style={{ marginTop: '8px', background: 'black', color: 'white', padding: '0.4rem', fontSize: '0.7rem' }}
                                >
                                    Comment
                                </Button>
                            </form>
                        </Box>
                    </Box>
                </Box>
                <Comment></Comment>
            </div>
        </div>
    )
}
export default BlogDetails