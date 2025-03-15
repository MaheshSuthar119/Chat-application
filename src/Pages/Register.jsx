import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      // Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      // Update profile (without photoURL)
      await updateProfile(res.user, {
        displayName,
      });

      // Create user in Firestore (without photoURL)
      await setDoc(doc(db, "users", res.user.uid), {
        uid: res.user.uid,
        displayName,
        email,
      });

      // Create empty user chats in Firestore
      await setDoc(doc(db, "userChats", res.user.uid), {});

      // Redirect to Home
      navigate("/");
    } catch (err) {
      console.error(err);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="Display name" />
          <input required type="email" placeholder="Email" />
          <input required type="password" placeholder="Password" />
          <button disabled={loading}>Sign up</button>
          {loading && "Creating account, please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;



// import React, { useState } from "react";
// import Add from "../img/addAvatar.png";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// import { auth, db, storage } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore";
// import { useNavigate, Link } from "react-router-dom";

// const Register = () => {
//   const [err, setErr] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [file, setFile] = useState(null);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       // Create user with Firebase Authentication
//       const res = await createUserWithEmailAndPassword(auth, email, password);
//       const user = res.user;

//       let photoURL = "";

//       if (file) {
//         // Create a unique image name and upload to Firebase Storage
//         const storageRef = ref(storage, `${name}_${Date.now()}`);
//         await uploadBytesResumable(storageRef, file);
//         photoURL = await getDownloadURL(storageRef);
//       }

//       // Update user profile with display name and optional photoURL
//       await updateProfile(user, {
//         displayName: name,
//         photoURL: photoURL,
//       });

//       // Save user data in Firestore
//       await setDoc(doc(db, "users", user.uid), {
//         uid: user.uid,
//         displayName: name,
//         email: email,
//         photoURL: photoURL,
//         createdAt: new Date(),
//       });

//       console.log("User registered successfully!");
//       navigate("/");
//     } catch (error) {
//       console.error("Error registering user:", error);
//       setErr(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="formContainer">
//       <div className="formWrapper">
//         <span className="logo">Chat App</span>
//         <span className="title">Register</span>
//         <form onSubmit={handleSubmit}>
//           <input
//             required
//             type="text"
//             placeholder="Display Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             required
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             required
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <input
//             type="file"
//             id="file"
//             style={{ display: "none" }}
//             onChange={(e) => setFile(e.target.files[0])}
//           />
//           <label htmlFor="file">
//             <img src={Add} alt="Add Avatar" />
//             <span>Add an avatar</span>
//           </label>
//           <button disabled={loading}>Sign up</button>
//           {loading && <p>Uploading and compressing the image, please wait...</p>}
//           {err && <p>Something went wrong. Try again!</p>}
//         </form>
//         <p>
//           Already have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;


// import React, { useState } from "react";
// import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
// // import { getAuth } from "../firebase";
// import { auth, db, storage } from "../firebase";
// import { setDoc, doc } from "firebase/firestore";
// // import { useNavigate } from 'react-router-dom'
// // import {toast} from 'react-toastify'
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import "../style.css";
// import { Link, useNavigate} from "react-router-dom";

// function Register() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState(false);
//   const [file, setFile] = useState(null);
//   const navigate = useNavigate();

//   // const navigate =  useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
  
//     try {
//       // Create user with email and password
//       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user; // Get the user object
//       console.log("User created:", user);
  
//       // Update user profile with display name only
//       await updateProfile(user, {
//         displayName: name,
//       });
  
//       // Store user data in Firestore without photoURL
//       await setDoc(doc(db, "users", user.uid), {
//         uid: user.uid,
//         name: name,
//         email: email,
//         createdAt: new Date(),
//       });
  
//       console.log("User registered successfully and data stored in Firestore.");
//       navigate("/");
//     } catch (err) {
//       setErr(true);
//       console.error("Error registering user:", err.message);
//     }
//   };
  

//   const handleFileChange = (e) => {
//     const selectedFile = e.target.files[0];
//     setFile(selectedFile);
//   };


//   return (
//     <div className='Container'>
//       <div className='signup'>
//         <h2 className='heading'>Chat App</h2>
//         <p className='register'>Registration</p>
//         <form className='form' onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Username"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             //  require={true}
//           />
//           <input
//             type="email"
//             placeholder="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             //  require={true}
//           />
//           <input
//            type="file" 
//            onChange={handleFileChange}
//            />
//           <button>Sign Up</button>
//         </form>
//         <p className='message'>
//           Do you have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Register;
