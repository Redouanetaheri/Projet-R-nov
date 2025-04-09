import axios from "axios";

function getAllServices() {
    return axios.get('http://127.0.0.1:3000/service/allServices');
}

function getServiceById(id) {
    return axios.get('http://127.0.0.1:3000/service/recup/'+id);
}

export default {
    getAllServices,
    getServiceById,
};