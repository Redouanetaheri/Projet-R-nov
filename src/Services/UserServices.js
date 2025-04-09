import axios from "axios";

function login(users){
    return axios.post('http://localhost:3000/users/connexion', users)
}

function getUsersById(id){
    return axios.get('http://127.0.0.1:3000/users/usersBy/'+id)
}

function getUsers(users){
    return axios.post('http://127.0.0.1:3000/users/LoginPage', users)
} 

function getSign(sign){
    return axios.post('http://127.0.0.1:3000/users/SigninPage', sign)
}
function getUptade(update){
    return axios.post('http://127.0.0.1:3000/users/update/'+id ,update)
}


export default {login,
    getUsers,
    getSign,
    getUsersById,
    getUptade
}