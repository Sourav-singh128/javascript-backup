import { useEffect, useState } from "react";
import "./planet.css";
const Planet = () => {
  let minUnit = 3;
  const [planets, setPlanets] = useState([]);
  const [population, setPopulation] = useState([]);
  const [selectedPop, setSelectedPop] = useState("");
  useEffect(() => {
    fetch("https://swapi.dev/api/planets/")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPlanets(data.results);
        setSelectedPop(data.results);
        // setPeopleDropdown(data.results);
      });
  }, []);

  const populationHandler = (event) => {
    setPopulation(event.target.value);
    console.log("population", population);
    const filteredPopulation = planets?.filter((pop) => {
      return pop.name.includes(event.target.value);
    });

    console.log(filteredPopulation);
    setSelectedPop(filteredPopulation);
  };
  console.log("myPlanets", planets);

  const convertPopulation = (population) => {
    if (population === "unknown") return 0;
    population = parseInt(population);
    if (population <= 1000) {
      minUnit = 3;
    } else if (population > 1000 && population <= 10000) {
      minUnit = 4;
    } else if (population > 10000 && population <= 100000) {
      minUnit = 5;
    } else if (population > 100000 && population <= 1000000) {
      minUnit = 6;
    } else if (population > 1000000 && population <= 10000000) {
      minUnit = 7;
    } else if (population > 10000000 && population <= 100000000) {
      minUnit = 8;
    } else if (population > 100000000 && population <= 1000000000) {
      minUnit = 9;
    } else if (population > 1000000000 && population <= 10000000000) {
      minUnit = 10;
    } else if (population > 10000000000 && population <= 100000000000) {
      minUnit = 11;
    } else {
      minUnit = 12;
    }
    return minUnit;
  };

  const onHover = (e) => {
    console.log("on=hover ", e.currentTarget);
    e.currentTarget.querySelector(".toast").style.display = "flex";
  };

  const onOut = (e) => {
    console.log("on=hover ", e.currentTarget);
    e.currentTarget.querySelector(".toast").style.display = "none";
  };
  return (
    <div>
      <div>Search for planets </div>
      <div>
        <input
          id="search"
          type="text"
          placeholder="a"
          value={population}
          onChange={populationHandler}
        />
      </div>
      {/*
       * Replace the section below with the results of the search
       */}
      <section>
        {}
        <header>
          <div className="col">Name</div>
          <div className="col">Population</div>
        </header>
        {/* <div>
          <div className="col">Tatooine</div>
          <div title='200000' className="col">{'\u{1F468}\u{1F468}\u{1F468}\u{1F468}\u{1F468}'}</div>
          <div title='200000' className="col">{'\u{1F468}'}</div>
        </div> */}
      </section>
      <br />
      {selectedPop && (
        <div
          className="hide"
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
          }}>
          {selectedPop.map((planet, index) => {
            return (
              <>
                <div className="list">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}>
                    <div key={index} style={{ cursor: "pointer" }}>
                      {planet.name}
                    </div>
                    {/* <div key={index} style={{cursor: 'pointer' }}  >{[...Array(parseInt(5)).keys()].map(()=> '\u{1F468}')}</div> */}
                    <div key={index} style={{ display: "flex" }}>
                      {Array(convertPopulation(planet.population))
                        .fill("\u{1F468}")
                        .map((icon) => (
                          <div
                            className="population-icon"
                            onMouseOver={onHover}
                            onMouseOut={onOut}
                            style={{ position: "relative" }}>
                            <div>{icon} </div>
                            <div
                              style={{
                                position: "absolute",
                                display: "none",
                                zIndex: "1",
                                border: "1px solid black",
                                padding: "5px",
                              }}
                              className="toast">
                              {planet.population}
                            </div>
                          </div>
                        ))}
                    </div>
                    <div
                      key={index}
                      style={{ cursor: "pointer", position: "relative" }}>
                      <div style={{ display: "flex" }}>
                        {" "}
                        {planet.population}
                      </div>
                    </div>
                    {/* <div key={index} style={{cursor: 'pointer' }}  >{isNaN(parseInt(planet.population))?0:[...Array(parseInt(planet.population/10000)).keys()].map(()=> '\u{1F468}')}</div> */}
                  </div>

                  {/* .map((val, index)=> `\u{1F468}`).join('') */}
                </div>
              </>
            );
          })}
        </div>
      )}

      <br />
      <div className="error">No planet matching search term</div>
    </div>
  );
};

export default Planet;
