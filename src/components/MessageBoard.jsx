import { useSelector, useDispatch } from "react-redux";
import {
  addMessage,
  deleteMessage,
  selectMessages,
} from "../slices/messageBoardSlice";

import { useState } from "react";

function MessageBoard() {
  const [messageInput, setMessageInput] = useState("");

  const dispatch = useDispatch();

  // define message component.
  function Message({ children, id }) {
    return (
      <div className="message">
        <h1>{children}</h1>
        <button
          className="delete-button"
          onClick={() => dispatch(deleteMessage(id))}
        >
          x
        </button>
      </div>
    );
  }

  const messages = useSelector(selectMessages);

  function handleInputChange(event) {
    setMessageInput(event.target.value);
  }

  const messagesList = messages.map(({ id, message }) => {
    return (
      <Message key={id} id={id}>
        {message}
      </Message>
    );
  });

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={messageInput}
            onChange={handleInputChange}
          />
        </label>
        <button
          className="submit-message-button"
          onClick={() => dispatch(addMessage(messageInput))}
        >
          Submit
        </button>
      </div>
      <div className="board">{messagesList}</div>
    </div>
  );
}

export default MessageBoard;
