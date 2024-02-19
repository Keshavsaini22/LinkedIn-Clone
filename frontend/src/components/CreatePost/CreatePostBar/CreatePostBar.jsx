import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Popover, Stack, TextField, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';

import './CreatePostBar.css'
import MouseOverPopover from '../../Popover/MouseOverPopover';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
function CreatePostBar() {
    const [open, setOpen] = useState(false);
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

    return (
        <>
            <Box className="createpostbar">
                <Box className="upper">
                    <Box className="image"></Box>
                    <Box className="startpost" component={"button"} type='button' onClick={handleClickOpen} >Start a post</Box>
                </Box>
                <Box className="lower">
                    <Box className="media">
                        <i class="fa-solid fa-image"></i>
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
            <BootstrapDialog 
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                    <div className="modaltitle">
                        <div className="modalleft"></div>
                        <div className="modalright">
                            <Typography>Keshav Saini <i class="fa-solid fa-caret-down"></i></Typography>
                            <Typography>Post to Anyone</Typography>

                        </div>
                    </div>
                </DialogTitle>
                <IconButton
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
                <DialogContent dividers sx={{width:"480px" }} >
                    <TextField value={inputStr}
                        onChange={e => setInputStr(e.target.value)}
                        id="filled-multiline-flexible"
                        multiline
                        minRows={10}
                    />
                    <Box onClick={() => setShowPicker(val => !val)}><i class="fa-regular fa-face-smile" ></i></Box>
                    <Stack direction="row" spacing={2}>
                        <MouseOverPopover icon="fa-solid fa-image" uppertext="Add media" />
                        <MouseOverPopover icon="fa-solid fa-calendar-days" uppertext="Create an event" />
                        <MouseOverPopover icon="fa-solid fa-gift" uppertext="Celebrate an occasion" />
                        <MouseOverPopover icon="fa-solid fa-suitcase" uppertext="Share that you are hiring" />
                    </Stack>

                </DialogContent>
                {showPicker && <EmojiPicker
                    pickerStyle={{ width: '100%' }}
                    onEmojiClick={onEmojiClick} />}
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Post
                    </Button>
                </DialogActions>

            </BootstrapDialog>

        </>


    )
}

export default CreatePostBar