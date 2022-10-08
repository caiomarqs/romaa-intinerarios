import React, { useEffect, useState } from "react"

import { signIn, useSession } from 'next-auth/react'
import Router from 'next/router'

import { CustomBox } from "../Box"
import { RomaLogo } from "../Icons"
import { ContainedBaseButton } from "../Buttons"
import { UserNameInput, PassInput } from "../Inputs"
import { CustomSnakcBar } from "../SnackBar"


const AuthComponent = () => {
    const { status } = useSession()

    useEffect(() => {
        if (status === "authenticated") {
            Router.replace("/")
        }
    }, [status])

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [showError, setShowError] = useState(false)

    const onKeyDown = async (e) => {
        if (e.keyCode === 13) {
            return await login(e)
        }
    }

    const login = async (e) => {
        e.preventDefault()

        const res = await signIn("credentials", {
            username: username,
            password: password,
            redirect: false,
        })

        if (res.ok) {
            Router.replace("/")
        }
        else {
            setError(res.error)
            setShowError(true)
        }
    }

    return (
        <>
            <CustomBox sx={{
                height: '100vh',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1.5rem'
            }}>
                <CustomBox
                    maxWidth="sm"
                    sx={{
                        alignItems: 'center',
                        borderRadius: '0.625rem',
                        padding: '1rem',
                        width: '100%'
                    }}
                    boxShadow={4}
                >
                    <RomaLogo style={{
                        margin: '2rem 0 0 0'
                    }} />
                    <UserNameInput
                        onKeyDown={onKeyDown}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <PassInput
                        onKeyDown={onKeyDown}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <ContainedBaseButton
                        sx={{
                            marginTop: '3rem',
                            alignSelf: 'flex-end'
                        }}
                        onClick={(e) => login(e)}
                    >
                        Login
                    </ContainedBaseButton>
                </CustomBox>
            </CustomBox>
            <CustomSnakcBar
                message={error}
                type="error"
                open={showError}
                duration={1200}
                close={() => setShowError(false)}
            />
        </>
    )
}

export { AuthComponent }