import React, { useEffect, useState } from 'react'
import LogoImg from '../../assets/images/Linkedin-signuo-logo.png'
import { Box, Button, Stack, TextField } from '@mui/material'
import Select from "react-select";
import { useDispatch, useSelector } from 'react-redux'

import './UserProfile.css'
import { updateUserProfile } from '../../features/UserProfile/UserProfile.action';
import { useNavigate } from 'react-router-dom';
function UserProfile() {
    const dispatch = useDispatch();
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});
    const [name, setname] = useState();
    const [number, setnumber] = useState();
    const [city, setcity] = useState();
    const [website, setwebsite] = useState();
    const [industry, setindustry] = useState();
    const [languages, setlanguages] = useState();
    const [title, settitle] = useState();
    const [desc, setdesc] = useState();
    const [image, setimage] = useState();
    const success = useSelector((state) => state.user.success)
    const navigate = useNavigate();

    useEffect(() => {
        fetch(
            "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
        )
            .then((response) => response.json())
            .then((data) => {
                console.log("data", data)
                setCountries(data.countries);
                setSelectedCountry(data.userSelectValue);
            });
    }, []);
    useEffect(() => {
        if (success) {
            navigate('/home')
        }
    }, [success])
    const handleProfileUpdate = (e) => {
        e.preventDefault();
        console.log(name, number, city, website, industry, languages, title, desc, image, selectedCountry.label)
        if (!image)
            alert("Provide userProfile")
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
        dispatch(updateUserProfile(formdata))
    }
    return (
        <div className="profilepage">
            <div className="container">
                <div className="logo">
                    <img src={LogoImg} alt="logo" />
                </div>
                <div className="headline">Make the most of your professional life</div>
                <Stack className='stack' gap={2} alignItems={'center'} component={"form"} onSubmit={handleProfileUpdate}>
                    <Box className='name'>
                        <p>Your name</p>
                        <TextField type="text" value={name} required onChange={(e) => setname(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='number'>
                        <p>Your number</p>
                        <TextField type="number" required value={number} onChange={(e) => setnumber(e.target.value)} sx={{ width: '350px' }} size="small" />
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
                        <TextField type="text" value={city} onChange={(e) => setcity(e.target.value)} required sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='industry'>
                        <p>Your industry</p>
                        <TextField type="text" required value={industry} onChange={(e) => setindustry(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='website'>
                        <p>Your website</p>
                        <TextField type="text" required value={website} onChange={(e) => setwebsite(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='languages'>
                        <p>Languages you know</p>
                        <TextField type="text" required value={languages} onChange={(e) => setlanguages(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='title'>
                        <p>Your designation</p>
                        <TextField type="text" required value={title} onChange={(e) => settitle(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className='desc'>
                        <p>About</p>
                        <TextField type="text" multiline
                            maxRows={5} required value={desc} onChange={(e) => setdesc(e.target.value)} sx={{ width: '350px' }} size="small" />
                    </Box>
                    <Box className="image" component={'label'}>
                        Select profile Image
                        <input required onChange={(e) => setimage(e.target.files[0])} type="file" name="image" accept="image/png, image/jpg, image/jpeg"
                            hidden />
                    </Box>
                    <Box className='submitbtn' component={"button"} type='submit'>Continue</Box>
                </Stack>
            </div>

        </div>
    )
}

export default UserProfile