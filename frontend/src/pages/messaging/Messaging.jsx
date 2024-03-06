import { Box, Button, Divider, FormControl, IconButton, InputAdornment, InputBase, OutlinedInput, Stack, Tab, Tabs, Typography } from "@mui/material"
import React, { useEffect, useRef, useState } from "react";
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import MessageTab from "../../components/MessageTab/MessageTab";
import TuneIcon from '@mui/icons-material/Tune';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import StarBorderRoundedIcon from '@mui/icons-material/StarBorderRounded';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import GifIcon from '@mui/icons-material/Gif';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import { useDispatch, useSelector } from 'react-redux'
import { getRoom } from "../../features/Room/room.action";
import { createMessage, getMessage } from "../../features/Messages/Message.action";
import socket from "../../utils/socket";
import { addMessage } from "../../features/Messages/Message.slice";
import MessageCard from "../../components/MessageCard/MessageCard";

// const ENDPOINT = 'ws://localhost:8080/'
function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Messaging = () => {
    const [value1, setValue] = useState(0);
    const myId = localStorage.getItem('userid')
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const confirm = useSelector((state) => state.room.allroom)
    const seconduser = useSelector((state) => state.room.room)
    const allmessages = useSelector((state) => state.message.allmessages)
    const dispatchRef = useRef(false)
    const dispatch = useDispatch();
    const [message, setMessage] = useState();
    const messageRef = useRef(null);
    const scrollLast = useRef(null);
    useEffect(() => {
        dispatch(getRoom(1))
    }, [])

    useEffect(() => {

        // socket.on('connect', () => {
        // })

        socket.emit('connecttt', () => {
            alert('Connected to Socket.IO server')
        })

        // if (!dispatchRef.current) {
        //     dispatchRef.current = true
        socket.on('message', (data) => {
            console.log('data: ', data);
            dispatch(addMessage(data))
        })
        // }

        return () => {
            // socket.disconnect()
            socket.off('connecttt');
            socket.off('message');
            // socket.disconnect();
        };
    }, [])

    useEffect(() => {
        scrollLast.current.scrollIntoView({ behavior: "smooth" });
    }, [allmessages])
    // useEffect(() => {
    //     if (seconduser) {
    //         dispatch(getMessage(seconduser?._id))
    //     }
    // }, [dispatch,seconduser])

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        // console.log('message: ', messageRef.current.value);
        socket.emit('newmessage', { content: messageRef.current.value, roomid: seconduser?._id, sender: myId })
        messageRef.current.value = null

    }
    const [room, setRoom] = useState();
    return (
        <Box sx={{ backgroundColor: "#F4F2EE", display: "flex", justifyContent: "center" }} style={{ minHeight: 'calc(100vh - 52px' }}>
            <Box sx={{ pt: "20px" }}>
                <Box sx={{ width: "1128px", display: "flex", gap: "2.4rem" }}>
                    <Box sx={{ width: "782px", backgroundColor: "white", display: "flex" }}>
                        <Box sx={{ width: "313px", border: "1px solid #e8e8e8" }}>
                            <Box sx={{ height: "48px", width: "100%", border: "1px solid #e8e8e8", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <Typography sx={{ pl: "16px", pr: "16px" }}>Messaging</Typography>
                                <Box sx={{ mr: "8px", display: "flex" }}>
                                    <IconButton sx={{ width: "40px" }}><MoreHorizOutlinedIcon /></IconButton>
                                    <IconButton sx={{ width: "40px" }}><ModeEditOutlineOutlinedIcon /></IconButton>
                                </Box>

                            </Box>
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputBase
                                    startAdornment={<SearchIcon sx={{ color: 'black', paddingLeft: '10px', paddingRight: '8px' }} />}
                                    endAdornment={<TuneIcon sx={{ color: 'black', paddingLeft: '10px', paddingRight: '8px' }} />}
                                    placeholder="Search messages"
                                    sx={{
                                        border: '1px Solid #EDF2F9',
                                        borderRadius: '4px',
                                        width: '100%',
                                        fontSize: '14px',
                                        fontWeight: '400',
                                        color: 'black',
                                        backgroundColor: '#EDF2F9',
                                        "&:hover": {
                                            border: '1px solid black',
                                        },
                                        "&:focus": {
                                            border: '1px solid black',
                                        },
                                    }}
                                />
                            </FormControl>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value1} onChange={handleChange} variant="fullWidth" aria-label="basic tabs example" textColor="green">
                                    <Tab label="Focused" {...a11yProps(0)} />
                                    <Tab label="Other" {...a11yProps(1)} />
                                </Tabs>
                            </Box>
                            {confirm?.map((item) => (
                                <MessageTab key={item._id} room={room} setRoom={setRoom} item={item} />
                            ))}
                        </Box>


                        <Box sx={{ width: "100%", minHeight: "calc(100vh - 74px)", border: "1px solid #e8e8e8" }}>
                            <Box component={'form'} sx={{ width: "100%", pl: "12px", pr: "12px", height: "41px", outline: "1px solid #e8e8e8", boxSizing: "border-box" }}>

                                <Stack className='user-name'
                                    flexDirection={'row'}
                                    justifyContent={'space-between'}
                                    alignItems={'center'}
                                    sx={{ width: '100%', boxSizing: 'border-box', padding: '8px' }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            fontWeight: '500',
                                        }}
                                    >
                                        {seconduser?.participants[0].name}
                                        {/* {connectedUser?.name || "Name"} */}
                                    </Typography>

                                    <Stack flexDirection={'row'} gap={2}>
                                        <MoreHorizIcon />
                                        <VideoCallIcon />
                                        <StarBorderRoundedIcon />
                                    </Stack>

                                </Stack>
                                <Divider />
                                <Stack sx={{ height: '55vh', overflow: 'scroll', overflowX: 'hidden' }}>
                                    {/* {seconduser?.participants[0].name} */}
                                    {allmessages && allmessages?.map((item) => (<MessageCard key={item._id} data={item} person={seconduser?.participants[0]} />))}
                                    {/* {seconduser?.name} */}
                                    <div ref={scrollLast}></div>
                                </Stack>
                                <Divider />
                                <Stack className='textField' sx={{ boxSizing: 'border-box', padding: '10px', height: '121px' }}>
                                    <InputBase
                                        // value={message}
                                        // ref={messageRef}
                                        inputRef={messageRef}
                                        // onChange={(e) => {
                                        //     setMessage(e.target.value)
                                        //     // console.log('messageRef.current: ', messageRef.current);
                                        //     // messageRef.current.value=e.target.value
                                        // }}
                                        multiline
                                        // inputProps={{itemRef}}
                                        minRows={4}
                                        placeholder='Write a message...'
                                        sx={{
                                            backgroundColor: '#f5f3ee',
                                            borderRadius: '5px',
                                            boxSizing: 'border-box',
                                            padding: '30px 10px 10px 10px',
                                            fontSize: '14px',
                                            height: '100%',
                                            overflow: 'scroll',
                                            overflowX: 'hidden',
                                            WebkitOverflowScrolling: 'auto'
                                        }}
                                    />

                                </Stack>
                                <Divider />

                                <Stack
                                    flexDirection={'row'}
                                    sx={{ height: '98px', boxSizing: 'border-box', padding: '20px' }}
                                    gap={2}
                                    alignItems={'center'}
                                    justifyContent={'space-between'}
                                >
                                    <Stack flexDirection={'row'} gap={2}>
                                        <InsertPhotoIcon />
                                        <AttachFileIcon sx={{ rotate: '50deg' }} />
                                        <GifIcon />
                                        <SentimentSatisfiedIcon />
                                    </Stack>
                                    <Stack flexDirection={'row'} alignItems={'center'} gap={2}>
                                        <Button variant='contained' type="submit" onClick={handleMessageSubmit}
                                            sx={{ textTransform: 'none', borderRadius: '50px', padding: '0' }}>
                                            Send
                                        </Button>
                                        <MoreHorizIcon />
                                    </Stack>
                                </Stack>



                            </Box>
                        </Box>
                    </Box>
                    {/* <Box sx={{ width: "322px", minHeight: "calc(100vh - 74px)", backgroundColor: "white" }}>

                    </Box> */}
                </Box>
            </Box>
        </Box>
    )
}

export default Messaging
