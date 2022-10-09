import * as React from 'react'

import { MonthDrawerContainer, PageBox } from '../src/components'
import { setupDayjs } from '../src/utils'

setupDayjs()

const Index = () => {
  return (
    <PageBox>
      <MonthDrawerContainer />
    </PageBox>
  )
}

Index.auth = true

export default Index 