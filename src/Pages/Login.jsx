import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../firebase";
// import { toast } from "react-toastify";
// import "../style.css";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [err, setErr] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     try {
//       await signInWithEmailAndPassword(auth, email, password);
//       toast.success("User logged in successfully", { position: "top-center" });
//       navigate("/");
//     } catch (error) {
//       console.error("Login error:", error.message);
//       setErr(true);
//       toast.error("Invalid email or password", { position: "top-center" });
//     }
//   };

//   return (
//     <div className="formContainer">
//       <div className="formWrapper">
//         <span className="logo">Chat App</span>
//         <span className="title">Login</span>
//         <form onSubmit={handleSubmit} className="form">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           <button type="submit">Sign in</button>
//           {err && <span className="error-message">Something went wrong</span>}
//         </form>
//         <p className="message">
//           Don't have an account? <Link to="/register">Register</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


// // import React, { useState } from "react";
// // import { signInWithEmailAndPassword } from "firebase/auth";
// // import { auth } from "../firebase";
// // import { toast } from "react-toastify";
// // import { Link, useNavigate } from "react-router-dom";
// // import "../style.css";

// // function Login() {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault(); // Prevent page reload
    
// //     try {
// //       await signInWithEmailAndPassword(auth, email, password);
// //       console.log("User logged in Successfully");      
// //       toast.success("User logged in Successfully", { position: "top-center" });
// //       navigate("/");
// //     } catch (error) {
// //       console.log(error.message);
// //       toast.error(error.message, { position: "top-center" });
// //     }
// //   };

// //   return (
// //     <div className="Container">
// //       <div className="signup">
// //         <h2 className="heading">Chat App</h2>
// //         <p className="register">Login</p>
// //         <form className="form" onSubmit={handleSubmit}>
// //           <input
// //             type="email"
// //             placeholder="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //           <input
// //             type="password"
// //             placeholder="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //           <button type="submit">Sign in</button>  
// //         </form>

// //         <p className="message">
// //           You don't have an account? <Link to="/Register">Register</Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;
