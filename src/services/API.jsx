import axios from 'axios';

const API = axios.create({
  baseURL: 'https://desafio-cep-back.herokuapp.com',
});

function getAddress(cep) {
  return API.post('/cep', { cep });
}

const apiService = {
  getAddress,
};

export default apiService;
