import React from 'react';
import Contacts from './Contacts'

function App() {
  return (
    <div className="App">
        <Contacts people={[
          {name: 'Renato'},
          {name: 'Carol'},
        ]} />
        <Contacts people={[
          {name: 'Dan'},
          {name: 'Isa'},
        ]}
         />
    </div>
  );
}

export default App;
