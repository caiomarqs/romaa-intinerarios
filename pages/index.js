import * as React from 'react';
import { MounthDrawer, PageBox } from '../src/components';
import { ProtectedComponent } from '../src/components/Auth';

const Index = () => {
  return (
    <ProtectedComponent>
      <PageBox>
        <MounthDrawer />
      </PageBox>
    </ProtectedComponent>
  )
}

export default Index 