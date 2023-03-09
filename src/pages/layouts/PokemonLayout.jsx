import { TopBar } from "../../components";

export const PokemonLayout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};
