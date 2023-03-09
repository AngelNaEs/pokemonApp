import { Route, Routes } from "react-router-dom";
import { PokemonRoutes } from "../pages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<PokemonRoutes />} />
    </Routes>
  );
};
