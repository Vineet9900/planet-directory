import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchPlanets = async () => {
    const planet = await axios.get(
      `https://swapi.dev/api/planets/?page=${page}&format=json`
    );
    console.log("planet", planet.data);
    setData(Object.values(planet.data.results));
  };

  console.log("nextData", data);
  // const fetchResidentName = async() => {
  //   const resident= await axios.get(`${data}`)
  //   console.log("resident", resident)

  // }
  useEffect(() => {
    fetchPlanets();
    // fetchResidentName()
  }, [page]);

  return (
    <>
      <div className="main-container">
        {data.map((item, index) => {
          return (
            <div key={index} className="planet-container">
              <div className="planet-subContainer">
                <div className="planet-contents">
                  <div>
                    <h2>Name</h2>
                  </div>

                  <div className="planet-sub-contents">
                    <div>:</div>
                    <h2>{item.name}</h2>
                  </div>
                </div>
                <div className="planet-contents">
                  <div className="planet-contents-subhead">
                    <p>Climate</p>
                  </div>

                  <div className="planet-sub-contents">
                    <div>:</div>
                    <p>{item.climate}</p>
                  </div>
                </div>
                <div className="planet-contents">
                  <div className="planet-contents-subhead">
                    <p>Population</p>
                  </div>

                  <div className="planet-sub-contents">
                    <div>:</div>
                    <p>{item.population}</p>
                  </div>
                </div>
                <div className="planet-contents">
                  <div className="planet-contents-subhead">
                    <p>Terrain</p>
                  </div>

                  <div className="planet-sub-contents">
                    <div>:</div>
                    <p>{item.terrain}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination-container">
        <button
          disabled={page == 1}
          style={{ background: page == 1 ? "grey" : "rgb(48, 151, 196)" }}
          onClick={() => setPage(page - 1)}
        >
          prev
        </button>
        <button
          disabled={page == 6}
          style={{ background: page == 6 ? "grey" : "rgb(48, 151, 196)" }}
          onClick={() => setPage(page + 1)}
        >
          next
        </button>
      </div>
    </>
  );
}

export default App;
