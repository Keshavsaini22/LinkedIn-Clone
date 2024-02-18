import React from "react";
import SimpleDialog from '@mui/material/Dialog';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSuccess } from "../../features/SignUp/SignIn/SignIn.slice";


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