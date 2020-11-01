import React from "react";

import "./Input.css";

const Input = ({ setMessage, sendMessage, message }) => (
  <form className="chat-input">
    <input
      className="chat-input input"
      id="input"
      type="text"
      placeholder="Entrer un message..."
      value={message}
      autocomplete="off"
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyUp={function (e) {
        if (message === "")
          document.querySelector("#input").removeAttribute("good");
        else document.querySelector("#input").setAttribute("good", "");
      }}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <button className="chat-input button" onClick={(e) => sendMessage(e)}>
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="rgba(0,0,0,.38)"
          d="M17,12L12,17V14H8V10H12V7L17,12M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z"
        />
      </svg>
    </button>
  </form>
);

export default Input;
