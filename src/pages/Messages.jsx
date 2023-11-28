import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Messages() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const messages = [
      {
        content: 'Hello world',
        author: 'John',
      },
      {
        content: 'Lorem ipsum dolor sit amet',
        author: 'Jane',
      },
    ];
    setMessages(messages);
  }, []);
  return (
    <>
      <button className='btn--new' onClick={() => navigate('/post')}>
        Post new message
      </button>
      <ul className='messages'>
        {messages.map((m, index) => {
          return (
            <li key={index} className='message' data-id='message'>
              <div className='message__info'>
                <p className='content'>{m.content}</p>
                <p className='author'>{m.author}</p>
              </div>
              <div className='message__actions'>
                <button className='btn btn--edit'>Edit</button>
                <button className='btn btn--delete'>Delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
