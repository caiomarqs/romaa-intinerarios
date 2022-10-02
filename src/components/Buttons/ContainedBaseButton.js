import React from "react"
import { Button } from "@mui/material"

const ContainedBaseButton = ({ sx, children, ...props }) => (
    <Button
        sx={{ ...sx }}
        variant="contained"
        {...props}
    >
        {children}
    </Button>
);
export { ContainedBaseButton }