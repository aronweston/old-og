import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

import { PageContainer, Main } from './styles';

const Layout = ({ location, children }) => {
  return (
    <PageContainer>
      <Header />
      <Main homePage={location.pathname === '/' ? true : false}>
        {children}
      </Main>
      <Footer />
    </PageContainer>
  );
};

export default Layout;
