import { useState, createContext, children } from 'react'

export const LoginContext = createContext()

const LoginProvider = ({ children }) => {
  const [token, setToken] = useState(true)

  const logout = () => {
    setToken(false)
  }

  return (
    <LoginContext.Provider value={{ token, setToken, logout }}>
      {children}
    </LoginContext.Provider>
  )
}

export default LoginProvider
