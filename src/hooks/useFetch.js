import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = ({ url, id }) => {
  const [data, setData] = useState([]);

  async function fetchData() {
    if (!id) {
      await axios.get(`${url}/`).then((res) => {
        const data = res.data;
        setData(data);
      });
    } else {
      await axios.get(`${url}/${id}`).then((res) => {
        const data = res.data;
        setData(data);
      });
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};
