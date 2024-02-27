import React, { useEffect, useState } from "react";
const useFetching = (url) => {
  //   console.log("url ", url);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((res) => setData(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log("data ", data);
  return data;
};

export default useFetching;
