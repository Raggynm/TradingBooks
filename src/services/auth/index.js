import React, { useState } from 'react'
import { AsyncStorage } from 'react-native'
import api from '../api'

import ApiService from '../ApiService'
import AuthContext from './authContext'

const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [token, setToken] = useState(null)
    const [storeId, setStoreId] = useState(null)

    async function Login(data) {
        setLoading(true);
        return ApiService.SignIn(data)
            .then((res) => {
                console.log(res.data);
                setUser(res.data.userData);
                setUserId(res.data.userData.userId);
                setToken(res.data.token)
                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${res.data.token}`;

                console.log(api.defaults.headers['Authorization'])

                AsyncStorage.setItem('@TB:token', res.data.token)
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    function Logout() {

        AsyncStorage.clear();
        api.defaults.headers['Authorization'] = null;
        setUser(null);
    }


    return (
        <AuthContext.Provider value={{ signed: !!user, user, Login, Logout, loading, storeId, setStoreId }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider