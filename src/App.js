import "./App.css";
import { Col } from "antd";
import Searcher from "./components/Searcher";
import PokemonList from "./components/PokemonList";
import logo from "./statics/logo.svg";
import { useEffect, useState } from "react";
import { getPokemon } from "./api";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response =  await getPokemon();
      if (response) setPokemons(response);
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher></Searcher>
      </Col>
      <PokemonList pokemons={pokemons}></PokemonList>
    </div>
  );
}

export default App;
