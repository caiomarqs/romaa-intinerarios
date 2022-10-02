import React from "react"

import { CustomBox } from "./CustomBox"
import { EmailInput, PassInput } from "./Inputs"

import { RomaLogo } from "./Icons"
import { ContainedBaseButton } from "./Buttons"

const AuthComponent = () => {
    return (
        <CustomBox
            sx={{
                alignItems: 'center',
                borderRadius: '0.625rem',
                padding: '1rem'
            }}
            boxShadow={4}
        >
            <RomaLogo style={{
                margin: '2rem 0 0 0'
            }} />
            <EmailInput />
            <PassInput />
            <ContainedBaseButton
                sx={{ 
                    marginTop: '3rem',
                    alignSelf: 'flex-end'
                }}
            >
                Login
            </ContainedBaseButton>
        </CustomBox>
    )
}

export { AuthComponent }