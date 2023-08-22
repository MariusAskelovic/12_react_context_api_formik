import { useContext } from 'react';
import AuthContext from '../store/AuthContext';

export default function Posts() {
  const ctx = useContext(AuthContext);
  return (
    <div>
      <h2>Posts</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum error, quod
        ullam aut at corporis mollitia incidunt hic perferendis doloribus
        dolorum adipisci qui officiis optio, sed aspernatur saepe molestias
        culpa.
      </p>
      <button onClick={ctx.logout}>Logout</button>
    </div>
  );
}
