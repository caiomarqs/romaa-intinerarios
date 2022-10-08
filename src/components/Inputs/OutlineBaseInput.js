import React from "react"
import { TextField } from "@mui/material"

const OutlineBaseInput = ({sx, ...props}) => (
    <TextField
        sx={{
            width: '100%',
            ...sx
        }}
        variant="outlined"
        {...props}
    />
);
export { OutlineBaseInput }