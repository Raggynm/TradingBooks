import React, { useState, useEffect, useContext } from 'react'
import { AsyncStorage } from 'react-native'
import api from '../api'

import ApiService from '../ApiService'
import AuthContext from './authContext'

const AuthProvider = ({ children }) => {
    const [userId, setUserId] = useState(null)
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState(null)

    useEffect(() => {
        function loadStoragedData() {
            const storagedToken = AsyncStorage.getItem('@TB:token')

            if(storagedToken){
                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${storagedToken}`;

                ApiService.Me()
                    .then(res => {
                        setUserId(res.data.userId)
                        setUser(res.data)
                        setLoading(false)
                    })
                    .catch(setLoading(false))
                
            } else setLoading(false)
        }
        loadStoragedData()

    }, [])

    function Login(data) {
        setLoading(true);
        return ApiService.SignIn(data)
            .then((res) => {
                console.log(res.data);
                setUser(res.data.userData);
                setUserId(res.data.userData.userId);
                setToken(res.data.token)
                api.defaults.headers[
                    'Authorization'
                ] = `Bearer ${token}`;

                AsyncStorage.setItem('@TB:token', token)
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
                return Promise.reject(error);
            });
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, Login, loading }}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthProvider