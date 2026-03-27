import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const getFlatsList = async () => {
  try {
    const data = await getDocs(collection(db, 'mieszkania'));
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    const sortedData = filteredData.sort((a, b) => {
      const flatA = parseInt(a.numberOfFlat.slice(1), 10);
      const flatB = parseInt(b.numberOfFlat.slice(1), 10);
      return flatA - flatB;
    });
    return sortedData;
  } catch (err) {
    console.error(err);
  }
};

export default getFlatsList;
