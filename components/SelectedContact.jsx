// In SelectedContact.jsx
import React, { useState, useEffect } from 'react';

function SelectedContact({ contactId }) {
    const [selectedContact, setSelectedContact] = useState(null);

    useEffect(() => {
        // Fetch data for the selected contact using contactId
        const fetchSelectedContact = async () => {
            try {
                const response = await fetch(
                    `https://jsonplace-univclone.herokuapp.com/users/${contactId}`
                );
                const result = await response.json();
                setSelectedContact(result);
            } catch (error) {
                console.error(error);
            }
        };

        console.log(`Fetching details for contactId: ${contactId}`);
        fetchSelectedContact();
    }, [contactId]);

    return (
        <div>
            <h2>Contact Details</h2>
            {selectedContact ? (
                <div>
                    <p>Name: {selectedContact.name}</p>
                    <p>Email: {selectedContact.email}</p>
                    <p>Phone: {selectedContact.phone}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default SelectedContact;