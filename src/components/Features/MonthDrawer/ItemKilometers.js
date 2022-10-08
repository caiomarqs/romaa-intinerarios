
import React from "react"

import { Box, IconButton } from "@mui/material"
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import { OutlineBaseInput } from "../../Inputs/OutlineBaseInput"

const ContainerStyles = {
    width: '8rem',
    display: 'flex',
    flexDirection: 'column'
}

const ButtonsBoxStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    marginTop: '0.5rem',
}

const ItemKilometers = () => {
    return (
        <Box sx={ContainerStyles}>
            <OutlineBaseInput
                label="Quilometragem"
                name="Quilometragem"
            />
            <Box sx={ButtonsBoxStyles}>
                <IconButton>
                    <SaveAsOutlinedIcon />
                </IconButton>
                <IconButton >
                    <DeleteOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export { ItemKilometers }