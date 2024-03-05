import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Avatar } from '@mui/material';


export default function MessageTab({ connectedUser, setConnectedUser, room, setRoom, item }) {

    const userid = localStorage.getItem('userid')
    { console.log("lllllllllllllllllll", item) }

    return (
        <Box sx={{ width: '100%' }}>

            <Box key={item._id}
                onClick={() => {
                    console.log("first")
                    userid !== item.sender._id ? setConnectedUser(item.sender) : setConnectedUser(item.receiver)
                }} sx={{ height: "92px", width: "100%", pl: "12px", boxSizing: "border-box", display: "flex", alignItems: "center", '&:hover': { cursor: 'pointer' } }}>
                <Avatar sx={{ width: "56px", height: "56px" }} />
                {console.log("dsafsd", item)}
                <Box sx={{ pt: '12px', pb: "12px", pl: "8px", pr: "8px", width: "100%", height: "100%", boxSizing: "border-box" }}>
                    <Box sx={{ display: 'flex', justifyContent: "space-between" }}>
                        <Box sx={{ lineHeight: "24px", fontSize: "16px", fontWeight: "400", fontStyle: "normal", color: "rgba(0,0,0,0.9)" }}>{userid !== item.sender._id ? item.sender.name : item.receiver.name}</Box>
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