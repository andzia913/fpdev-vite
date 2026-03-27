import { useState, useEffect } from 'react';
import { fetchFlatsData } from './firebaseService';

const useFlatsData = () => {
  const [flatsData, setFlatsData] = useState([]);

  useEffect(() => {
    fetchFlatsData()
      .then((data) => {
        setFlatsData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return { flatsData };
};




export default useFlatsData;
