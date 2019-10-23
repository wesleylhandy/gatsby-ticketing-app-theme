import React, { useContext } from 'react'
import { FaArrowRight} from 'react-icons/fa'

import { AuthContext } from './authentication'

function CustomerLogin() {
  const { authenticated, login } = useContext(AuthContext)
  if (authenticated) return null
  return (
    <div>
      <h1>
        Welcome to Ticketing App Theme
      </h1>
      <button style={{ margin: '1rem 0' }} onClick={login('google')}>
        Log in with Google{' '}
        <FaArrowRight style={{ position: 'relative', top: 4 }} />
      </button>
    </div>
  )
}
export default CustomerLogin