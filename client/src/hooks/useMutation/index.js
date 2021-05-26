import { useState } from 'react';

export const useMutation = (
  request,
  { onError = () => {}, onComplete = () => {} } = {}
) => {
  const [isLoading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  const [data, setData] = useState(null);

  const onRequest = async (variables) => {
    setLoading(true);

    setError(null);

    await request(variables)
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

  return [onRequest, { isLoading, error, data }];
};

export const useLazyQuery = useMutation;
