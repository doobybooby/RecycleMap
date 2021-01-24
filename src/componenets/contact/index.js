import React, {useState, useEffect} from 'react'
//import "../../css/app.css"
import {db} from "./firebase"

const Contact = () => {

    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('contacts').add({
            name:name,
            email: email,
            message: message
        })
        .then (() => {
            alert('Your message has gone through!')
        })
        .catch(error => {
            alert(error.message);
        });

        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1>Contact form</h1>

            <label>Name</label>
            <input placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />

            <label>Email</label>
            <input placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            />

            <label>Messages</label>
            <input placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            />

            <button type = "submit">Submit</button>
        </form>
    );

};

export default Contact;