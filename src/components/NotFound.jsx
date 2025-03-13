import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#ffffdb]">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you are looking for does not exist.</p>
        <button 
          onClick={() => navigate('/home')}
          className="bg-orange-400/70 hover:bg-orange-400/90 text-white font-bold py-2 px-4 rounded cursor-pointer"
        >
          Return Home
        </button>
      </div>
    );
}

export default NotFound;