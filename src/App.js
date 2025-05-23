import "./App.scss";

import CardGrid from "./components/card/CardGrid";

function App() {
  return (
    <div className="App">
      <CardGrid>
        <CardGrid.Card title="Ciao sono Giorgio" size="vertical" glass />
        <CardGrid.Card title="seconda card" glass size="small" />
        <CardGrid.Card title="terza card" glass />
        <CardGrid.Card title="quarta card" glass />
        <CardGrid.Card title="quinta card" glass />
      </CardGrid>
    </div>
  );
}

export default App;
