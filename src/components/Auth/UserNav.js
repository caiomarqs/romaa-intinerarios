import React from 'react'

import { AppBar, Typography } from '@mui/material'
import { useSession, signOut } from 'next-auth/react'

import { RomaLogo } from '../Icons'
import { ContainedBaseButton } from '../Buttons'

const UserNav = () => {

    const session = useSession()
    const { data } = session

    return (
        <AppBar
            position='static'
        >
            <div style={{
                padding: '0.19rem 0 0 0',
                marginRight: '1.5rem'
            }}>
                <RomaLogo height='24' />

            </div>
            <div
                style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}
            >
                <Typography
                    variant='subtitle2'
                    component="span"
                    sx={{ fontWeight: 'bold' }}
                >
                    Olá, {data?.user?.name}
                </Typography>
                <ContainedBaseButton
                    sx={{
                        margin: '0 0 0 1.5rem'
                    }}
                    onClick={() => signOut()}
                >
                    Sair
                </ContainedBaseButton>
            </div>
        </AppBar>
    )
}

export { UserNav }