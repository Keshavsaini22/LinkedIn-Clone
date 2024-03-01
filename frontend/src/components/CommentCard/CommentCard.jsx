import React, { useEffect, useState } from 'react'
import './CommentCard.css'
import { Avatar, Stack, Typography, Box, Button, Divider } from '@mui/material'
import { red } from '@mui/material/colors'
import { BsDot } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { createLikeComment, deleteLikesComment, getLikesComment } from '../../features/Likes/Likes.action'

function CommentCard({ body, user, id }) {
    // //console.log('body: ', id);

    const dispatch = useDispatch();
    const likesData = useSelector((state) => state.like.commentlikeData)
    const userId = localStorage.getItem('userid')
    const [reaction, setReaction] = useState('no')
    function isLikedByUser(likesData, userId) {
        return likesData?.find((item) => item.userId === userId)
    }
    const [rxnId, setRxn] = useState();
    const getLiks = async () => {
        const res = await dispatch(getLikesComment(id));
        if (res) {
            const reaction = isLikedByUser(res.payload?.info, userId)
            // //console.log('reaction: ', reaction);
            if (reaction)
                setReaction('yes')
            setRxn(reaction?._id)   //This lines are for loggedin user liked post
        }
    }
    useEffect(() => {
        getLiks()
        // dispatch(getLikes(postId)).then((res)=>{
        //     const reaction=isLikedByUser(res.payload.info,userId)
        //     setReaction(reaction?.type)
        // })
        // //console.log("first-------------------------------")

    }, [reaction])

    const handleLikeComment = () => {
        // //console.log("first")
        if (reaction === 'yes') {
            dispatch(deleteLikesComment(rxnId));
            setReaction(null);
            return;
            // dispatch(getLikesComment(id));
        }
        // //console.log('setReaction: ', reaction);
        const data = {}
        data.body = "satisfaction"
        data.id = id
        dispatch(createLikeComment(data))
        setReaction('yes')
    }
    return (
        <Stack className='commentcard' direction={'row'} gap={1} margin={'10px'}>
            <Avatar sx={{ bgcolor: red[500], width: 40, height: 40 }} aria-label="recipe">
                R
            </Avatar>
            <Stack spacing={1}>
                <Box className="text">
                    <Stack direction="row" justifyContent={'space-between'} spacing={0}>
                        <Stack direction="row" spacing={0}><Typography className='username' sx={{ fontSize: '14px' }}>{user.name}</Typography>
                            <BsDot className='dot' />
                            <Typography className='numtext' sx={{ fontSize: '14px' }}>2nd</Typography>
                        </Stack>
                        <Stack direction="row" spacing={1}>
                            <Typography sx={{ fontSize: '14px' }} className='numtext'>2h</Typography>
                            <Box sx={{ color: '#666666' }}><i class="fa-solid fa-ellipsis"></i></Box>
                        </Stack>
                    </Stack>
                    <Typography className='degination'>{user.title}</Typography>

                    <Typography sx={{ wordBreak: 'break-word', fontSize: '13px', marginTop: '12px' }}>
                        {body}                    </Typography>
                </Box>
                <Stack direction={'row'} gap={1}>
                    <Box component={'button'} onClick={handleLikeComment} className='likebtn' sx={{ fontSize: '12px', '&:hover': { backgroundColor: '#f2f2f2' }, border: 'none', backgroundColor: 'white', color: Boolean(rxnId) ? 'blue' : '#666666' }}>Like {likesData[id]?.length}</Box>
                    <Divider orientation="vertical" />
                    <Box className='cmtbtn' sx={{ fontSize: '12px' }}>Reply</Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default CommentCard