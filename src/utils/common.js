import React ,{ useState,useEffect } from "react";
import { history } from "../App"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import { BASE_API_URL } from './config';
import { getAccessToken, getRefreshToken, setToken, clearUserSession,  } from './localStorageHelper';

export const MaintainSession = () => {
    const token = getAccessToken();//get info token 
    const currentPath = window.location.pathname;
  
    if (token) { //check token tồn tại hay không nếu có thì trả về trang chủ không thì trang login

        if (currentPath === '/' || currentPath === '/auth/login') {   
            history.push('/Dashboard/index')
            // navigate("../../Dashboard/index", { replace: true });        
         
        }
        // const decode = jwt_decode(token);
      
        // updateStore(decode);
    }
    else {
        // history.push(currentPath);
    }
};
export const updateStore = (user) => {
    console.log(user)
    // store.dispatch(
    //     getSignInSuccess({
    //         userId: getUserSession().userId,
    //         userName: user.sub,
    //         token: getAccessToken(),
    //         firstName: getUserSession().firstName,
    //         lastName: getUserSession().lastName,
    //         roles: getRoles()
    //     })
    // );
};
export const setAuthHeader = () => {
    const token = getAccessToken();
   
    if (token) { 
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        addRefreshToken()
    }
};
export const removeAuthHeader = () => {
    delete axios.defaults.headers.common['Authorization'];
};

export const addRefreshToken = () => {
    let isRefreshing = false;
    const interceptor = axios.interceptors.response.use((response) => {
        
        return response
    },
 
        async error => {
        
            const originalRequest = error.response.config;
          
            if (error.response.status !== 401) {
                return Promise.reject(error);
            }
            if (error.response.status === 401 && originalRequest.url === `${BASE_API_URL}/Permission/Auth/RefreshToken`) {
                clearUserSession();
                // history.push('auth/login');
                return Promise.reject(error);
            }

            /* 
            * When response code is 401, try to refresh the token.
            * Eject the interceptor so it doesn't loop in case
            * token refresh causes the 401 response
            */
            // axios.interceptors.response.eject(interceptor);
            if (error.response.status === 401) {
        
                if (!isRefreshing) {
                    isRefreshing = true;
                    return await axios.post(`${BASE_API_URL}/Permission/Auth/RefreshToken`,
                        {
                            accessToken: getAccessToken(),
                            refreshToken: getRefreshToken()
                        }
                    )
                        .then(({ data }) => {
                            const result = data;
                            setToken(result.data.accessToken);
                            axios.defaults.headers.common['Authorization'] = `Bearer ${result.data.accessToken.token}`;
                            return axios(originalRequest);
                        })
                        .catch(error => {
                            return Promise.reject(error);
                        })
                        .finally(() => {
                            isRefreshing = false;
                        });
                }

            }
           
        });
};