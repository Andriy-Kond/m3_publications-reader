import Reader from "components/Reader";
import publicationsList from "database/jsconfig.json";

function App() {
  return (
    <>
      <div>Hello</div>
      <Reader items={publicationsList} />
    </>
  );
}

export default App;
