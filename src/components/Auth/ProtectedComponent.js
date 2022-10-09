import React, { useEffect, useState } from "react"

import { useSession } from 'next-auth/react'
import Router from "next/router"
import { AuthLoading } from "./AuthLoading"

const ProtectedComponent = (props) => {

    const { status } = useSession()

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (status === "unauthenticated") {
            setLoading(false)
            Router.replace("/auth/signin")
        }

        if (status === "authenticated") {
            setLoading(false)
        }

        if (status === "loading") {
            setLoading(true)
        }

    }, [status])

    return loading ? <AuthLoading /> : props.children
}

const verifyAuthenticated = (status) => status === "authenticated"

export { ProtectedComponent, verifyAuthenticated }