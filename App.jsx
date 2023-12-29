import React, { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList';
import ContactRow from './components/ContactRow';
// Dummy contacts data for demonstration purposes
const dummyContacts = [
  { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', phone: '987-654-3210' },
];



export default function App() {
  // Use the useState hook to initialize the contacts state
  const [contacts, setContacts] = useState(dummyContacts);

  console.log("Contacts: ", contacts);

  return (
    <>
      <ContactList contacts={contacts} />
    </>
  );
}
