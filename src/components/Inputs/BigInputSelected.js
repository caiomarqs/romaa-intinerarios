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
        padding: '0.5rem 1.5rem !important',
        minWidth: 'fit-content'
    }
}

const InputBaseStyles = {
    fontSize: '2rem',
    color: gray.A200,
    backgroundColor: white.A600,
    borderRadius: '0.625rem'
}

const MenuItemStyles = {
    fontSize: '1.5rem'
}

const BigInputSelected = ({ showLabel, labelName, initalValue, value, values, onChange, options, ...props }) => {

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
                        fontSize: '1.5rem'
                    }}
                >
                    {labelName}
                </Typography>

            }
            <FormControl
                sx={FormControlStyles}
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