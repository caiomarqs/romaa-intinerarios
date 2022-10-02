import React from 'react'

import { Box } from '@mui/system'

import { BigInputSelected } from '../Inputs'
import { FeatureTitle } from '../Typos'
import { CustomDivider } from '../Customs'


const years = [
    '2022',
    '2023'
]

const MounthDrawer = () => {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end'
            }}>
                <FeatureTitle
                    sx={{
                        flex: 1
                    }}
                >
                    Intirarios
                </FeatureTitle>
                <BigInputSelected
                    labelName="Ano"
                    initalValue={years[0]}
                    onChange={() => { }}
                    values={years}
                    showLabel={false}
                />
            </Box>
            <CustomDivider margin={true} />
        </Box>
    )
}

export { MounthDrawer }