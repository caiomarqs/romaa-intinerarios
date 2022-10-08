import React, { useEffect, useState } from 'react'

import { FormControl, InputBase, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { gray, white } from '../../theme'

const FormControlStyles = {
    '& .MuiInputLabel-root': {
        display: 'none'
    },
    '& .MuiSvgIcon-root': {
        display: 'none'
    },
    '& .MuiSelect-select': {
        padding: '.25rem .75rem !important',
        minWidth: 'fit-content'
    }
}

const InputBaseStyles = {
    fontSize: '1.5rem',
    color: gray.A200,
    backgroundColor: white.A600,
    borderRadius: '.625rem'
}

const MenuItemStyles = {
    fontSize: '1rem'
}

const BigInputSelected = ({ showLabel, labelName, initalValue, value, values, onChange, options, sx,...props }) => {

    const [internalValue, setInternalValue] = useState('')

    useEffect(() => {
        setInternalValue(initalValue)
    }, [initalValue])

    const handleChange = (event) => {
        const { target: { value } } = event
        onChange(value)
        setInternalValue(value)
    }

    return (
        <>
            {
                showLabel && <Typography
                    sx={{
                        margin: '0 1rem 0 0',
                        fontSize: '1rem'
                    }}
                >
                    {labelName}
                </Typography>

            }
            <FormControl
                sx={{
                    ...FormControlStyles,
                    ...sx
                }}
            >
                <InputLabel>
                    {labelName}
                </InputLabel>
                <Select
                    input={<InputBase sx={InputBaseStyles} label={labelName} />}
                    value={internalValue}
                    onChange={handleChange}
                >
                    {
                        values.map(valueItem => (
                            <MenuItem key={valueItem} value={valueItem} sx={MenuItemStyles}>
                                {valueItem}
                            </MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </>

    )
}

export { BigInputSelected }