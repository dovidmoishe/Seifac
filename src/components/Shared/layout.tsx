import React from 'react'
import NavBar from './NavBar'

type Props = {
    children: React.ReactElement;
    className: string;
}

const Layout = ({children, className}: Props) => {
  return (
   <div className={className}>
    <NavBar />
    {children}
   </div>
  )
}

export default Layout