
const convertDateForReact = (dateFromFirebase) =>{
    let objDate;
    if(typeof dateFromFirebase === 'object'){
        objDate =  dateFromFirebase.toDate();
    }else{
        const correctedDate = dateFromFirebase.replaceAll('.', '-')
        objDate=  new Date(Date(correctedDate))
    }
    const year = objDate.getFullYear();
    const month = objDate.getMonth() + 1 <10 ? '0' + (objDate.getMonth() + 1) : (objDate.getMonth() + 1);
    const day = objDate.getDate() < 10 ? '0' + objDate.getDate() : objDate.getDate();  
    return `${year}-${month}-${day}`
  }

  export default convertDateForReact;