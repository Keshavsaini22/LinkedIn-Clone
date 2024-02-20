import { Avatar, Box, Button, Card, CardHeader, Stack, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react'

function PostCard() {
    return (
        <div className="cardContainer">
            <div className="header">
                <div className="left">
                    <Avatar sx={{ bgcolor: red[500], width: 50, height: 50 }} aria-label="recipe">
                        R
                    </Avatar>
                    <div className="text">
                        <Stack><Typography>Keshav Saini</Typography>
                            <Typography>.</Typography>
                            <Typography>2nd</Typography></Stack>
                        <Typography>Senior Developer @ Zenmonk</Typography>
                        <Stack>
                            <Typography>14 Jan 2020</Typography>
                            <Typography>. </Typography>
                            <i class="fa-solid fa-earth-americas"></i>

                        </Stack>
                    </div>

                </div>
                <div className="right">
                    <Button>
                        <i class="fa-solid fa-plus"></i>
                        Follow
                    </Button>
                </div>
            </div>
            <div className="content">
                <Typography className="title">This is title</Typography>
                <Typography className="body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus possimus reprehenderit officiis delectus, totam, expedita repellendus voluptate eligendi ratione facere recusandae laboriosam atque quis omnis quod? Aspernatur omnis magni rem nostrum eos quaerat provident obcaecati, ea recusandae voluptatem perspiciatis minima temporibus officiis amet similique, eum sequi ad facere! Unde repellat voluptatem, sint nam aliquam distinctio omnis suscipit molestiae? Ea, obcaecati.</Typography>
                <div className="image"></div>
                <div className="likeandcomment">
                    <Typography><i class="fa-regular fa-thumbs-up"></i> 300</Typography>
                    <Typography>18 comments</Typography>
                </div>
            </div>
            <Stack>
                <Box><i class="fa-regular fa-thumbs-up"></i> Like</Box>
                <Box><i class="fa-regular fa-comment-dots"></i> Comment</Box>
                <Box><i class="fa-solid fa-repeat"></i> Repost</Box>
                <Box><i class="fa-solid fa-paper-plane"></i> Send</Box>

            </Stack>


        </div>
    )
}

export default PostCard