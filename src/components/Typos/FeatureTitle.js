import React from 'react'

import { Typography } from '@mui/material'

import { black } from '../../theme'

const FeatureTitle = ({ sx, ...props }) => {
    return (
        <Typography sx={{ color: black.A200, fontWeight: 'bold',  ...sx }} variant='h6' {...props}>
            {props.children}
        </Typography>
    )
}

export { FeatureTitle }