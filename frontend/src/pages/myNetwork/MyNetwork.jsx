import { Box, Stack } from '@mui/material'
import React, { useEffect } from 'react'
import ManageMyNetwork from '../../components/ManageMyNetwork/ManageMyNetwork'
import Invitations from '../../components/Invitations/Invitations'
import './MyNetwork.css'
import Suggestion from '../../components/Suggestion/Suggestion'
import { useDispatch, useSelector } from 'react-redux'
import { getFriends, getSuggestions } from '../../features/Network/Network.action'

function MyNetwork() {
    const dispatch = useDispatch();
    const confirm = useSelector((state) => state.network?.friends?.confirm)

    useEffect(()=>{
        console.log("useeffect")
        dispatch(getSuggestions(1));
        dispatch(getFriends(1));
    },[])
    return (
        <Stack justifyContent={"center"} sx={{ marginTop: '30px', margin: '30px 30px' }} direction={'row'} gap={3}>
            <ManageMyNetwork />
            <Stack gap={3}>
                <Invitations />
                <Suggestion />
            </Stack>
        </Stack>
    )
}

export default MyNetwork