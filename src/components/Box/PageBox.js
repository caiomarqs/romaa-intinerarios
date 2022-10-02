import React from "react"

import { Box } from "@mui/material"
import { UserNav } from "../Auth"

const PageBox = ({ sx, ...props }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100vh',
                ...sx
            }}
            {...props}
        >
            <UserNav />
            {props.children}
        </Box>
    )
}

export { PageBox }