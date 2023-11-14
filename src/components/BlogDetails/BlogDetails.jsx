import { Avatar, Box, TextField, Typography } from "@mui/material"
import Comment from "../Comment/Comment"
import { Button } from "@mui/base"
import { useParams } from "react-router-dom"
import { useBlogsByIdData, useUsersByIdData, useBlogWithOwnerData, useCommentsData } from "../../hooks/hooks"
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react"

const BlogDetails = () => {
    const { id } = useParams()

    const { blogData, ownerData, blogLoading, ownerLoading, commentData, commentLoading } = useBlogWithOwnerData(id);

    if (blogLoading || ownerLoading || commentLoading) {
        return 'Loading'
    }

    console.log(commentData)

    const handleComment = (e) => {
        e.preventDefault()
        const comment = e.target.comment.value
        console.log(comment)
    }

    const handleUpdate = () => {
        console.log("Update button working")
        console.log(blogData)
    }

    return (
        <div className="flex justify-between">
            <Box
                width={700}
            >
                <Box
                    display="flex"
                    flexDirection='column'
                    gap={3}
                >
                    <Typography
                        variant="body1"
                    >
                        {blogData.category}
                    </Typography>

                    <Box
                        borderBottom={1}
                        sx={{ borderColor: 'black', paddingBottom: '1rem' }}
                    >
                        <Typography
                            variant="h2"
                            fontWeight='medium'
                        >
                            {blogData.title}
                        </Typography>
                    </Box>

                    <img src="https://i.ibb.co/tXMfHQz/1542.jpg" />

                    <Box
                    display={"flex"}
                    gap={15}
                    >
                        <Box
                        display={"flex"}
                        flexDirection={"column"}
                        gap={3}
                        >
                            <Button
                            style={{borderWidth: '0.1rem', borderColor: 'black', padding: '0.8rem', borderRadius: '50px'}}
                            >
                                <AddIcon
                                ></AddIcon>
                            </Button>
                            <Button
                                style={{ borderWidth: '0.1rem', borderColor: 'black', padding: '0.8rem', borderRadius: '50px' }}
                                onClick={handleUpdate}
                            >
                                <EditIcon></EditIcon>
                            </Button>
                        </Box>
                        <Typography
                            textAlign="justify"
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nisi temporibus, porro eligendi eaque tenetur minima non accusantium cumque dolorum vero consequatur assumenda voluptate numquam veritatis, iste molestiae error, enim beatae aperiam sapiente! Similique eius ea beatae mollitia architecto, deleniti accusantium sit numquam vel officia voluptatem eos tempore laudantium quas! Voluptate repudiandae at modi, consequatur aliquid quod, molestiae, tenetur blanditiis unde assumenda in voluptas sunt? Aut inventore, facere enim temporibus voluptatibus beatae unde incidunt repudiandae corporis assumenda ratione ipsa suscipit quia, consequatur a alias amet rem repellendus dolores, optio ex expedita minima nemo veniam. Illum excepturi quod cum ratione pariatur nostrum minima impedit officia. Hic soluta vel impedit quo similique unde quia nobis necessitatibus officiis repellendus totam quibusdam suscipit inventore, illo rerum nisi distinctio non aut sunt. Facere beatae provident ducimus sapiente dolorem, tempora mollitia? Molestias, cumque animi asperiores nisi voluptates atque neque. Obcaecati, ut impedit? Non recusandae dignissimos temporibus accusamus consectetur! Repudiandae nihil odio ex accusamus corporis fugit saepe maiores impedit, ullam cum sunt consequatur ut explicabo. Aliquam natus eligendi quam incidunt maxime fuga facere, illum, placeat eius distinctio beatae cum a iusto in amet laudantium! Omnis ipsum animi exercitationem, asperiores ratione aliquid, consequatur voluptas pariatur quaerat atque error quas consequuntur, repellendus dolorem hic quam et architecto quae quasi? Accusamus saepe harum id sit, ratione facilis impedit error? Quod unde facere voluptates voluptatum dolorem doloribus alias voluptatem, nesciunt quae perferendis impedit doloremque minus. Quos ipsam rerum veritatis cumque, hic eum voluptas quasi delectus rem voluptate vitae aliquid, in officiis, sunt quo harum illum vero doloremque impedit error dolore dignissimos facere sapiente libero. Omnis quam eveniet dicta vitae voluptatum earum ea maiores iusto aliquid placeat optio iste asperiores autem, sint, itaque ducimus sapiente fugiat dolorum ab voluptas quibusdam dolore neque repellendus voluptatibus. Voluptas aliquid, quibusdam facere quis voluptatibus praesentium quia?
                        </Typography>
                    </Box>

                    
                </Box>

                <Box
                >
                    <Typography
                        variant="h6"
                    >
                        Comments
                    </Typography>
                    <Box
                        width={350}
                    >
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
                    <Box
                        width={350}
                    >
                        {
                            commentData.map(data => <Comment data={data}></Comment>)
                        }
                    </Box>
                </Box>
            </Box>

        </div>
    )
}
export default BlogDetails