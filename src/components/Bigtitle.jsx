import React from "react";
import {Typography} from "@mui/material";

const Bigtitle = () => {
    return (
        <Typography variant={'h3'} maxWidth={'sm'} style={{
            margin: 'auto',
            marginBottom: '20px',
            textAlign: 'center'
        }}>
            Redux To Do List
        </Typography>
    )
}

export default Bigtitle