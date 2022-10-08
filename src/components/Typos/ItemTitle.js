import React from "react"

import { Typography } from "@mui/material"

import { colors } from "../../theme"

const ItemTitle = ({sx, ...props}) => {
    return (
        <Typography
            variant='subtitle2'
            sx={{ color: colors.main, fontWeight: 'bold', ...sx }}
        >
            {props.children}
        </Typography>
    )
}

export { ItemTitle }