import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// "19BBY"
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [people, setPeople] = useState([]);
  const [peopleDropdown, setPeopleDropdown] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://swapi.dev/api/people/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPeople(data);
        setPeopleDropdown(data.results);
      });
  }, []);

  console.log("dropdown ", peopleDropdown);
  const userHandler = (event) => {
    setUsername(event.target.value);
    console.log("people", people);
    const filteredPeople = people?.results?.filter((person) => {
      return person.name.includes(event.target.value);
    });

    console.log(filteredPeople);
    setPeopleDropdown(filteredPeople);
    document.getElementsByClassName("hide")[0].style.display = "block";
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hitting");
    if (username.length < 0) {
      console.log("fil all the values");
    }

    const user = peopleDropdown.find((person) => {
      if (person.name === username) {
        return person;
      }
    });

    if (user && user.birth_year === password) {
      navigate("/planets");
    }
    if (user && user.birth_year !== password) {
      console.log("incorrect password");
    }
  };

  const selectedUserHandler = (event) => {
    console.log(event.target.innerText);
    // setSelectedUser(event.target.innerText);
    setUsername(event.target.innerText);
    document.getElementsByClassName("hide")[0].style.display = "none";
  };
  return (
    <div className="flex-container">
      <div className="flex" style={{ position: "relative" }}>
        <label className="label-login" htmlFor="username">
          Name{" "}
        </label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={userHandler}
          required="true"
        />
        {peopleDropdown && (
          <div
            className="hide"
            style={{
              position: "absolute",
              right: "-50px",
              border: "1px solid black",
            }}>
            {peopleDropdown.map((person, index) => {
              return (
                <div
                  key={index}
                  style={{ cursor: "pointer" }}
                  onClick={selectedUserHandler}>
                  {person.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <br />
      <div className="flex">
        <label className="label-password" htmlFor="password">
          Password{" "}
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={passwordHandler}
          required="true"
        />
      </div>
      <br />
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Login;
