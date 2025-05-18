import React from 'react';
import Greeting from './Greeting';
import Message from './Message';

function App() {
  return (
    <div>
      <Greeting name="Олег" />
      <Message text="Жиживо, воно таке жи-жи-во" />
    </div>
  );
}

export default App;