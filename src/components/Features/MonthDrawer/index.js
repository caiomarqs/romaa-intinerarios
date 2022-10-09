import React, { useEffect } from 'react'
import { useSession } from 'next-auth/react'

import { MonthDrawerProvider } from '../../../providers'

import { MonthDrawer } from './MonthDrawer'

const MonthDrawerContainer = () => {

    const { data, status } = useSession()

    return (
        <MonthDrawerProvider>
            {
                data 
                && <MonthDrawer user={data.user} />
            }
        </MonthDrawerProvider>
    )
}

export { MonthDrawerContainer }