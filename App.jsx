// App.jsx
// App.jsx
import React from 'react';
import ContactList from './components/ContactList';

const App = () => {
  const contacts = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // Add more contacts as needed
  ];

  return (
    <>
      {/* Other components or content */}
      <ContactList contacts={contacts} />
      {/* Other components or content */}
    </>
  );
};

export default App;