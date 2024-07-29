import Reader from "components/Reader";
import publicationsList from "./database/publications.json";

function App() {
  return (
    <>
      <Reader items={publicationsList} />
    </>
  );
}

export default App;
