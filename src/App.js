import Reader from "components/Reader";
import publicationsList from "publications.json";

function App() {
  return (
    <>
      <div>Hello</div>
      <Reader items={publicationsList} />
    </>
  );
}

export default App;
