import { Route, Routes } from 'react-router-dom';
import Post from './pages/Post';
import Messages from './pages/Messages';
export default function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Messages />} />
      <Route path='/post' element={<Post />} />
    </Routes>
  );
}
