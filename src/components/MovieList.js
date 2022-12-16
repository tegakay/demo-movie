import React from "react";
import List from "./List";
import { useState, useEffect } from "react";
import { Input } from "@chakra-ui/react";

export default function MoveList() {
  const [Movie, setMovie] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    fetchreq();
  }, []);

  const fetchreq = () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=b21ca097")
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .then((data) => {
        return setLoading(false);
      });
  };

  const Search = (e) => {
    console.log("here", e.target.value);
    let moviename = e.target.value
    setLoading(true)
    fetch(`http://www.omdbapi.com/?t=${moviename}&apikey=b21ca097`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .then((data) => {
        return setLoading(false);
      });
  };

  //check if data has saved to state
  if (Loading) {
    return <div className="App">Loading...</div>;
  }
  console.log("ddd", Movie);

  return (
    <div className="movie--span">
      <div>
        <div className="app-banner">
          <label>
            Search:
            <Input size="lg" type="text" onChange={Search} name="name" />
          </label>
        </div>
      </div>
      <div className="first--row">
        <p className="movie--title">{Movie.Genre}</p>
        <ul className="stop-overflow">
          <li>
            <List key={Movie.imdbID} id={Movie.imdbID} name={Movie.Title} />
          </li>
          <li>
            <List key={Movie.imdbID} id={Movie.imdbID} name={Movie.Title} />
          </li>
          <li>
            <List key={Movie.imdbID} id={Movie.imdbID} name={Movie.Title} />
          </li>
        </ul>
      </div>
      <div className="second--row">
        <p className="movie--title">{Movie.Genre}</p>
        <ul className="stop-overflow">
          <li>
            <List key={Movie.imdbID} id={Movie.imdbID} name={Movie.Title} />
          </li>
          <li>
            <List key={Movie.imdbID} id={Movie.imdbID} name={Movie.Title} />
          </li>
          <li>
            <List key={Movie.imdbID} id={Movie.imdbID} name={Movie.Title} />
          </li>
        </ul>
      </div>
    </div>
  );
}
