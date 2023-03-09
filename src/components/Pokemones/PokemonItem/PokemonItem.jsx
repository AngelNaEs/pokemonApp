import { useEffect, useState } from "react";
import { Pokemones } from "../../../api";
import { PokemonModal } from "../../";

const pokemonController = new Pokemones();

export const PokemonItem = ({ pokemon, url }) => {
  const [pokemonData, setPokemonData] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await pokemonController.getPokemones(url);
      setPokemonData(result);
    })();
  }, [url]);

  if (pokemonData == null)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <>
      <div
        className="card"
        data-bs-toggle="modal"
        data-bs-target={`#id${pokemonData.id}`}
        style={{ cursor: "pointer" }}
      >
        <div className="card-body">
          <h5 className="card-title text-capitalize pb-2">
            {pokemon.name}{" "}
            <span className="fw-light">{pokemonData.stats[0].base_stat}Hp</span>
          </h5>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemon}
            className="card-img-top m-auto"
            style={{ maxHeight: "190px" }}
          />
        </div>
        <div className="container text-center border-top pt-2">
          <div className="row">
            <div className="col fw-bold">{pokemonData.stats[1].base_stat}</div>
            <div className="col fw-bold">{pokemonData.stats[2].base_stat}</div>
          </div>
        </div>
        <div className="container text-center pb-2">
          <div className="row">
            <div className="col">Ataque</div>
            <div className="col">Defensa</div>
          </div>
        </div>
      </div>

      <PokemonModal pokemonData={pokemonData} />
    </>
  );
};
