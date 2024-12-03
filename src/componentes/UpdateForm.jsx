import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const UpdateForm = () => {
  const { user, setUser } = useContext(AuthContext); 
  const [name, setName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

  
    const updatedUser = { ...user, displayName: name, photoURL };
    setUser(updatedUser); 

        navigate("/profile");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2">Photo URL</label>
            <input
              type="text"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
              className="input input-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateForm;
