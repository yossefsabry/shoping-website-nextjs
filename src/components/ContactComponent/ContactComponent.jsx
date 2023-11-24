// pages/contact.js
"use client"
import { useState } from 'react';
import styles from "./style.css"

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Here you can add logic to handle the form submission, e.g., send an email, save to a database, etc.

        // For this example, we'll just log the form data to the console.
        console.log('Form submitted:', { name, email, message });

        // Reset form fields and set form submission flag to true.
        setName('');
        setEmail('');
        setMessage('');
        setFormSubmitted(true);
    };

    return (
        <div className="container-contact">
            <h1>Contact Us</h1>
            {isFormSubmitted ? (
                <p className={styles.successMessage}>Thank you for reaching out! We<span>&apos;</span>ll   get back to you soon.</p>
            ) : (
                <form className={styles.form} onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            placeholder='Name...'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            placeholder='Email...'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            placeholder='Massage...'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
};

export default Contact;
