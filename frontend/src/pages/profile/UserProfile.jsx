import React, { useEffect, useState } from 'react'
import LogoImg from '../../assets/images/Linkedin-signuo-logo.png'
import { Box, Button, Stack, TextField } from '@mui/material'
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux'

import './UserProfile.css'
import { updateUserProfile } from '../../features/UserProfile/UserProfile.action';
import { useNavigate } from 'react-router-dom';
import { toggleSuccess } from '../../features/UserProfile/UserProfile.slice';

function UserProfile() {
    const data = localStorage.getItem('user')
    const userData = JSON.parse(data)
    // console.log(userData)
    const dispatch = useDispatch();
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});
    const [name, setname] = useState(userData?.name);
    const [number, setnumber] = useState(userData?.phone);
    const [city, setcity] = useState(userData?.address?.city);
    const [website, setwebsite] = useState(userData?.website);
    const [industry, setindustry] = useState(userData?.industry);
    const [languages, setlanguages] = useState(userData?.languages);
    const [title, settitle] = useState(userData?.title);
    const [desc, setdesc] = useState(userData?.desc);
    const [image, setimage] = useState(userData?.image);
    const success = useSelector((state) => state.user.success)
    const error = useSelector((state) => state.user.error)

    const navigate = useNavigate();

    useEffect(() => {
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
            .then((response) => response.json())
            .then((data) => {
                setCountries(data.countries);
                setSelectedCountry(data.userSelectValue);
            });
    }, []);

    useEffect(() => {
        if (success) {
            dispatch(toggleSuccess())
            navigate('/home')
        }
    }, [success])
    const handleProfileUpdate = (e) => {
        e.preventDefault();
        console.log(name, number, city, website, industry, languages, title, desc, image, selectedCountry.label)
        console.log('image: ', image);
        // if (!image)
        //     alert("Provide userProfile")
        const formdata = new FormData();
        formdata.append('name', name);
        formdata.append('phone', number)
        formdata.append('city', city)
        formdata.append('country', selectedCountry.label)
        formdata.append('industry', industry)
        formdata.append('website', website)
        formdata.append('title', title)
        formdata.append('languages', languages)
        formdata.append('desc', desc)
        formdata.append('image', image)
        console.log('formdata: ', formdata);
        dispatch(updateUserProfile(formdata))

    }
    return (
        <Box className="profilepage">
            <Box className="container">
                <Box className="logo">
                    <img src={LogoImg} alt="logo" />
                </Box>
                <div className="headline">Make the most of your professional life</div>
                <Stack className='stack' gap={2} alignItems={'center'} component={"form"} onSubmit={handleProfileUpdate}>
                    <Box className='name'>
                        <p>Your name</p>
                        <TextField type="text" value={name} onChange={(e) => setname(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='number'>
                        <p>Your number</p>
                        <TextField type="number" value={number} onChange={(e) => setnumber(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='country'>
                        <p>Your country</p>
                        <Select className='selectcountry'
                            options={countries} required
                            value={selectedCountry}
                            onChange={(selectedOption) => setSelectedCountry(selectedOption)}
                        />
                    </Box>
                    <Box className='city'>
                        <p>Your city</p>
                        <TextField type="text" value={city} onChange={(e) => setcity(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='industry'>
                        <p>Your industry</p>
                        <TextField type="text" value={industry} onChange={(e) => setindustry(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='website'>
                        <p>Your website</p>
                        <TextField type="text" value={website} onChange={(e) => setwebsite(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='languages'>
                        <p>Languages you know</p>
                        <TextField type="text" value={languages} onChange={(e) => setlanguages(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='title'>
                        <p>Your designation</p>
                        <TextField type="text" value={title} onChange={(e) => settitle(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='desc'>
                        <p>About</p>
                        <TextField type="text" multiline
                            maxRows={5} value={desc} onChange={(e) => setdesc(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className="image" component={'label'}>
                        Select profile Image
                        <input onChange={(e) => setimage(e.target.files?.[0])} type="file" name="image" accept="image/png, image/jpg, image/jpeg"
                            hidden />
                    </Box>{image && <Box>Image added</Box>}
                    <Box className='submitbtn' component={"button"} type='submit'>Continue</Box>
                    {error && <h3>{error}</h3>}
                </Stack>
            </Box>
        </Box>
    )
}

export default UserProfile