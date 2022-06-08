import { useEffect } from 'react';
import { useClippy } from '@react95/clippy';

function App() {
  const { clippy } = useClippy();

  useEffect(() => {
    if (clippy) {
      clippy.play('GetAttention');
    }
  }, [clippy]);

  return null;
}

export default App;
