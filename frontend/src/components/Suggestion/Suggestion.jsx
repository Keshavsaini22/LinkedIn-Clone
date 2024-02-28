import React from 'react';
import SuggestionCard from '../SuggestionCard/SuggestionCard';
import './Suggestion.css';
import { Box, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
function Suggestion() {
    const suggestions = useSelector((state) => state.network.suggestions)

    return (
        <Box className='suggestionsection' maxWidth={'800px'} sx={{ backgroundColor: 'white', borderRadius: '10px', border: '1px solid rgb(209, 204, 204)', paddingBottom: '10px' }}>
            <Stack direction={'row'} justifyContent={'space-between'} mx={3} my={2}>
                <Box sx={{ fontSize: '18px' }}>People yu may know</Box>
                <Box className='seeall'>See all</Box>
            </Stack>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                {suggestions?.map((suggestion) => (<SuggestionCard key={suggestion._id} data={suggestion} />))}
            </Box>
        </Box>
    )
}

export default Suggestion