import { useContext, useRef, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { sendPasswordResetEmail, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
// import { toast } from "react-toastify";

const Login = () => {
  const { userLogin, setUser, handleGoogleLogin } = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  };

  const googleLogIn = () => {
    handleGoogleLogin()
      .then(() => {
       
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
       
      });
  };

  const handleForgetPassword = () => {
  

    const email = emailRef.current.value;
    if (!email) {
      setError("provide your email");
    } else {
      sendPasswordResetEmail(auth, email).then(() => {
        alert("email send");
        signOut(auth)
        .then(() => {
          window.location.href = "https://mail.google.com";
        })
      });
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 shadow-2xl w-full max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-bold text-center">Login your Account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              ref={emailRef}
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="input input-bordered w-full"
              required
              
            />
            <button
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-xs absolute right-2 top-12">
              {
                showPassword? <FaEyeSlash/> : <FaEye />
              }
               </button>
           
            {error.login && (
              <label className="label text-sm text-red-500">
                {error.login}
              </label>
            )}
            <label onClick={handleForgetPassword} className="label">
              <a className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Do not Have An Account ?{" "}
          <Link className="text-red-400" to="/auth/register">
            {" "}
            Register
          </Link>
        </p>
        <button onClick={googleLogIn} className="btn btn-primary">
          Google Login
        </button>
      </div>
    </div>
  );
};

export default Login;
