import axios from 'axios';

const instance = axios.create({
  baseURL : 'https://burger-builder-9e713.firebaseio.com/'
});

export default instance;