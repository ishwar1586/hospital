// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// import { loginSuccess } from "../../store/Slice/auth.slice";
// import authService from "../../services/auth.service";

// import "../../../master_assets/styles/login.css";

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [isCreateMode, setIsCreateMode] = useState(false); // 🔥 first time create
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

  useEffect(() => {
    authService.getSetupStatus()
      .then(({ data }) => setIsCreateMode(Boolean(data.setupRequired)))
      .catch(() => setError("Backend se connection nahi ho pa raha. API server check karein."));
  }, []);

//   const [form, setForm] = useState({
//     username: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     try {
//       setLoading(true);

//       if (isCreateMode) {
//         await authService.createAdmin(form);
//         setIsCreateMode(false); // 🔥 ab login dikhao
//         alert("Admin account created. Please login.");
//       } else {
//         const response = await authService.login(form);
//         dispatch(loginSuccess(response.data));
//         navigate("/dashboard");
//       }
//     } catch (err) {
//       setError(err?.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="login-page">
//       <div className="login-card">
//         <h2 className="login-title">
//           {isCreateMode ? "RKM   Hospital" : "Hospital Login"}
//         </h2>

//         {error && <p className="login-error">{error}</p>}

//         <form onSubmit={handleSubmit}>
          {isCreateMode && (
            <div className="login-group">
              <label>Administrator Name</label>
              <div className="input-box">
                <div className="input-icon"><FaUserMd /></div>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </div>
            </div>
          )}
//           <div className="login-group">
//             <label>Username</label>
//             <input
//               type="text"
//               name="username"
//               value={form.username}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div className="login-group">
//             <label>Password</label>
//             <input
//               type="password"
//               name="password"
//               value={form.password}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <button className="login-btn" disabled={loading}>
//             {loading
//               ? "Please wait..."
//               : isCreateMode
//               ? "Create Admin"
//               : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;




import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaUserMd, FaKey, FaSignInAlt } from "react-icons/fa";
import { ImSpinner8 } from "react-icons/im";

import { loginSuccess } from "../../store/Slice/auth.slice";
import authService from "../../services/auth.service";

import "../../../master_assets/styles/login.css";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isCreateMode, setIsCreateMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    authService.getSetupStatus()
      .then(({ data }) => setIsCreateMode(Boolean(data.setupRequired)))
      .catch(() => setError("Backend se connection nahi ho pa raha. API server check karein."));
  }, []);

  const [form, setForm] = useState({
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);

      if (isCreateMode) {
        await authService.createAdmin(form);
        setIsCreateMode(false);
        alert("Admin account created. Please login.");
      } else {
        const response = await authService.login(form);
        dispatch(loginSuccess(response.data));
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {/* Processing Loader */}
        {/* {loading && (
          <div className="processing-bar">
            <ImSpinner8 className="spinner" />
            <span>Processing..</span>
          </div>
        )} */}

        <h2 className="login-title">
          {isCreateMode ? "RKM Hospital" : "Hospital Login"}
        </h2>

        {error && <p className="login-error">{error}</p>}

        <form onSubmit={handleSubmit}>
          {isCreateMode && (
            <div className="login-group">
              <label>Administrator Name</label>
              <div className="input-box">
                <div className="input-icon"><FaUserMd /></div>
                <input type="text" name="name" value={form.name} onChange={handleChange} required />
              </div>
            </div>
          )}

          {/* Username */}
          <div className="login-group">
            <label>Username</label>

            <div className="input-box">
              <div className="input-icon">
                <FaUserMd />
              </div>

              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="login-group">
            <label>Password</label>

            <div className="input-box">
              <div className="input-icon">
                <FaKey />
              </div>

              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Button */}
          {/* <button className="login-btn" disabled={loading}>
            <FaSignInAlt className="btn-icon" />

            {loading
              ? "Processing..."
              : isCreateMode
              ? "Create Admin"
              : "Login"}
          </button> */}
          

          <button className="login-btn" disabled={loading}>

  {loading ? (
    <div className="btn-loader">
      <ImSpinner8 className="spinner" />
      <span>Processing..</span>
    </div>
  ) : (
    <>
      <FaSignInAlt className="btn-icon" />
      {isCreateMode ? "Create Admin" : "Login"}
    </>
  )}

</button>
        </form>
      </div>
    </div>
  );
};

export default Login;