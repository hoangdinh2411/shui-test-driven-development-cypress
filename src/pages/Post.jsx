import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Post() {
  const navigate = useNavigate();
  const [post, setPost] = useState({ content: '', author: '' });

  const updatePost = (event) => {
    const { name, value } = event.target;
    setPost((post) => ({ ...post, [name]: value }));
  };

  const submitPost = (event) => {
    event.preventDefault();
    if (post.content === '' || post.author === '') return;
    const allPosts = JSON.parse(localStorage.getItem('posts')) || [];
    localStorage.setItem('posts', JSON.stringify([...allPosts, post]));

    navigate('/');
  };

  console.log(post);
  return (
    <form onSubmit={submitPost} id='post-form'>
      <input
        type='text'
        name='content'
        defaultValue={post.content}
        value={post.content}
        placeholder='Write something'
        id='content'
        onChange={updatePost}
      />
      <input
        value={post.author}
        onChange={updatePost}
        defaultValue={post.author}
        name='author'
        type='text'
        id='author'
      />
      <button type='submit' className='btn btn--public'>
        Public
      </button>
    </form>
  );
}
