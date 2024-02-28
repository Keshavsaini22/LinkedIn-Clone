import { Avatar, Box, Button, Divider, IconButton, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import { RiVideoAddFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";

function Message() {
    return (
        <>
            <Stack direction={'row'}>
                <Stack>
                    <Stack direction={'row'}>
                        <Typography>Messaging</Typography>
                        <Stack direction={'row'}>
                            <IconButton sx={{ width: '40px' }}><BsThreeDots /></IconButton>
                            <IconButton sx={{ width: '40px' }}><SlNote /></IconButton>
                        </Stack>
                    </Stack>
                    <Divider />
                    <Stack direction={'row'}>
                        <Button>Focused</Button>
                        <Button>Other</Button>
                    </Stack>
                    <Stack direction={'row'}>
                        <Avatar sx={{ width: 56, height: 56 }} />
                        <Stack>
                            <Divider />
                            <Stack direction={'row'}>
                                <Typography>Name Here</Typography>
                                <Typography>Feb 28</Typography>
                            </Stack>
                            <Typography>You: Hello</Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack>
                    <Stack direction={'row'}>
                        <Stack >
                            <Typography>Receiver .</Typography>
                            <Typography>This is the title of person</Typography>
                        </Stack>
                        <IconButton sx={{ height: '40px' }}><BsThreeDots /></IconButton>
                        <IconButton sx={{ height: '40px' }}><RiVideoAddFill /></IconButton>
                        <IconButton sx={{ height: '40px' }}><FaRegStar /></IconButton>
                    </Stack>
                    <Box></Box>
                    <Stack direction={'row'}>
                        <TextField
                            id="filled-multiline-static"
                            multiline
                            rows={4}
                            defaultValue="Default Value"
                            variant="filled"
                        />
                        <IconButton sx={{ width: '40px', height: '40px' }}><IoIosArrowUp />
                        </IconButton>
                    </Stack>
                    
                </Stack>
            </Stack>
        </>
    )
}

export default Message