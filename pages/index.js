import * as React from 'react';
import { PageBox } from '../src/components';
import { ProtectedComponent } from '../src/components/Auth';

const Index = () => {
  return (
    <ProtectedComponent>
      <PageBox>
        
      </PageBox>
    </ProtectedComponent>
  )
}

export default Index 