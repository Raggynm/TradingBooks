import React, { createContext } from 'react'

const AuthContext = createContext({ signed: null, user: {}, token: null})

export default AuthContext