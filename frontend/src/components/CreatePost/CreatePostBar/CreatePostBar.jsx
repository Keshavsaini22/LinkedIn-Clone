import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, Popover, Stack, TextField, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import './CreatePostBar.css'
import MouseOverPopover from '../../Popover/MouseOverPopover';
import { useDispatch, useSelector } from 'react-redux'
import { createPost, getPosts } from '../../../features/Posts/Post.action';
function CreatePostBar() {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [images, setImgs] = useState(null)
    const [inputStr, setInputStr] = useState('');
    const [showPicker, setShowPicker] = useState(false);
    const handleClickOpen = () => {
        console.log("first")
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const onEmojiClick = (event) => {
        console.log(event)
        setInputStr(prevInput => prevInput + event.emoji);
        setShowPicker(false);
    };
    const dispatch = useDispatch();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <Box className="createpostbar" >
                <Box className="upper">
                    <Box className="image"></Box>
                    <Box className="startpost" component={"button"} type='button' onClick={handleClickOpen} >Start a post</Box>
                </Box>
                <Box className="lower">
                    <Box className="media">
                        <i color='#378fe9' class="fa-solid fa-image"></i>
                        <span>Media</span>
                    </Box>
                    <Box className="job">
                        <i class="fa-solid fa-briefcase"></i>
                        <span>Job</span>
                    </Box>
                    <Box className="article">
                        <i class="fa-regular fa-newspaper"></i>
                        <span>Write a article</span>
                    </Box>
                </Box>
            </Box>
            <Dialog PaperProps={{
                component: 'form', onSubmit: (e) => {
                    e.preventDefault();
                    if (!images) {
                        alert("Cant post without Image")
                    }
                    const formdata = new FormData();
                    formdata.append('title', title);
                    formdata.append('body', inputStr);
                    for (let i = 0; i < images?.length; i++) {
                        formdata.append('images', images[i])
                    }
                    dispatch(createPost(formdata));
                    // dispatch(getPosts(9))
                    handleClose()
                    setTitle('')
                    setInputStr('')
                    setImgs(null)
                }
            }}
                fullScreen={fullScreen} fullWidth
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title" className='dialogtop'>
                    <Box className="modaltitlee">
                        <Box className="modalleft"></Box>
                        <Box className="modalright">
                            <Typography className='username'>Keshav Saini <i class="fa-solid fa-caret-down"></i></Typography>
                            <Typography className='posttoanyone'>Post to Anyone</Typography>
                        </Box>
                    </Box>
                    <IconButton className='closeicon'
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <i class="fa-solid fa-xmark"></i>
                    </IconButton>
                </DialogTitle>

                <DialogContent className='dialogbody' >
                    <Stack spacing={3}>
                        <TextField value={title} name='title' required onChange={e => setTitle(e.target.value)}
                            fullWidth placeholder='Title......' variant="standard" InputProps={{ style: { fontSize: "20px" }, disableUnderline: true }} />
                        <TextField required name='body' value={inputStr} fullWidth variant="standard" InputProps={{ style: { fontSize: "20px" }, disableUnderline: true }}
                            onChange={e => setInputStr(e.target.value)}
                            id="filled-multiline-flexible"
                            multiline
                            maxRows={10} minRows={10} placeholder='What do you want to talk about?'
                        />
                        <Box onClick={() => setShowPicker(val => !val)}><i class="fa-regular fa-face-smile" ></i></Box>
                        <Stack direction="row" spacing={4}>
                            <Button sx={{ paddingRight: '40px' }} component="label"><MouseOverPopover className="media-icons" icon="fa-solid fa-image" uppertext="Add media" />
                                <input onChange={(e) => (setImgs(e.target.files))}
                                    type="file" multiple name="images" accept="image/png, image/jpg, image/jpeg"
                                    hidden />
                            </Button> {images && <Box>Image added</Box>}
                            {/* <MouseOverPopover className="media-icons" icon="fa-solid fa-image" uppertext="Add media" />
                            <MouseOverPopover className="media-icons" icon="fa-solid fa-calendar-days" uppertext="Create an event" />
                            <MouseOverPopover className="media-icons" icon="fa-solid fa-gift" uppertext="Celebrate an occasion" />
                            <MouseOverPopover className="media-icons" icon="fa-solid fa-suitcase" uppertext="Share that you are hiring" /> */}
                        </Stack>
                    </Stack>

                    <Divider sx={{ p: 1 }} />
                </DialogContent>
                {showPicker && <EmojiPicker
                    pickerStyle={{ width: '100%' }}
                    onEmojiClick={onEmojiClick} />}
                <DialogActions >
                    <Stack direction="row" spacing={2} sx={{ paddingRight: 2, paddingBottom: 2 }} className='dialogbottom'>
                        <Box className="clock"><i class="fa-regular fa-clock"></i></Box>
                        <Box className="post" component={"button"} type='submit'>Post</Box>
                    </Stack>
                </DialogActions>

            </Dialog>

        </>


    )
}

export default CreatePostBar