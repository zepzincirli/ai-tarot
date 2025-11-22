import { useState } from "react";
import { getTarotReading } from "./api/tarotService";

const cards = [
  "The Fool",
  "The Magician",
  "The High Priestess",
  "The Empress",
  "The Emperor",
  "The Lovers",
  "Strength",
  "The Hermit",
  "Wheel of Fortune",
  "The Sun",
];

function App() {
  const [selectedCard, setSelectedCard] = useState("");
  const [reading, setReading] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleDraw() {
    setLoading(true);
    setReading("");

    const randomCard = cards[Math.floor(Math.random() * cards.length)];
    setSelectedCard(randomCard);

    const result = await getTarotReading(randomCard);
    setReading(result);

    setLoading(false);
  }

  function getCardImage(card) {
    const map = {
      "The Fool": "/cards/00_Fool.jpg",
      "The Magician": "/cards/01_Magician.jpg",
      "The High Priestess": "/cards/02_High_Priestess.jpg",
      "The Empress": "/cards/03_Empress.jpg",
      "The Emperor": "/cards/04_Emperor.jpg",
      "The Hierophant": "/cards/05_Hierophant.jpg",
      "The Lovers": "/cards/06_Lovers.jpg",
      "The Chariot": "/cards/07_Chariot.jpg",
      Strength: "/cards/08_Strength.jpg",
      "The Hermit": "/cards/09_Hermit.jpg",
      "Wheel of Fortune": "/cards/10_Wheel_of_Fortune.jpg",
      Justice: "/cards/11_Justice.jpg",
      "The Hanged Man": "/cards/12_Hanged_Man.jpg",
      Death: "/cards/13_Death.jpg",
      Temperance: "/cards/14_Temperance.jpg",
      "The Devil": "/cards/15_Devil.jpg",
      "The Tower": "/cards/16_Tower.jpg",
      "The Star": "/cards/17_Star.jpg",
      "The Moon": "/cards/18_Moon.jpg",
      "The Sun": "/cards/19_Sun.jpg",
      Judgement: "/cards/20_Judgement.jpg",
      World: "/cards/21_World.jpg",
    };

    return map[card] || null;
  }

  return (
    <>
      <div className="stars"></div>
      <div
        style={{
          padding: 40,
          maxWidth: 600,
          margin: "0 auto",
          textAlign: "center",
          fontFamily: "Arial",
        }}
      >
        <h1>🔮 AI Tarot</h1>

        <button
          className="glow-button"
          onClick={handleDraw}
          style={{
            padding: "14px 30px",
            borderRadius: "12px",
            background: "white",
            border: "2px solid #222",
            cursor: "pointer",
            fontSize: "18px",
            fontWeight: "600",
            transition: "0.3s ease",
          }}
        >
          Draw a Card
        </button>

        {selectedCard && (
          <div style={{ marginTop: 20 }}>
            <h2>🃏 Selected Card</h2>

            <div className="card-container">
              <img
                src={getCardImage(selectedCard)}
                alt={selectedCard}
                className={`card-flip ${selectedCard ? "show" : ""}`}
                style={{
                  width: "200px",
                  marginTop: "10px",
                  borderRadius: "12px",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.25)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.12)";
                  e.target.style.boxShadow = "0 12px 24px rgba(0,0,0,0.35)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0 6px 18px rgba(0,0,0,0.25)";
                }}
              />
            </div>

            <div
              style={{
                marginTop: "15px",
                marginBottom: "25px",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "15px 25px",
                borderRadius: "10px",
                background: "linear-gradient(90deg, #1e1e1e, #3d3d3d)",
                color: "#fff",
                fontSize: "22px",
                width: "220px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
                display: "block",
              }}
            >
              {selectedCard}
            </div>
          </div>
        )}

        {loading && <p style={{ marginTop: 20 }}>Preparing reading...</p>}

        {reading && (
          <div
            className="fade-in"
            style={{
              background: "#ffffff",
              padding: "25px",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
              marginTop: "30px",
              maxWidth: "700px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <h3>🔮 Tarot Reading</h3>
            <p>{reading}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
