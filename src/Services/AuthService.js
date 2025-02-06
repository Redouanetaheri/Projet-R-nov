import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

function setAxiosToken() {
    const token = localStorage.getItem('token');
    if (token) {
        axios.defaults.headers["Authorization"] = "Bearer " + token;
    }else{ 
        delete axios.defaults.headers["Authorization"];
    }
}

function logout() {
    localStorage.removeItem('token');
    delete axios.defaults.headers["Authorization"];
}

function getUser() {
  const token = localStorage.getItem('token');
    if (token && isValid()) {
        const decodedToken = jwtDecode(token);
       
        return {
            id: decodedToken.id,
            email: decodedToken.email,
            firstname: decodedToken.firstname,
            lastname: decodedToken.lastname,
            phone: decodedToken.phone,
            
           
            
        }
    } else {
        return{};
    }

}

function isValid() {
    const token = localStorage.getItem('token');
    if (token){
        const decodedToken = jwtDecode(token);
        console.log(decodedToken);
        if (decodedToken.exp * 1000 < new Date().getTime()){
            logout();  
            return false;   
        }else{
            setAxiosToken();
            return true;   
        }
    }else{
        logout();
        return false;
    }
}

export default {isValid, setAxiosToken, getUser, logout}; 