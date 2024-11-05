import axios, { AxiosResponse } from 'axios';

export const executeQuery = async (params) =>
    axios.post(`http://localhost:3000/api/schedule`, params);