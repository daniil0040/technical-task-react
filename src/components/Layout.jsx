import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from './AppBar/AppBar';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
`;

export const Layout = () => {
  return (
    <LayoutContainer
      style={{ maxWidth: 1440, margin: '0 auto', padding: '150px 129px' }}
    >
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutContainer>
  );
};
