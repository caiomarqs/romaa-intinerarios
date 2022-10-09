import React from 'react'

import { Typography, Box } from '@mui/material'
import { CustomDivider } from '../Customs'

const NoDataMessage = ({ message = "No data to show", ...props }) => {
    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'

                }}
            >
                <Typography {...props}>
                    {message}
                </Typography>
            </Box>
            <CustomDivider margin={true}/>
        </>
    )
}

export { NoDataMessage }