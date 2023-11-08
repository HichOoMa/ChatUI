import React from 'react';

interface CenterLayoutProps {
  children: React.ReactNode;
}

const CenterLayout: React.FC<CenterLayoutProps> = ({ children }) => {
  return <div className="w-[100%] h-[100vh] flex justify-center items-center">{children}</div>;
};

export default CenterLayout;
