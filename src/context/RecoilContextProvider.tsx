'use client';

import React, { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface ContextProviderProps {
  children: ReactNode;
}

const RecoilContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilContextProvider;
