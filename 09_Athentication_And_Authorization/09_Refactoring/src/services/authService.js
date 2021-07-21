import http from './httpService';
import jwtDecode from 'jwt-decode';
import {apiUrl} from '../config.json';

const apiEndpoint = apiUrl + '/auth';
const tokenkey = 'token';

export async function login(email,password) {
    const { data: jwt } = await http.post(apiEndpoint, { email, password });
     localStorage.setItem(tokenkey, jwt);
}

export function loginWithJwt(jwt) {
      localStorage.setItem(tokenkey, jwt);
}

export function logout() {
     localStorage.removeItem(tokenkey);
}
export function getCurrentUser() {
     try {
      const jwt = localStorage.getItem(tokenkey);
      return  jwtDecode(jwt);
      
      
    } catch (ex) {
         return null;
    }
}

export default {
    login,
    logout,
    getCurrentUser,
    loginWithJwt
}