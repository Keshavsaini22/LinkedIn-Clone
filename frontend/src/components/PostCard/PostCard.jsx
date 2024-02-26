import { Avatar, Box, Button, Card, CardHeader, ImageList, ImageListItem, Stack, TextField, Typography } from '@mui/material'
import { BsDot } from "react-icons/bs";
import TextImage from '../../assets/images/Linkedin-signuo-logo.png'
import { Carousel } from 'react-responsive-carousel';
import { red } from '@mui/material/colors'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './PostCard.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentTextField from '../CommentTextField/CommentTextField';
import CommentCard from '../CommentCard/CommentCard';
import { createComment, getComments } from '../../features/Comments/Comment.action';
import { ReactionBarSelector } from '@charkour/react-reactions';
import { createLike, deleteLikes, getLikes } from '../../features/Likes/Likes.action';
function PostCard({ body, title, images, postId }) {
    const [seemore, setSeeemore] = useState(true);
    const [showcomment, setShowComment] = useState(false);
    const [comment, setcomment] = useState(null);
    // const [like, setLike] = useState(Boolean(rection[userId]));
    const [like, setLike] = useState(null);
    const dispatch = useDispatch();
    const error = useSelector((state) => state.comment.error)
    const success = useSelector((state) => state.comment.success)
    const comments = useSelector((state) => state.comment.commentsData)
    const likesData = useSelector((state) => state.like.likesData)

    const userId = localStorage.getItem('userid')
    function isLikedByUser(likesData, userId) {
        return likesData?.find((item) => item.userId === userId)
    }

    const [reaction, setReaction] = useState("satisfaction")
    // const [getUpdatedCom,]
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        const data = {
            body: comment,
            postId: postId
        }
        dispatch(createComment(data))
        if (error) {
            alert(error)
        }
        setcomment("")
    }
    const [rxnId, setRxn] = useState();
    const getLiks = async () => {
        const res = await dispatch(getLikes(postId));
        if (res) {
            const reaction = isLikedByUser(res.payload?.info, userId)
            setReaction(reaction?.type || 'Like')
            setRxn(reaction?._id)   //This lines are for loggedin user liked post
        }
    }
    useEffect(() => {
        getLiks()
        // dispatch(getLikes(postId)).then((res)=>{
        //     const reaction=isLikedByUser(res.payload.info,userId)
        //     setReaction(reaction?.type)
        // })
    }, [reaction])

    // useEffect(() => {
    //     const reaction=isLikedByUser(likesData[postId],userId)
    //     console.log(reaction,"dddddd");
    //     setReaction(reaction?.type?? "abd")
    //     // console.log("like", like)
    // }, [likesData[postId]])



    const handleCommitbuttonClick = () => {
        setShowComment(!showcomment)
        dispatch(getComments(postId))
    }
    const postLike = (type) => {
        console.log(type, reaction, type === reaction)
        console.log('rxnId: ', rxnId);
        if (type === reaction) {
            console.log("reaction==type")
            dispatch(deleteLikes(rxnId))
            dispatch(getLikes(postId))
            setReaction('Like')
        }

        else {
            const data = {}
            data.body = type
            data.postId = postId
            dispatch(createLike(data))
            dispatch(getLikes(postId))
        }
    }
    const handleLikebuttonClick = () => {
        postLike("satisfaction")
        setReaction("satisfaction")
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
                    <Typography sx={{ fontSize: '12px', color: '#807c7c' }}><i class="fa-regular fa-thumbs-up"></i> {likesData[postId]?.length}</Typography>
                    <Typography sx={{ fontSize: '12px', color: '#807c7c' }}>{comments[postId]?.length} comments</Typography>
                </Box>
            </Box>
            <Box sx={{ height: '1px', backgroundColor: 'rgb(209, 204, 204)', m: 1 }}></Box>

            <Stack className='lower-btn' direction="row" sx={{ justifyContent: 'space-around', marginBottom: '6px' }}>
                <Box onClick={handleLikebuttonClick} className='single-btn like-btn'
                    sx={{
                        color: Boolean(likesData[postId]?.find((item) => item.userId === userId)) ? '#0374b3' : '#807c7c', maxWidth: '60px', fontWeight: '600', fontSize: '14px',
                        display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center'
                    }}>
                    <ThumbUpIcon /> {reaction === "satisfaction" ? "Like" : reaction}
                </Box>
                <Box className='reactionbar'><ReactionBarSelector onSelect={(label) => {
                    setReaction(label)
                    postLike(label)
                }} />
                </Box>
                {/* {likesData[postId]?.map((item) => {
                    if (item.userId === userId) return item.type
                })} */}
                <Box onClick={handleCommitbuttonClick} className='single-btn' sx={{ color: '#807c7c', fontWeight: '600', fontSize: '14px', display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}><i class="fa-regular fa-comment-dots"></i> Comment</Box>
                <Box className='single-btn' sx={{ color: '#807c7c', fontWeight: '600', fontSize: '14px', display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}><i class="fa-solid fa-repeat"></i> Repost</Box>
                <Box className='single-btn' sx={{ color: '#807c7c', fontWeight: '600', fontSize: '14px', display: 'flex', gap: '5px', alignItems: 'center', justifyContent: 'center' }}><i class="fa-solid fa-paper-plane"></i> Send</Box>

            </Stack>
            {showcomment && (<>
                <CommentTextField handleCommentSubmit={handleCommentSubmit} inputStr={comment} setInputStr={setcomment} />
                {comments[postId]?.map((item) => <CommentCard body={item.body} />)}
            </>)}

        </Box>
    )
}

export default PostCard