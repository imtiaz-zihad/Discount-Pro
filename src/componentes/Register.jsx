import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

   
    const newError = {};

   
    if (name.length < 5) {
      newError.name = "Name must be more than 5 characters.";
    }

    // Validate password
    if (password.length < 6) {
      newError.password = "Password must be at least 6 characters long.";
    } else if (!/[A-Z]/.test(password)) {
      newError.password = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      newError.password = "Password must contain at least one lowercase letter.";
    }
    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.error("Error updating profile:", error);
          });
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full shadow-2xl max-w-lg shrink-0 rounded-none p-10">
        <h2 className="text-2xl font-semibold text-center">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered"
              required
            />
          </div>
          {error.name && (
            <label className="label text-xs text-rose-500">{error.name}</label>
          )}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="url"
              placeholder="Your photo URL"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Email"
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
              placeholder="Password"
              className="input input-bordered"
              required
            />
            <button
            onClick={() => setShowPassword(!showPassword)}
            className="btn btn-xs absolute right-2 top-12">
              {
                showPassword? <FaEyeSlash/> : <FaEye />
              }
               </button>
          </div>
          {error.password && (
            <label className="label text-xs text-rose-500">
              {error.password}
            </label>
          )}
          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already Have An Account?{" "}
          <Link className="text-red-400" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
