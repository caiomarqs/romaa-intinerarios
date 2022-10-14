
import React, { useState } from "react"

import { useSession } from "next-auth/react"
import { Box, IconButton } from "@mui/material"
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import { OutlineBaseInput } from "../../Inputs/OutlineBaseInput"
import { mutate } from "swr"
import { api } from "../../../utils"
import { theme } from "../../../theme"

const ContainerStyles = {
    width: '8rem',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        paddingTop: '2rem',
        flexDirection: 'column-reverse'
    }
}

const ButtonsBoxStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'end',
    marginTop: '0.5rem',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'end',
        marginBottom: '1rem'
    }
}

const ItemKilometers = ({ day }) => {

    const { data } = useSession()
    const { user } = data;

    const [kilometers, setKilometers] = useState(day.km)

    const editDay = async () => {
        await api(`/api/intinerarios/${user.id}`, {
            ...day,
            km: kilometers
        }, 'PUT');

        await mutate(`/api/intinerarios/${user.id}?month=${day.mes}&year=${day.ano}`)
    }

    const deleteDay = async () => {
        await api(`/api/intinerarios/${user.id}`, {
            ...day,
            km: kilometers
        }, 'DELETE');

        await mutate(`/api/intinerarios/${user.id}?month=${day.mes}&year=${day.ano}`)
    }

    return (
        <Box sx={ContainerStyles}>
            <OutlineBaseInput
                label="Quilometragem"
                name="Quilometragem"
                type="number"
                value={kilometers}
                InputProps={{ inputProps: { min: 0 } }}
                onChange={(e) => setKilometers(e.target.value)}
            />
            <Box sx={ButtonsBoxStyles}>
                <IconButton onClick={editDay}>
                    <SaveAsOutlinedIcon />
                </IconButton>
                <IconButton onClick={deleteDay}>
                    <DeleteOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    )
}

export { ItemKilometers }