/* eslint-disable no-use-before-define */
import React from 'react'
import Footer from './Footer'
import Header from './Header'

interface LayoutProps {
  pageTitle: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }: LayoutProps) => (
  <>
    <head>
      <title>{pageTitle}</title>
    </head>
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>
)

export default Layout
