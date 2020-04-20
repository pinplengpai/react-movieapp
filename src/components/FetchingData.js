import { useState, useEffect } from "react";
import axios from 'axios';


  async function FetchingData(url) {
    const [data, setData] = useState([]);
    const response = await axios.get(url);
    setData(response.data);


  useEffect(() => {
    FetchingData();
  }, []);
    
}
export default FetchingData;