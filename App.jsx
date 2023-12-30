import React, { useState } from 'react';
import ContactList from './components/ContactList';
import SelectedContact from './components/SelectedContact';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {/* Step 6: Conditionally render the ContactList or SelectedContact based on selectedContactId */}
      {selectedContactId ? (
        // Step 7 and 8: Use a ternary statement to conditionally render a div or the ContactList
        <div>
          {/* Display a short message when selectedContactId is truthy */}
          <p>Selected Contact View: </p>
        </div>
      ) : (
        // Render the ContactList component when selectedContactId is falsy
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}



export default App;