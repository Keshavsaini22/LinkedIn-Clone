import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';
import { useDispatch } from 'react-redux';
import { toggleroom } from '../../features/Room/room.slice';
import socket from "../../utils/socket";
import { getMessage } from '../../features/Messages/Message.action';


export default function MessageTab({ room, setRoom, item }) {
    const dispatch = useDispatch();
    return (
        <Box sx={{ width: '100%' }}>
            <Box
                onClick={() => {
                    console.log("first")
                    socket.emit("join room", item._id);
                    dispatch(toggleroom(item))
                    dispatch(getMessage(item._id))
                    // console.log(item._id)
                    // console.log('user: ', user);
                }} sx={{ height: "92px", width: "100%", pl: "12px", boxSizing: "border-box", display: "flex", alignItems: "center", '&:hover': { cursor: 'pointer' } }}>
                <Avatar sx={{ width: "56px", height: "56px" }} />
                <Box sx={{ pt: '12px', pb: "12px", pl: "8px", pr: "8px", width: "100%", height: "100%", boxSizing: "border-box" }}>
                    <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                        <Box sx={{ lineHeight: "24px", fontSize: "16px", fontWeight: "400", fontStyle: "normal", color: "rgba(0,0,0,0.9)" }}>{item.participants[0].name}</Box>
                        <Box sx={{ fontSize: "15px" }}>Date</Box>
                    </Box>
                    <Box sx={{ lineHeight: "20px", fontSize: "14px", fontWeight: "400", fontStyle: "normal", color: "rgba(0,0,0,0.6)" }}>
                        Last Message...
                    </Box>
                </Box>
            </Box>


        </Box>
    );
}