import { Alert, Snackbar } from '@mui/material'
import React from 'react'

const CustomSnakcBar = ({
    message, duration, action, close, open, type, ...props
}) => {
    return (
        <Snackbar
            autoHideDuration={duration}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            open={open}
            onClose={close}
            action={action}
            key={'bottom' + 'center'}
            {...props}
        >
            <Alert
                onClose={close}
                severity={type}
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

export { CustomSnakcBar }