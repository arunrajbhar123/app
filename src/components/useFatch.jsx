import React, { useEffect, useState } from "react";
import axios from "axios";
const useFatch = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("");
console.log(url);
  const getData = (url) => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data.items);
        setIsLoading(false);
      })
      .catch((err) => setIsError(err));
  };
  useEffect(() => {
    getData(url);
  }, [url]);

  return {
    data,
    isLoading,
    isError,
    setUrl,
  };
};

export default useFatch;
