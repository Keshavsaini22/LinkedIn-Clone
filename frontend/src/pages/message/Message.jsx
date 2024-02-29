import { AppBar, Avatar, Box, Button, Divider, IconButton, Stack, Tab, Tabs, TextField, Typography } from '@mui/material'
import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import { SlNote } from "react-icons/sl";
import { RiVideoAddFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { useTheme } from '@emotion/react';

import PropTypes from 'prop-types';




function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
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
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}
function Message() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <>
            <Stack direction={'row'} sx={{ width: '800px', backgroundColor: 'white', margin: 'auto', marginTop: '22px', borderRadius: '10px', border: '1px solid rgb(209, 204, 204)' }}>
                <Stack sx={{ width: '280px' }}>
                    <Stack direction={'row'} sx={{ height: '47px' }} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography sx={{ fontSize: '16px', padding: '0px 12px', fontWeight: '550', color: '#535252' }}>Messaging</Typography>
                        <Stack direction={'row'}>
                            <IconButton sx={{ width: '40px', color: '#535252' }}><BsThreeDots /></IconButton>
                            <IconButton sx={{ width: '40px', fontSize: '20px' }}><SlNote /></IconButton>
                        </Stack>
                    </Stack>
                    <Divider width='100%'/>

                    <Box sx={{}}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                        >
                            <Tab label="Item One" {...a11yProps(0)} />
                            <Tab label="Item Two" {...a11yProps(1)} />
                        </Tabs>

                        <TabPanel value={value} index={0} dir={theme.direction}>
                            Item One
                        </TabPanel>
                        <TabPanel value={'ew5ytety'} index={1} dir={theme.direction}>
                            Item Two
                        </TabPanel>


                    </Box>

                </Stack>
                <Stack sx={{ width: '520px' }}>
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