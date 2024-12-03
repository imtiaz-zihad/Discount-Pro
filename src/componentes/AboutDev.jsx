import { FaGithub, FaLinkedin } from "react-icons/fa";

const AboutDev = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
      <div className="card bg-white shadow-lg p-8 rounded-lg max-w-2xl text-center">
        {/* Profile Image */}
        <div className="mb-6">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQFVhfMk1rPRfw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1713583544005?e=1737590400&v=beta&t=-U7xvqH9-Q4Rkmg9_irkxIcBmzJ2Mq5aTMaNqS5ltf8" 
            alt="Developer"
            className="w-32 h-32 rounded-full mx-auto shadow-md"
          />
        </div>

        <h1 className="text-3xl font-bold mb-4">About the Developer</h1>
        <p className="text-gray-600 mb-6">
          Hi! I’m a passionate software developer who loves creating innovative and user-friendly web applications. 
          With a strong foundation in JavaScript, React, and modern development tools, I enjoy solving complex problems 
          and delivering high-quality solutions.
        </p>

        {/* Personal Details */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-semibold">Personal Information</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li><strong>Name:</strong> Imtiaz Hossen</li>
            <li><strong>Email:</strong> <a href="mailto:mdimtiazzihad@gmail.com" className="text-blue-500">mdimtiazzihad@gmail.com</a></li>
            <li><strong>Location:</strong> Dhanmondi, Dhaka</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-semibold">Skills & Expertise</h2>
          <ul className="list-disc ml-6 mt-2 text-gray-600">
            <li>Proficient in JavaScript, React.js, and Java</li>
            <li>Experience with Firebase, MongoDB, and REST APIs</li>
            <li>Skilled in responsive design using Tailwind CSS and Bootstrap</li>
            <li>Familiar with Git, GitHub, and version control best practices</li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex justify-center space-x-4">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/imtiaz-hossen/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/imtiaz-zihad"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutDev;
