import React, { useState, useEffect } from 'react';
import ContactRow from './ContactRow';

const dummyContacts = [
    { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
    { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
    { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const ContactList = () => {
    // State for storing contacts
    const [contacts, setContacts] = useState(dummyContacts);

    // Log contacts to the console
    console.log("Contacts: ", contacts);
    
    // Use useEffect to fetch data from the API or use dummy data
    useEffect(() => {
        // For now, let's use the dummyContacts array as the default value
        setContacts(dummyContacts);
    }, []); // The empty dependency array ensures this runs only once on mount

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
                    {/* Add rows dynamically based on contacts data */}
                    {contacts.map((contact) => (
                        <ContactRow key={contact.id} contact={contact} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactList;