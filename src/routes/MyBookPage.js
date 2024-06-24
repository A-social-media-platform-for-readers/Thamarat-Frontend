import { useState, useEffect, useRef } from "react";
import { Worker } from "@react-pdf-viewer/core";
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { useLocation, Link } from "react-router-dom";
import Seperator from "../Components/Seperator/Seperator";
import styles from "../styles/MyBookPage.module.css";
const MyBookPage = () => {
  const jwt = localStorage.getItem("token");
  const location = useLocation();
  const id = location.pathname.split("/")[4];

  const [book, setBook] = useState([]);
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

  const viewerContainerRef = useRef(null);
  const [dsiplayPDF, setDsiplayPDF] = useState(false);
  const [pdfPath, setPdfPath] = useState("");

  const handleFullScreen = async () => {
    let response = await fetch(
      `https://backend-9s26.onrender.com/books/reading/${id}/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwt}`,
        },
      }
    );
    let content = await response.json();
    console.log(content);
    let deleteResponse = await fetch(
      `https://backend-9s26.onrender.com/books/delete-to-read/${id}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwt}`,
        },
      }
    );
    let deleteContent = await deleteResponse.json();
    console.log(deleteContent);
    const pdfResponse = await fetch(
      `https://backend-9s26.onrender.com/books/${id}/download/`,
      {
        headers: {
          Authorization: `${jwt}`,
        },
        credentials: "include",
      }
    );

    if (!pdfResponse.ok) {
      throw new Error("Failed to download PDF");
    }
    const pdfBlob = await pdfResponse.blob();
    const url = window.URL.createObjectURL(pdfBlob);
    setPdfPath(url);
    if (!dsiplayPDF) {
      setDsiplayPDF(true);
    }
    if (viewerContainerRef.current.requestFullscreen) {
      viewerContainerRef.current.requestFullscreen();
    } else if (viewerContainerRef.current.mozRequestFullScreen) {
      /* Firefox */
      viewerContainerRef.current.mozRequestFullScreen();
    } else if (viewerContainerRef.current.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      viewerContainerRef.current.webkitRequestFullscreen();
    } else if (viewerContainerRef.current.msRequestFullscreen) {
      /* IE/Edge */
      viewerContainerRef.current.msRequestFullscreen();
    }
  };

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) {
      setDsiplayPDF(false);
      console.log("Exited full-screen mode");
    }
  };

  document.addEventListener("fullscreenchange", handleFullscreenChange);

  document.addEventListener("keyup", (e) => {
    if (e.key === "PrintScreen" || (e.key === "s" && e.shiftKey && e.metaKey)) {
      alert("Screenshotting is not allowed!");
      document.body.style.display = "none";
    }
  });

  const list = useRef([]);
  const displayList = useRef(true);
  let listType = location.pathname.split("/")[5];

  if (listType === "reading") {
    list.current = "كتب قرأتها";
  } else if (listType === "toRead") {
    list.current = "كتب أقرأها";
  } else if (listType === "readed") {
    displayList.current = false;
  }

  const handleList = async () => {
    if (listType === "reading") {
      let response = await fetch(
        `https://backend-9s26.onrender.com/books/readed/${id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
        }
      );
      let content = await response.json();
      console.log(content);
      let deleteResponse = await fetch(
        `https://backend-9s26.onrender.com/books/delete-reading/${id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
        }
      );
      let deleteContent = await deleteResponse.json();
      console.log(deleteContent);
    } else if (listType === "toRead") {
      let response = await fetch(
        `https://backend-9s26.onrender.com/books/reading/${id}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
        }
      );
      let content = await response.json();
      console.log(content);
      let deleteResponse = await fetch(
        `https://backend-9s26.onrender.com/books/delete-to-read/${id}/`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
        }
      );
      let deleteContent = await deleteResponse.json();
      console.log(deleteContent);
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`container ${styles.bookSec1} m-auto`}>
        {displayList.current ? (
          <div className="row p-2 d-flex justify-content-center">
            <div
              className={`${styles.addToBTN}`}
              onClick={handleList}
            >{`أضف إلى ${list.current}`}</div>
          </div>
        ) : null}
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
            onClick={handleFullScreen}
          />
          <div
            ref={viewerContainerRef}
            className={`${styles.noSelect} ${
              dsiplayPDF ? `d-block` : `d-none`
            }`}
            style={{ width: "100%", height: "100vh" }}
          >
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
              {dsiplayPDF ? <Viewer fileUrl={pdfPath} /> : null}
            </Worker>
          </div>
        </div>
      </div>
      <div className={`${styles.bookSec2}`}>
        <div className="fw-bold fs-4">{book.title}</div>
        <div className="fs-5">{book.author}</div>
        <Link to={`BookTAL`} className={`${styles.listenBtn}`}>
          <img src={require("../imgs/play-circle.png")} alt="listen" /> استمع
          للكتاب
        </Link>
        <div className="d-flex justify-content-around align-items-center w-100 text-center">
          <div>
            <div className="fw-bold">التقييم</div>
            <div>{book.rate}/5</div>
          </div>
          <div>
            <div className="fw-bold">اللغة</div>
            <div>العربية</div>
          </div>
          <div>
            <div className="fw-bold">المدة</div>
            <div>5 س</div>
          </div>
        </div>
        <Seperator width="col-12" />
        <div>
          <h5>نظرة عامة</h5>
          <p>
            شمكنيبت شبتن شمسينبتشيتبصثهش سمينبتش صث خض بشخ بش بخه تبضشهث تشش
            شسيبت شبت شبت شيسبت شمنتبشثخهش تصثخهب تشيسبت شمنيسبت ضص منسيت بشيسب
            شكسمينبت شضبت شخهصثتخهصثتب شسينتبشمينتب مبنيت.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyBookPage;
