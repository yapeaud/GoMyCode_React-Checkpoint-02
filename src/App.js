import PlayersList from "./PlayersList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <section style={{ padding: "20px", textAlign: "center" }}>
        <h1>Liste des Joueurs</h1>
        <PlayersList />
      </section>
    </>
  );
}

export default App;
