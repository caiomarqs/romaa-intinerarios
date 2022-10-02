import React from "react"
import { TextField } from "@mui/material"

const OutlineBaseInput = ({sx, ...props}) => (
    <TextField
        sx={{
            margin: '3rem 0 0 0',
            width: '100%',
            ...sx
        }}
        variant="outlined"
        {...props}
    />
);
export { OutlineBaseInput }