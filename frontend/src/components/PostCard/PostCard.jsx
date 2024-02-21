import { Avatar, Box, Button, Card, CardHeader, ImageList, ImageListItem, Stack, TextField, Typography } from '@mui/material'
import { BsDot } from "react-icons/bs";
import TextImage from '../../assets/images/Linkedin-signuo-logo.png'
import { Carousel } from 'react-responsive-carousel';
import { red } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './PostCard.css'
import CommentTextField from '../CommentTextField/CommentTextField';
import CommentCard from '../CommentCard/CommentCard';
import { createComment, getComments } from '../../features/Comments/Comment.action';
function PostCard({ body, title, images, postId }) {
    const [seemore, setSeeemore] = useState(true);
    const [showcomment, setShowComment] = useState(false);
    const [comment, setcomment] = useState(null);
    const dispatch = useDispatch();
    const error = useSelector((state) => state.comment.error)
    const success = useSelector((state) => state.comment.success)
    const comments = useSelector((state) => state.comment.commentsData)
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const data = {
            body: comment,
            postId: postId
        }
        dispatch(createComment(data))
        dispatch(getComments(postId))

        if (error) {
            alert(error)
        }
        else
            alert('Comment Posted')

        setcomment("")
    }
    useEffect(() => {
        dispatch(getComments(postId))
    }, [showcomment])
    const handleCommitbuttonClick = () => {
        setShowComment(!showcomment)

    }
    return (
        <Box className="cardContainer" sx={{ my: 1 }}>
            <Box className="header">
                <Box className="left">
                    <Avatar sx={{ bgcolor: red[500], width: 50, height: 50 }} aria-label="recipe">
                        R
                    </Avatar>
                    <Box className="text">
                        <Stack direction="row" spacing={0}>
                            <Typography className='username' sx={{ fontSize: '14px' }}>Keshav Saini</Typography>
                            <BsDot className='dot' />
                            <Typography className='numtext' sx={{ fontSize: '14px' }}>2nd</Typography>
                        </Stack>
                        <Typography className='degination'>Senior Developer @ Zenmonk</Typography>
                        <Stack direction="row" spacing={0}>
                            <Typography sx={{ fontSize: '11px', color: '#666666' }}>14 Jan 2020</Typography>
                            <BsDot className='dott' />
                            <i class="fa-solid fa-earth-americas"></i>
                        </Stack>
                    </Box>

                </Box>
                <Box className="right">
                    <Button sx={{ color: "#2a72c7", fontWeight: '600' }}>
                        <i class="fa-solid fa-plus" ></i>
                        Follow
                    </Button>
                </Box>
            </Box>
            <Box className="content">
                <Box className="text">
                    <Typography sx={{ wordBreak: 'break-word' }} className="title">{title}</Typography>
                    <Typography className="body"
                        sx={{ height: seemore ? "20px" : "auto", wordBreak: 'break-word' }}
                    >{body}</Typography>
                    {body.length > 30 && (<Box component="span" className="seemore" onClick={() => { setSeeemore(!seemore) }} >{!seemore ? <>....see less</> : <>...see more</>}</Box>)
                    }
                </Box>
                {images.length === 1 ? <Box className='image'>
                    <img src={`http://localhost:8080/${images[0]}`} />
                </Box> :
                    <Box sx={{ maxWidth: 555, height: 'auto', }}>
                        <ImageList variant="masonry" cols={2} gap={2}>
                            {images?.map((item) => (
                                <ImageListItem key={item}>
                                    <img
                                        src={`http://localhost:8080/${item}`}
                                        alt="Image"
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            ))}
                        </ImageList>
                    </Box>
                }

                <Box className="likeandcomment">
                    <Typography sx={{ fontSize: '12px', color: '#807c7c' }}><i class="fa-regular fa-thumbs-up"></i> 300</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#807c7c' }}>18 comments</Typography>
                </Box>
            </Box>
            <Box sx={{ height: '1px', backgroundColor: 'rgb(209, 204, 204)', m: 1 }}></Box>
            <Stack className='lower-btn' direction="row" sx={{ justifyContent: 'space-around', marginBottom: '6px' }}>
                <Box className='single-btn' sx={{ color: '#807c7c', fontWeight: '600', fontSize: '14px', display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}><i class="fa-regular fa-thumbs-up"></i> Like</Box>
                <Box onClick={handleCommitbuttonClick} className='single-btn' sx={{ color: '#807c7c', fontWeight: '600', fontSize: '14px', display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}><i class="fa-regular fa-comment-dots"></i> Comment</Box>
                <Box className='single-btn' sx={{ color: '#807c7c', fontWeight: '600', fontSize: '14px', display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}><i class="fa-solid fa-repeat"></i> Repost</Box>
                <Box className='single-btn' sx={{ color: '#807c7c', fontWeight: '600', fontSize: '14px', display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}><i class="fa-solid fa-paper-plane"></i> Send</Box>
            </Stack>
            {showcomment && (<>
                <CommentTextField handleCommentSubmit={handleCommentSubmit} inputStr={comment} setInputStr={setcomment} />
                {comments?.map((item) => <CommentCard body={item.body} />)}
            </>)}

        </Box>
    )
}

export default PostCard