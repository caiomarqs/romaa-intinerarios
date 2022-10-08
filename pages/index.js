import * as React from 'react';
import { MonthDrawer, PageBox } from '../src/components';
import { ProtectedComponent } from '../src/components/Auth';
import { setupDayjs } from '../src/utils';

setupDayjs()

const Index = () => {
  return (
    <ProtectedComponent>
      <PageBox>
        <MonthDrawer />
      </PageBox>
    </ProtectedComponent>
  )
}

export default Index 