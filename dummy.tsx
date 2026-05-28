import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div style={styles.container}>
      <h1>Produtos</h1>

      <div style={styles.cards}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            <img
              src={product.thumbnail}
              alt={product.title}
              style={styles.image}
            />

            <h2>{product.title}</h2>

            <p>R$ {product.price}</p>
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
    height: "200px",
    objectFit: "cover",
    marginBottom: "10px",
  },
};

export default App;
