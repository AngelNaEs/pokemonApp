import { Navigate, Route, Routes } from "react-router-dom";
import { PokemonLayout, Home } from "../";

export const PokemonRoutes = () => {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };

  return (
    <Routes>
      <Route path="/" element={loadLayout(PokemonLayout, Home)} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
