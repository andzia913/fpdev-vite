import { useState, useEffect } from "react";
import { fetchDiaryData } from "./firebaseService";

const useDiaryData = () => {
    const [diaryData, setDiaryData] = useState([]);
    useEffect(() => {
      fetchDiaryData()
        .then((data) => {
          setDiaryData(data);
        })
        .catch((err) => {
          console.log('wystąpił bład', err);
        });
    }, [])
    return {diaryData};
};

export default useDiaryData;