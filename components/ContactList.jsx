import React, { useState, useEffect } from 'react';
import ContactRow from '../components/ContactRow';

const ContactList = ({ setSelectedContactId }) => {
    // State for storing contacts
    const [contacts, setContacts] = useState([]);

    // useEffect for fetching contacts on component mount
    useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch(
                    "https://jsonplace-univclone.herokuapp.com/users"
                );
                const result = await response.json();
                setContacts(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchContacts();
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <ContactRow
                            key={contact.id}
                            contact={contact}
                            onClick={() => setSelectedContactId(contact.id)}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;