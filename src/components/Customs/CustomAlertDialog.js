import React from 'react'

import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle
} from "@mui/material"

const CustomAlertDialog = ({
    open,
    onClose,
    onCancel,
    onAccept,
    cancelButtonContent,
    acceptButtonContent,
    title,
    ...props
}) => {

    return (
        <Dialog
            open={open}
            onClose={onClose}
        >
            <DialogTitle>
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {props.children}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>{cancelButtonContent}</Button>
                <Button onClick={onAccept}>{acceptButtonContent}</Button>
            </DialogActions>
        </Dialog>
    )
}

export { CustomAlertDialog }