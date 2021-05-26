import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const ScrollToTop = () => {
  const { listen } = useHistory();

  useEffect(() => {
    const unlisten = listen(() => {
      window.scrollTo(0, 0);
    });

    return () => {
      unlisten();
    };
  }, []);

  return null;
};

export const useScroll = () => {
  return {
    ScrollToTop,
  };
};
