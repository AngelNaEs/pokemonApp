import React from "react";

export const PokemonModal = ({ pokemonData }) => {
  return (
    <div
      className="modal fade"
      id={`id${pokemonData.id}`}
      // tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-body">
            <div className="row">
              <div className="col-6">
                <p className="cardNumber fw-bold">#{pokemonData.id}</p>
                <h1 className="text-capitalize">{pokemonData.name}</h1>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-center">
                <img
                  className="mg-fluid cardImg"
                  src={pokemonData.sprites.other.dream_world.front_default}
                  alt="Pokemon"
                />
              </div>
              <div className="col-12 row p-2">
                {/*  */}
                <div className="col-2 col-sm-2 d-flex align-items-center justify-content-center">
                  <p className="m-0 fw-bold">Tipo</p>
                </div>
                <div className="tipePokemon col-4 col-sm-2 m-2">
                  <p className="m-0">{pokemonData.types[0].type.name}</p>
                </div>
                {pokemonData.types[1] && (
                  <div className="tipePokemon col-4 col-sm-2 m-2">
                    <p className="m-0">{pokemonData.types[1].type.name}</p>
                  </div>
                )}
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <div className="fw-bold">Estadisticas</div>
              </div>
              <div className="col-9 row align-items-center">
                <div className="col-4 nameStats d-flex align-items-center justify-content-center">
                  <p className="m-0">Vida</p>
                </div>
                <div
                  className="progress col-6 p-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: pokemonData.stats[0].base_stat + "%" }}
                  ></div>
                </div>
                <p className="col-2 m-0">{pokemonData.stats[0].base_stat}</p>
                <div className="col-4 nameStats d-flex align-items-center justify-content-center">
                  <p className="m-0">Ataque</p>
                </div>
                <div
                  className="progress col-6 p-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: pokemonData.stats[1].base_stat + "%" }}
                  ></div>
                </div>
                <p className="col-2 m-0">{pokemonData.stats[1].base_stat}</p>{" "}
                <div className="col-4 nameStats d-flex align-items-center justify-content-center">
                  <p className="m-0">Defensa</p>
                </div>
                <div
                  className="progress col-6 p-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: pokemonData.stats[2].base_stat + "%" }}
                  ></div>
                </div>
                <p className="col-2 m-0">{pokemonData.stats[2].base_stat}</p>
                <div className="col-4 nameStats d-flex align-items-center justify-content-center">
                  <p className="m-0 lh-1">Ataque especial</p>
                </div>
                <div
                  className="progress col-6 p-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: pokemonData.stats[3].base_stat + "%" }}
                  ></div>
                </div>
                <p className="col-2 m-0">{pokemonData.stats[3].base_stat}</p>
                <div className="col-4 nameStats d-flex align-items-center justify-content-center">
                  <p className="m-0 lh-1">Defensa especial</p>
                </div>
                <div
                  className="progress col-6 p-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: pokemonData.stats[4].base_stat + "%" }}
                  ></div>
                </div>
                <p className="col-2 m-0">{pokemonData.stats[4].base_stat}</p>
                <div className="col-4 nameStats d-flex align-items-center justify-content-center">
                  <p className="m-0">Velocidad</p>
                </div>
                <div
                  className="progress col-6 p-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar"
                    style={{ width: pokemonData.stats[5].base_stat + "%" }}
                  ></div>
                </div>
                <p className="col-2 m-0">{pokemonData.stats[5].base_stat}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
