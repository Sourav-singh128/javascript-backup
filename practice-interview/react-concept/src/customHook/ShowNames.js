import React from "react";
import useFetching from "./useFetching";
const url = "https://jsonplaceholder.typicode.com/users";

const ShowNames = () => {
  const user = useFetching(url);
  return (
    <div>
      {user && (
        <ul>
          {user.map((val) => (
            <li key={val.id}>{val.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowNames;
