import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'; 
import { getFirestore, doc, setDoc } from 'firebase/firestore';

function RegistrationComponent() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [college, setCollege] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async () => {
        const authInstance = getAuth();
        try {
            const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);
            const user = userCredential.user;

            // Save additional info to Firestore
            const db = getFirestore();
            await setDoc(doc(db, "users", user.uid), {
                name: name,
                college: college
            });

            alert('Successfully registered and data saved to Firestore!');
        } catch (err) {
            setError(err.message);
        }
    }

    return (
        <div>
            <h2>Register</h2>
            <input 
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="text"
                placeholder="College"
                value={college}
                onChange={(e) => setCollege(e.target.value)}
            />
            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Register</button>
            {error && <p>{error}</p>}
        </div>
    );
}

export default RegistrationComponent;
