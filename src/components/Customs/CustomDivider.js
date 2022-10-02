import React from 'react'

import { Divider } from '@mui/material'
import { gray } from '../../theme'

const CustomDivider = ({ margin }) => {
    return (
        <Divider sx={{
            borderBottom: `0.0625rem solid ${gray.A500}`,
            margin: margin ? '1.5rem 0' : 0 
        }} />
    )
}

export { CustomDivider }