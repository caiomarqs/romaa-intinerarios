import { LinearProgress, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import { CustomBox } from "../Box"

const AuthLoading = () => {
    return (
        <CustomBox
            sx={{
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: '1.5rem'
            }}
        >
            <CustomBox
                maxWidth="sm"
                sx={{
                    height: '100vh',
                    justifyContent: 'center',
                    width: '100%'
                }}
                flex={1}
            >
                <Typography
                    variant="h6"
                    component="h1"
                    sx={{
                        marginBottom: '1.5rem',
                        textAlign: 'center'
                    }}
                >
                    Verify login...
                </Typography>
                <div>
                    <LinearProgress sx={{ flex: 1 }} />
                </div>

            </CustomBox>
        </CustomBox>
    )
}

export { AuthLoading }