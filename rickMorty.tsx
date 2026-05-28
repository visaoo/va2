import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div style={styles.container}>
      <h1>Rick and Morty</h1>

      <div style={styles.cards}>
        {characters.map((character) => (
          <div key={character.id} style={styles.card}>
            <img
              src={character.image}
              alt={character.name}
              style={styles.image}
            />

            <h2>{character.name}</h2>

            <p>{character.species}</p>

            <p>{character.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial",
  },

  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  card: {
    background: "#f4f4f4",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },

  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "10px",
  },
};

export default App;
