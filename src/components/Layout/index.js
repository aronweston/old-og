import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { StaticQuery } from 'gatsby';
import { SiteWrapper, Main } from './styles';

const Layout = ({ location, children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <SiteWrapper>
          <Header siteTitle={data.site.siteMetadata.title} />
          <Main homePage={location.pathname === '/' ? true : false}>
            {children}
          </Main>
          <Footer />
        </SiteWrapper>
      )}
    />
  );
};

export default Layout;
