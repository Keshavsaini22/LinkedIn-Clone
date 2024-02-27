import React, { useState } from 'react'
import './ManageMyNetwork.css'
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { BsPeopleFill } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { BsFillCalendarEventFill } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { MdOutlineNewspaper } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

import './ManageMyNetwork.css'
import { Box, List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
function ManageMyNetwork() {
    const [selectedIndex, setSelectedIndex] = React.useState();
    const [showmore, setShowmore] = useState(false)
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);

    };
    return (
        <Stack className='managenetworkcard' width={'300px'} sx={{ backgroundColor: 'white' }}>
            <Box className='toptxt' marginX={'14px'} marginBottom={'5px'} marginTop={'12px'} sx={{ fontSize: '16px' }}> Manage my network</Box>



            <List component="nav" >
                <ListItemButton sx={{ paddingY: '0px', fontSize: '20px' }}
                    selected={selectedIndex === 0}
                    onClick={(event) => handleListItemClick(event, 0)}
                >
                    <ListItemIcon>
                        <BsPeopleFill />
                    </ListItemIcon>
                    <ListItemText primary="Connections" sx={{ display: 'flex', justifyContent: 'space-between', color: '#666666' }} secondary={"55"} />
                </ListItemButton>
                {showmore && <>
                    <ListItemButton sx={{ paddingY: '0px', fontSize: '20px' }}
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <IoIosPerson />
                        </ListItemIcon>
                        <ListItemText primary="Following & Followers" sx={{ display: 'flex', justifyContent: 'space-between', color: '#666666' }} />
                    </ListItemButton>

                    <ListItemButton sx={{ paddingY: '0px', fontSize: '20px' }}
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <IoIosPeople />
                        </ListItemIcon>
                        <ListItemText primary="Group" sx={{ display: 'flex', justifyContent: 'space-between', color: '#666666' }} secondary={"1"} />
                    </ListItemButton>

                    <ListItemButton sx={{ paddingY: '0px', fontSize: '20px' }}
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemIcon>
                            <BsFillCalendarEventFill />
                        </ListItemIcon>
                        <ListItemText primary="Events" sx={{ display: 'flex', justifyContent: 'space-between', color: '#666666' }} secondary={""} />
                    </ListItemButton>

                    <ListItemButton sx={{ paddingY: '0px', fontSize: '20px' }}
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                    >
                        <ListItemIcon>
                            <RiPagesLine />
                        </ListItemIcon>
                        <ListItemText primary="Pages" sx={{ display: 'flex', justifyContent: 'space-between', color: '#666666' }} secondary={"77"} />
                    </ListItemButton>

                    <ListItemButton sx={{ paddingY: '0px', fontSize: '20px' }}
                        selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5)}
                    >
                        <ListItemIcon>
                            <MdOutlineNewspaper />
                        </ListItemIcon>
                        <ListItemText primary="Newsletter" sx={{ display: 'flex', justifyContent: 'space-between', color: '#666666' }} secondary={"2"} />
                    </ListItemButton>

                    <ListItemButton sx={{ paddingY: '0px', fontSize: '20px' }}
                        selected={selectedIndex === 6}
                        onClick={(event) => handleListItemClick(event, 6)}
                    >
                        <ListItemIcon>
                            <FaHashtag />
                        </ListItemIcon>
                        <ListItemText primary="Hashtags" sx={{ display: 'flex', justifyContent: 'space-between', color: '#666666' }} secondary={""} />
                    </ListItemButton>
                </>}
            </List>


            <Box onClick={() => setShowmore(!showmore)} className='showmore' sx={{ color: '#8a8a8a' }}> {!showmore ? <>Show more <MdExpandMore className='icon' /></> : <>Show less <MdOutlineExpandLess className='icon' /></>}
            </Box>
        </Stack>
    )
}

export default ManageMyNetwork