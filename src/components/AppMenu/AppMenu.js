import React from 'react'

import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Nav, BoxLink, StLink } from './AppMenu.styled';

const setActiveStyle = ({ isActive }) =>
  isActive ? { color: 'rgb(239, 131, 230)', fontWeight: 'bold' } : null;

const AppMenu = () => {
  return (
    <Nav>
        <BoxLink>
         <StLink to={`/`} style={setActiveStyle}>Home</StLink>
         <StLink to={`/tweets`} style={setActiveStyle}>Followers</StLink>
         </BoxLink>
         <Suspense>
        <Outlet />
      </Suspense>
    </Nav>
  )
}

export default AppMenu