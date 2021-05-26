import { useState, useEffect } from 'react';

export const useQuery = (
  request,
  { onError = () => {}, onComplete = () => {}, variables, queryParam } = {}
) => {
  const [isLoading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  const [data, setData] = useState(null);

  useEffect(() => onRequest(), []);

  const onRequest = async () => {
    setLoading(true);

    setError(null);

    await request(variables, queryParam)
      .then((response) => {
        const { data } = response || {};

        setData(data);

        onComplete(data);
      })
      .catch((error) => {
        setError(error);

        onError(error);
      });

    setLoading(false);
  };

  return { isLoading, error, data };
};
