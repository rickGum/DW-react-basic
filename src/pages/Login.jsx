import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/dashboard");
  };

  return (
    <div className="max-w-md mx-auto mt-20 text-center">

      <h1 className="text-3xl font-bold mb-5">
        Login
      </h1>

      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-6 py-3 rounded"
      >
        Login
      </button>

    </div>
  );
}

export default Login;