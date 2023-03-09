import { useEffect, useState } from "react";
import { Pokemones } from "../../../api";
import { PokemonItem } from "../PokemonItem";
// import "bootstrap/dist/css/bootstrap.min.css";
import { PaginationControl } from "react-bootstrap-pagination-control";

const pokemonController = new Pokemones();

export const ListPokemones = () => {
  const path = "https://pokeapi.co/api/v2/pokemon";
  const limit = 8;
  const [url, setUrl] = useState(`${path}?offset=0&limit=${limit}`);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [listaPokemones, setListaPokemones] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setListaPokemones(null);
        const response = await pokemonController.getPokemones(url);
        setListaPokemones(response.results);
        setTotal(response.count);
        setUrl(`${path}?offset=${page * limit}&limit=${limit}`);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [url, page]);

  if (listaPokemones == null)
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );

  return (
    <div className="container">
      <h1 className="text-center mb-3 mt-3">Pokemones</h1>
      <div className="container text-center">
        <div className="row align-items-center">
          {listaPokemones.map((pokemon, key) => (
            <div key={key} className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
              <PokemonItem pokemon={pokemon} url={pokemon.url} />
            </div>
          ))}
        </div>
      </div>

      <PaginationControl
        page={page + 1}
        total={total}
        between={3}
        limit={limit}
        changePage={(page) => {
          setPage(page - 1);
        }}
        // ellipsis={1}
      />
    </div>
  );
};
