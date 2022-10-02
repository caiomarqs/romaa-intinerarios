import React from "react"

import { Box } from "@mui/material"
import { UserNav } from "../Auth"
import { Container } from "@mui/system"

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
            <Container
                sx={{
                    padding: '3rem 1.5rem'
                }}
            >
                {props.children}
            </Container>
        </Box>
    )
}

export { PageBox }