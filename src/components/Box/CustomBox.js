import React from "react"

import { Box } from "@mui/material"

const CustomBox = ({ sx, ...props }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                ...sx
            }}
            {...props}
        >
            {props.children}
        </Box>
    )
}

export { CustomBox }