import axios from 'axios';

export const get = ({ url, options = {} }) => axios.get(url, options);

export const post = async ({ url, data = {}, options = {} }) => axios.post(url, data, options);
