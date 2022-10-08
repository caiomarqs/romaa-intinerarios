import React from 'react'

import { Box } from '@mui/system'

import { FeatureTitle } from '../../Typos'
import { BigInputSelected } from '../../Inputs'
import { CustomDivider } from '../../Customs'

const years = [
    '2022',
    '2023'
]

const meses = [
    'Outubro',
    'Novembro',
    'Dezembro'
]

const MounthDrawerHeader = () => {
    return (
        <>
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
                <Box>
                    <BigInputSelected
                        labelName="mes"
                        initalValue={meses[0]}
                        onChange={() => { }}
                        values={meses}
                        showLabel={false}
                        sx={{
                            marginRight: '.5rem'
                        }}
                    />
                    <BigInputSelected
                        labelName="Ano"
                        initalValue={years[0]}
                        onChange={() => { }}
                        values={years}
                        showLabel={false}
                    />
                </Box>
            </Box>
            <CustomDivider margin={true} />
        </>
    )
}

export { MounthDrawerHeader }