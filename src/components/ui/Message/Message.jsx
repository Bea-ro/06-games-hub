import React from 'react';
import './Message.css';

const Message = ({ message }) => {
  return (
    <>
      <h2 className="message" dangerouslySetInnerHTML={{ __html: message }}></h2>
    </>
  );
};

export default Message;
