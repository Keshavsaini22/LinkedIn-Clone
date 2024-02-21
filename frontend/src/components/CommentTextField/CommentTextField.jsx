import { Avatar, Box, Button, IconButton, Stack, TextField } from '@mui/material';
import { red } from '@mui/material/colors';
import EmojiPicker from 'emoji-picker-react';
import React, { useState } from 'react'
import './CommentTextField.css';
import { useSelector } from 'react-redux';
function CommentTextField({ handleCommentSubmit, inputStr, setInputStr }) {
    const isLoading = useSelector((state) => state.comment.isLoading)
    const [showPicker, setShowPicker] = useState(false);
    const onEmojiClick = (event) => {
        console.log(event)
        setInputStr(prevInput => prevInput + event.emoji);
        setShowPicker(false);
    };
    return (
        <>
            <Stack direction='row' gap={1} margin={'10px'}>
                <Avatar sx={{ bgcolor: red[500], width: 40, height: 40 }} aria-label="recipe">
                    R
                </Avatar>
                <Stack width='100%' gap='10px' component={'form'} onSubmit={handleCommentSubmit}>
                    <TextField placeholder='Add a comment...' value={inputStr} onChange={e => setInputStr(e.target.value)} name='comment' size="small" fullWidth InputProps={{
                        sx: { borderRadius: '20px', fontSize: '14px', height: '40px' }, endAdornment: <Stack direction={'row'}>
                            <IconButton sx={{ fontSize: '20px', color: '#666666' }} onClick={() => setShowPicker(val => !val)}><i class="fa-regular fa-face-smile" ></i></IconButton >
                            <IconButton sx={{ fontSize: '20px', color: '#666666' }}><i class="fa-solid fa-image" ></i></IconButton >
                        </Stack>
                    }} sx={{ height: '38px' }}></TextField>
                    {inputStr && (<Box className="post" component={"button"} type='submit'>{isLoading ? <>LOADING....</> : <>Post</>}</Box>
                    )}
                </Stack>
            </Stack>
            {showPicker && <EmojiPicker
                pickerStyle={{ width: '100%' }}
                onEmojiClick={onEmojiClick} />}
        </>
    )
}

export default CommentTextField