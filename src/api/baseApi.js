import axios from "axios";
import axiosRetry from 'axios-retry';

// request headers
const Headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

// create instance 
const instance = axios.create({
  baseURL: import.meta.env.VITE_FOOD_BASE_URL,
  headers: Headers
});

// retry if request failed, up to 3 times
// default only retry on network error, 5xx error
axiosRetry(instance, { retries: 3 });

const extractData = (res) => res.data;

// get request
const get = (url, configs) => {
  return instance.get(url, configs)
                 .then((res) => extractData(res))
                 .catch((err) => err);
};

const Api = { get };

export default Api;