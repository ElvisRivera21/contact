import React, { useState, useEffect } from 'react';
import ContactRow from './components/ContactRow';
import SelectedContact from './components/SelectedContact';
import ContactList from './components/ContactList';


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </>
  );
}