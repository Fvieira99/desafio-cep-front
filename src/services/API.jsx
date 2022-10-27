import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000',
});

async function getAddress(cep) {
  await API.post('/cep', { cep });
}

const apiService = {
  getAddress,
};

export default apiService;
