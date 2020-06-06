import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://react-my-burger-ae04f.firebaseio.com',
});

export default instance;
