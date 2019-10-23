import React from 'react'
import AuthProvider from "./authentication"

const Layout = ({children}) => <AuthProvider>{children}</AuthProvider>

export default Layout