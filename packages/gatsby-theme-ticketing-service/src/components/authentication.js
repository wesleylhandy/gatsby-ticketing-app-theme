import React, { Component } from 'react'

import getAuth from '../utils/og-auth'

export const AuthContext = React.createContext(`authentication`)

class AuthProvider extends Component {
  state = {}
  auth = undefined

  async componentDidMount() {
    this.auth = getAuth()

    const authenticated = await this.auth.isLoggedIn('quickbooks')

    this.setState({
      authenticated,
    })
  }

  login = (service = 'quickbooks') => {
    return async () => {
      await this.auth.login(service)

      const authenticated = await this.auth.isLoggedIn(service)

      this.setState({
        authenticated,
      })
    }
  }

  logout = (service = 'quickbooks') => {
    return async () => {
      await this.auth.logout(service)

      window.localStorage.clear()

      this.setState({
        authenticated: false,
      })
    }
  }

  render() {
      const { state, props: { children }, login, logout } = this
      const value = {
          ...state, login, logout
      }
    return (
      <AuthContext.Provider value={value}>
        {children}
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider