import { useState, useEffect } from 'react';


const useApiFetch = (url,options) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url,options);
        if (!response.ok) {
          throw new Error(`Something Went wrong" + ${url}`);
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url,options]);

  return { data, isLoading, error };
};

export default useApiFetch;
