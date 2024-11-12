import axios, { AxiosResponse } from 'axios';

export const getList = async () =>
    axios.get(`http://localhost:3000/api/schedule`, "").then((res) => res.data);