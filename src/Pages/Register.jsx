import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db, storage } from "../firebase"; // Import Firebase storage
import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import styles from './Registration.module.css';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [image, setImage] = useState(null); // State to hold selected image

  const handleImageChange = (e) => {
    // Set selected image when file input changes
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;

      if (user) {
        // Upload image to Firebase Storage
        const storageRef = storage.ref();
        const fileRef = storageRef.child(`profile-images/${user.uid}/${image.name}`);
        await fileRef.put(image);

        // Get download URL for uploaded image
        const imageUrl = await fileRef.getDownloadURL();

        // Save user data to Firestore
        await setDoc(doc(db, "User", user.uid), {
          email: user.email,
          Username: name,
          imageUrl: imageUrl, // Save image URL to Firestore
        });

        // Display success message
        toast.success("User Registered Successfully");
      }
    } catch (error) {
      console.error(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.signup}>
        <h2 className={styles.heading}>Chat App</h2>
        <p className={styles.register}>Registration</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Username'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="file"
            onChange={handleImageChange} // Call handleImageChange when file input changes
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className={styles.message}>Do you have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Register;

// import React, { useState } from 'react'
// import { createUserWithEmailAndPassword } from "firebase/auth";
// // import { getAuth } from "../firebase";
// import { auth, db } from "../firebase";
// import { setDoc, doc } from 'firebase/firestore'
// // import { useNavigate } from 'react-router-dom'
// import {toast} from 'react-toastify'

// import styles from './Registration.module.css'
// import { Link } from 'react-router-dom';

// function Register() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
 
//   // const navigate =  useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault()
    
//     try{
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       console.log(userCredential)
//       const user = auth.currentUser;
//       if(user){
//         await setDoc(doc(db, "User", user.uid), {
//           email: user.email,
//           Username: name,

//         })
//       }
//       console.log(user);
//       console.log("User Register Successfully");
//       // localStorage.setItem('token', user.accessToken);
//       // localStorage.setItem('user', JSON.stringify(user));
//       // navigate('/')
//       // toast.success("User Registered Successfully" );
//     }
//     catch(error){
//       console.log(error.message);
//       // toast.error(error.message);
//     }
//   }
//   return (
//     <div className={styles.Container}>
//       <div className={styles.signup}>
//       <h2 className={styles.heading}>Chat App</h2>
//       <p className={styles.register}>Registration</p>
//       <form className={styles.form} onSubmit={handleSubmit}>
//         <input
//          type="text" 
//          placeholder='Username'
//          value={name}
//          onChange={(e) => setName(e.target.value)}
//         //  require={true}
//         />
//         <input
//          type="email" 
//          placeholder='email'
//          value={email}
//          onChange={(e) => setEmail(e.target.value)}
//          />
//         <input
//          type="password"
//          placeholder='password'
//          value={password}
//          onChange={(e) => setPassword(e.target.value)}
//         //  require={true}
//          />
//         <input type="file"/>
//         <button>Sign Up</button>
//       </form>
//       <p className={styles.message}>Do you have an account? <Link to="/login">Login</Link></p>
//       </div>
//     </div>
//   )
// }

// export default Register