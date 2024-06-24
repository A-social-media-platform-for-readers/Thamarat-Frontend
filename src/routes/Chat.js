import { useState, useEffect } from "react";
import AUserMSG from "../Components/AUserMSG/AUserMSG";
import BUserMSG from "../Components/BUserMSG/BUserMSG";
import styles from "../styles/Chat.module.css";
const Chat = () => {
  const jwt = localStorage.getItem("token");

  const [userName, setUserName] = useState(""); // Set the user name according to the user data sent back

  // request user data from backend

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://backend-9s26.onrender.com/auth/user/",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `${jwt}`,
          },
          credentials: "include", // Include cookies with the request
        }
      );

      const content = await response.json();
      setUserName(content);
    })();
  }, [jwt]);

  let result = {
    sender: userName.id,
    receiver: 2,
    content: "string",
  };

  const [msg, setMsg] = useState("");

  const handleSend = async () => {
    result.content = msg;
    let response = await fetch(
      "https://backend-9s26.onrender.com/chat/create/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${jwt}`,
        },
        body: JSON.stringify(result),
      }
    );
    let content = await response.json();
    console.log(content);
  };

  const [rMsg, setRmsg] = useState([]);
  // const [sMsg, setSmsg] = useState([]);

  const handleReceive = async () => {
    let response = await fetch("https://backend-9s26.onrender.com/chat/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `${jwt}`,
      },
      credentials: "include",
    });
    let content = await response.json();
    setRmsg(content);
  };

  useEffect(() => {
    const interval = setInterval(() => handleReceive(), 3000);
    console.log("cycle");

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [rMsg]);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.messeges}`}>
        {rMsg.map((msg) =>
          msg.sender.id === userName.id ? (
            <AUserMSG key={msg.id} msg={msg.content} name={msg.sender.name} />
          ) : (
            <BUserMSG key={msg.id} msg={msg.content} name={msg.sender.name} />
          )
        )}
      </div>
      <div className={`${styles.inputMsg}`}>
        <input
          type="text"
          placeholder="اكتب رسالتك..."
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button onClick={handleSend}>ارسال</button>
      </div>
    </div>
  );
};

export default Chat;
