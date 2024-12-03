import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center text-center">
      <div className="w-full h-64 bg-blue-500 flex justify-center items-center">
        <h1 className="text-white text-4xl font-bold">
          Welcome, {user?.displayName || "User"}!
        </h1>
      </div>
      <div className="mt-10 px-5 bg-white rounded-lg flex justify-center items-center flex-col shadow-md p-6">
        <div className="flex justify-center items-center">
          <img
            src={user?.photoURL}
            alt="Profile"
            className="w-24 h-24 rounded-full object-cover border border-gray-200"
          />
        </div>
        <div className="mt-8">
          <p className="font-bold text-xl">{user?.displayName || "User Name"}</p>
        </div>
        <div>
          <p className="text-gray-400 text-xl">{user?.email || "Email"}</p>
        </div>
        <div>
          <button
            className="btn btn-secondary mt-8"
            onClick={() => navigate("/profile/update")}
          >
            Update Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
