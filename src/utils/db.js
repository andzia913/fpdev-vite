import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const getFlatsList = async (setFlatsList) => {
  try {
    const data = await getDocs(collection(db, 'mieszkania'));
    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setFlatsList(filteredData);
  } catch (err) {
    console.error(err);
  }

};

export default getFlatsList;
