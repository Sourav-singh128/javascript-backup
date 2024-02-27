import List from "./List";
import Loading from "./Loading";
import { useState, useEffect } from "react";
const WithLoading = Loading(List);
const Main = () => {
  const data = [];
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState([]);
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        data.push({ id: 1, name: "sourav" });
        data.push({ id: 2, name: "shivam" });
        data.push({ id: 3, name: "sanjay" });
        resolve(data);
      }, 2000);
    })
      .then((val) => {
        setName(val);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <>
      <h1>Header</h1>
      <WithLoading isLoading={isLoading} data={name} />
    </>
  );
};

export default Main;
