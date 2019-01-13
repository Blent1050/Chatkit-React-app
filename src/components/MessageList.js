import React from "react";

const DUMMY_DATA = [
  {
    senderId: "blent1050",
    text: "Hello!"
  },
  {
    senderId: "alent1050",
    text: "Hows it going?"
  },
  {
    senderId: "blent1050",
    text: "Great, wby?"
  }
];

class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return (
            <div key={index} className="message">
              <div className="message-username">{message.senderId}</div>
              <div className="message-text">{message.text}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
