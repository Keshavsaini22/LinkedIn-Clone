import React from 'react'
import './ManageMyNetwork.css'
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { BsPeopleFill } from "react-icons/bs";

import { Box, List, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material'
function ManageMyNetwork() {
    const [selectedIndex, setSelectedIndex] = React.useState();

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);

    };
    return (
        <Stack width={'300px'} sx={{ backgroundColor: 'white' }}>
            <Box> Manage my network</Box>
            <ListItemButton
                selected={selectedIndex === 0}
                onClick={(event) => handleListItemClick(event, 0)}
            >
                <ListItemIcon>
                <BsPeopleFill />

                </ListItemIcon>
                <ListItemText primary="Connections" sx={{ display: 'flex', justifyContent: 'space-between' }} secondary={"55"}/>

            </ListItemButton>
            <List component="nav" >
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" sx={{ display: 'flex', justifyContent: 'space-between' }} secondary={<InboxIcon />} />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 2}
                    onClick={(event) => handleListItemClick(event, 2)}
                >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" sx={{ display: 'flex', justifyContent: 'space-between' }} secondary={<InboxIcon />} />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 3}
                    onClick={(event) => handleListItemClick(event, 3)}
                >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" sx={{ display: 'flex', justifyContent: 'space-between' }} secondary={<InboxIcon />} />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 4}
                    onClick={(event) => handleListItemClick(event, 4)}
                >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" sx={{ display: 'flex', justifyContent: 'space-between' }} secondary={<InboxIcon />} />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 5}
                    onClick={(event) => handleListItemClick(event, 5)}
                >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" sx={{ display: 'flex', justifyContent: 'space-between' }} secondary={<InboxIcon />} />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" sx={{ display: 'flex', justifyContent: 'space-between' }} secondary={<InboxIcon />} />
                </ListItemButton>
                <ListItemButton
                    selected={selectedIndex === 1}
                    onClick={(event) => handleListItemClick(event, 1)}
                >
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" sx={{ display: 'flex', justifyContent: 'space-between' }} secondary={<InboxIcon />} />
                </ListItemButton>
            </List>

        </Stack>
    )
}

export default ManageMyNetwork