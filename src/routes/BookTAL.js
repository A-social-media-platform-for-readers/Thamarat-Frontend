import styles from "../styles/MyBookPage.module.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BookTAL = () => {
  const jwt = localStorage.getItem("token");
  const location = useLocation();
  const id = location.pathname.split("/")[4];

  const [book, setBook] = useState([]);
  const text = "مرحبا بكم في مكتبة ثمرات";
  const [translated, setTranslated] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://backend-9s26.onrender.com/books/${id}/`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          credentials: "include",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const content = await response.json();
      setBook(content);
    })();
  }, [jwt, id]);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `https://backend-9s26.onrender.com/AI/translation/${text}/en/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const content = await response.json();
      setTranslated(content);
    })();
  });

  const textInput = text;
  const handleTTS = async () => {
    const text = textInput.trim();

    if (!text) {
      alert("Please enter text to convert.");
      return;
    }

    const CHUNK_SIZE = 1024;
    const url =
      "https://api.elevenlabs.io/v1/text-to-speech/2EiwWnXFnvU5JabPnv8n";

    const headers = new Headers({
      Accept: "audio/mpeg",
      "Content-Type": "application/json",
      "xi-api-key": "6792be79abb157112d810b33319c29ea", // Replace with your actual API key
    });

    const data = JSON.stringify({
      text,
      model_id: "eleven_multilingual_v2",
      voice_settings: { stability: 0.5, similarity_boost: 0.5 },
    });

    try {
      const response = await fetch(url, {
        method: "POST",
        headers,
        body: data,
      });

      if (!response.ok) {
        throw new Error(`API request failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const objectURL = URL.createObjectURL(blob);

      // Assuming you have an element with id "audio-player" (optional)
      const audioPlayer = document.getElementById("audio-player");
      if (audioPlayer) {
        audioPlayer.src = objectURL;
        audioPlayer.controls = true; // Enable playback controls
        audioPlayer.play(); // Optionally start playback automatically
      } else {
        // If no audio player, create a download link
        const link = document.createElement("a");
        link.href = objectURL;
        link.download = "output.mp3";
        link.textContent = "Download Audio";
        document.body.appendChild(link);
        link.click(); // Simulate a click to trigger download
        document.body.removeChild(link); // Remove temporary link
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during conversion. Please try again later.");
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`container ${styles.bookSec1} m-auto`}>
        <div className="row p-2 d-flex justify-content-center">
          <img
            src={require("../imgs/translateWhite.png")}
            alt="translate"
            style={{
              width: "40px",
              cursor: "pointer",
              backgroundColor: "#6B74A3",
              borderRadius: "10px",
              margin: "0 10px",
              padding: "5px",
            }}
          />
          <img
            src={require("../imgs/listenWhite.png")}
            alt="listen"
            style={{
              width: "40px",
              cursor: "pointer",
              backgroundColor: "#6B74A3",
              borderRadius: "10px",
              margin: "0 10px",
              padding: "5px",
            }}
          />
        </div>
        <div className="row p-2 d-flex justify-content-center">
          <img
            src={require("../imgs/book1.png")}
            alt="book"
            style={{ width: "70%", cursor: "pointer" }}
          />
        </div>
        <div className="row p-2 d-flex justify-content-center text-center">
          <div className="fw-bold fs-4">{book.title}</div>
          <div>{book.author}</div>
        </div>
        <div className="row p-2 d-flex justify-content-center text-center">
          <button
            onClick={handleTTS}
            className={`${styles.listenBtn} mb-3 w-50`}
          >
            <img src={require("../imgs/play-circle.png")} alt="listen" /> ابدأ
            بالسماع
          </button>
          <audio id="audio-player" controls></audio>
          {/* <div>
            <button onclick="document.getElementById('player').play()">
              Play
            </button>
            <button onclick="document.getElementById('player').pause()">
              Pause
            </button>
            <button onclick="document.getElementById('player').volume += 0.1">
              Vol +
            </button>
            <button onclick="document.getElementById('player').volume -= 0.1">
              Vol -
            </button>
          </div> */}
        </div>
      </div>
      <div className={`${styles.bookSec2}`}>
        <p>{translated}</p>
      </div>
    </div>
  );
};

export default BookTAL;
