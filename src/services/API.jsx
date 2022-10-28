import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

function getAddress(cep) {
  return API.post('/cep', { cep });
}

const apiService = {
  getAddress,
};

export default apiService;
