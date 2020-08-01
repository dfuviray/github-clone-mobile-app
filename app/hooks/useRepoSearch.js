import React, {useState} from 'react';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com/repos/',
});

const useRepoSearch = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const response = async (endpoint) => {
    try {
      setLoading(true);
      const response = await api.get(endpoint);

      setLoading(false);

      if (response.status == 200) {
        return setData(response.data);
      }
      throw new Error('Error!');
    } catch (error) {
      setError(true);
      setLoading(false);
      console.log(error);
    }
  };

  return {data, error, loading, response};
};

export default useRepoSearch;
