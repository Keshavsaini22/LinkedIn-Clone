import React from "react";
import SimpleDialog from '@mui/material/Dialog';
import { toggleSuccess } from '../../features/SignUp/SignIn.slice';
import { useDispatch, useSelector } from 'react-redux';


function DialogBox({ open }) {
    const dispatch = useDispatch();

    return (
        <SimpleDialog open={open} onClose={() => {
            dispatch(toggleSuccess())
        }} >
            form to be created
            <button onClick={() => {
                dispatch(toggleSuccess())
            }}>Close</button>
        </SimpleDialog>
    )
}

export default DialogBox