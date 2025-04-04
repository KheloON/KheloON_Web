import React, { useState, useEffect } from "react";
const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAppDownloadModal, setShowAppDownloadModal] = useState(false);
  const [loginType, setLoginType] = useState<"admin" | "coach" | null>(null);
  useEffect(() => {
    // Set animation complete after cards have animated in
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);
  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    if (role === "admin" || role === "coach") {
      setLoginType(role as "admin" | "coach");
      setShowLoginModal(true);
    } else if (role === "athlete") {
      setShowAppDownloadModal(true);
    }
  };
  const closeModals = () => {
    setShowLoginModal(false);
    setShowAppDownloadModal(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-50 to-blue-100"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full opacity-20 animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-orange-300 rounded-full opacity-20 animate-[float_12s_ease-in-out_infinite_1s]"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-green-300 rounded-full opacity-20 animate-[float_10s_ease-in-out_infinite_0.5s]"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-[float_9s_ease-in-out_infinite_2s]"></div>
        <div className="absolute bottom-40 right-40 w-28 h-28 bg-yellow-300 rounded-full opacity-20 animate-[float_11s_ease-in-out_infinite_1.5s]"></div>
      </div>
      <div className="w-full max-w-4xl mx-auto relative z-10">
        {/* Header with fade-in animation */}
        <div className="text-center mb-12 animate-[fadeIn_1s_ease-in-out]">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Select Your Role
          </h1>
          <p className="text-xl text-gray-600">
            Choose how you want to use the platform
          </p>
        </div>
        {/* Role selection cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Admin/Manager Card */}
          <RoleCard
            title="Admin (Manager)"
            description="Manage teams, analytics, and platform settings"
            icon="fa-user-tie"
            color="bg-blue-500"
            lightColor="bg-blue-100"
            textColor="text-blue-700"
            borderColor="border-blue-300"
            hoverColor="hover:border-blue-500"
            selected={selectedRole === "admin"}
            onSelect={() => handleRoleSelect("admin")}
            animationDelay="0ms"
            animationComplete={animationComplete}
          />
          {/* Coach Card */}
          <RoleCard
            title="Coach"
            description="Create training plans and monitor athlete progress"
            icon="fa-clipboard-user"
            color="bg-orange-500"
            lightColor="bg-orange-100"
            textColor="text-orange-700"
            borderColor="border-orange-300"
            hoverColor="hover:border-orange-500"
            selected={selectedRole === "coach"}
            onSelect={() => handleRoleSelect("coach")}
            animationDelay="200ms"
            animationComplete={animationComplete}
          />
          {/* Athlete Card */}
          <RoleCard
            title="Athlete"
            description="Track your performance and follow training plans"
            icon="fa-running"
            color="bg-green-500"
            lightColor="bg-green-100"
            textColor="text-green-700"
            borderColor="border-green-300"
            hoverColor="hover:border-green-500"
            selected={selectedRole === "athlete"}
            onSelect={() => handleRoleSelect("athlete")}
            animationDelay="400ms"
            animationComplete={animationComplete}
          />
        </div>
        {/* Selection guidance */}
        <div className="text-center mt-10 text-gray-500 animate-[fadeIn_2s_ease-in-out]">
          <p>You can change your role later in account settings</p>
        </div>
      </div>
      {/* Login Modal */}
      {showLoginModal && <LoginModal type={loginType} onClose={closeModals} />}
      {/* App Download Modal */}
      {showAppDownloadModal && <AppDownloadModal onClose={closeModals} />}
    </div>
  );
};
interface RoleCardProps {
  title: string;
  description: string;
  icon: string;
  color: string;
  lightColor: string;
  textColor: string;
  borderColor: string;
  hoverColor: string;
  selected: boolean;
  onSelect: () => void;
  animationDelay: string;
  animationComplete: boolean;
}
const RoleCard: React.FC<RoleCardProps> = ({
  title,
  description,
  icon,
  color,
  lightColor,
  textColor,
  borderColor,
  hoverColor,
  selected,
  onSelect,
  animationDelay,
  animationComplete,
}) => {
  return (
    <div
      className={`
relative overflow-hidden rounded-xl border-2 ${borderColor} ${hoverColor}
transition-all duration-300 ease-in-out cursor-pointer whitespace-nowrap !rounded-button
${selected ? "border-2 shadow-lg transform scale-[1.02]" : "shadow-md hover:shadow-lg hover:transform hover:scale-[1.02]"}
${animationComplete ? "" : "opacity-0 translate-y-10"}
`}
      style={{
        animation: animationComplete
          ? ""
          : `slideUp 0.6s ease-out ${animationDelay} forwards`,
      }}
      onClick={onSelect}
    >
      <div className={`p-6 ${selected ? lightColor : "bg-white"}`}>
        <div className="flex flex-col items-center text-center">
          <div
            className={`w-20 h-20 ${color} rounded-full flex items-center justify-center mb-4 text-white`}
          >
            <i className={`fas ${icon} text-3xl`}></i>
          </div>
          <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          {selected && (
            <div className="absolute top-4 right-4 bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center animate-[pulse_0.5s_ease-in-out]">
              <i className="fas fa-check"></i>
            </div>
          )}
          <button
            className={`px-6 py-2 rounded-full ${color} text-white font-medium transition-all duration-300 hover:opacity-90 !rounded-button whitespace-nowrap`}
          >
            Select {title}
          </button>
        </div>
      </div>
    </div>
  );
};
interface LoginModalProps {
  type: "admin" | "coach" | null;
  onClose: () => void;
}
const LoginModal: React.FC<LoginModalProps> = ({ type, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [coachId, setCoachId] = useState("");
  const [loginMethod, setLoginMethod] = useState<"email" | "google">("email");
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle authentication here
    console.log("Login submitted", { type, email, password, coachId });
    onClose();
  };
  const handleGoogleLogin = () => {
    // In a real app, you would handle Google authentication here
    console.log("Google login initiated");
    onClose();
  };
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // In a real app, you would handle registration here
      console.log("Registration submitted", { type, name, email, password });
      setShowRegistrationForm(false);
      // Optionally auto-login the user after registration
      // onClose();
    }
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-[fadeIn_0.3s_ease-in-out]">
      <div
        ref={modalRef}
        className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl animate-[slideUp_0.4s_ease-out]"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {type === "admin" ? "Admin Login" : "Coach Login"}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        {type === "admin" && (
          <div className="mb-6">
            <div className="flex space-x-4 mb-6">
              <button
                className={`flex-1 py-3 rounded-lg transition-all duration-300 !rounded-button whitespace-nowrap ${
                  loginMethod === "email"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setLoginMethod("email")}
              >
                <i className="fas fa-envelope mr-2"></i> Email
              </button>
              <button
                className={`flex-1 py-3 rounded-lg transition-all duration-300 !rounded-button whitespace-nowrap ${
                  loginMethod === "google"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setLoginMethod("google")}
              >
                <i className="fab fa-google mr-2"></i> Google
              </button>
            </div>
            {loginMethod === "email" ? (
              <>
                {showRegistrationForm ? (
                  <form onSubmit={handleRegistration}>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="regEmail"
                      >
                        Email Address
                      </label>
                      <input
                        id="regEmail"
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="regPassword"
                      >
                        Password
                      </label>
                      <input
                        id="regPassword"
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      {errors.password && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.password}
                        </p>
                      )}
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="confirmPassword"
                      >
                        Confirm Password
                      </label>
                      <input
                        id="confirmPassword"
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                      {errors.confirmPassword && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors !rounded-button whitespace-nowrap"
                    >
                      Create Account
                    </button>
                    <div className="text-center mt-4">
                      <p className="text-gray-600">
                        Already have an account?{" "}
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowRegistrationForm(false);
                          }}
                          className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                          Login
                        </a>
                      </p>
                    </div>
                  </form>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-medium mb-2"
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <input
                        id="password"
                        type="password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors !rounded-button whitespace-nowrap"
                    >
                      Login
                    </button>
                    <div className="text-center mt-4">
                      <p className="text-gray-600">
                        Don't have an account?{" "}
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowRegistrationForm(true);
                          }}
                          className="text-blue-500 hover:text-blue-700 font-medium"
                        >
                          Create Account
                        </a>
                      </p>
                    </div>
                  </form>
                )}
              </>
            ) : (
              <>
                <button
                  onClick={handleGoogleLogin}
                  className="w-full py-3 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors flex items-center justify-center !rounded-button whitespace-nowrap"
                >
                  <i className="fab fa-google mr-2 text-red-500"></i> Continue
                  with Google
                </button>
                <div className="text-center mt-4">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setLoginMethod("email");
                        setShowRegistrationForm(true);
                      }}
                      className="text-blue-500 hover:text-blue-700 font-medium"
                    >
                      Create Account
                    </a>
                  </p>
                </div>
              </>
            )}
          </div>
        )}
        {type === "coach" && (
          <form onSubmit={handleSubmit} className="mb-6">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="coachId"
              >
                Coach ID
              </label>
              <input
                id="coachId"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your coach ID"
                value={coachId}
                onChange={(e) => setCoachId(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-medium mb-2"
                htmlFor="coachPassword"
              >
                Password
              </label>
              <input
                id="coachPassword"
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <p className="text-sm text-gray-500 mt-2">
                Use the credentials provided by your administrator
              </p>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors !rounded-button whitespace-nowrap"
            >
              Login as Coach
            </button>
          </form>
        )}
        <div className="text-center text-sm text-gray-500">
          <p>Need help? Contact support</p>
        </div>
      </div>
    </div>
  );
};
interface AppDownloadModalProps {
  onClose: () => void;
}
const AppDownloadModal: React.FC<AppDownloadModalProps> = ({ onClose }) => {
  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-[fadeIn_0.3s_ease-in-out]">
      <div
        ref={modalRef}
        className="bg-white rounded-xl p-8 max-w-md w-full shadow-2xl animate-[slideUp_0.4s_ease-out]"
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Download Mobile App
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <i className="fas fa-mobile-alt text-white text-4xl"></i>
          </div>
          <p className="text-gray-700 mb-6">
            To access the athlete features, please download our mobile app using
            the link below.
          </p>
          <div className="flex flex-col space-y-4">
            <a
              href="https://www.upload-apk.com/X8bNqFoK6z1F4mJ"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center !rounded-button whitespace-nowrap"
            >
              <i className="fas fa-download mr-2"></i> Download App
            </a>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-xl">
                <i className="fab fa-apple text-white text-2xl"></i>
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-xl">
                <i className="fab fa-android text-white text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500 border-t border-gray-200 pt-4">
          <p>The app provides the best experience for athletes</p>
        </div>
      </div>
    </div>
  );
};
// Add global animations
const globalStyles = document.createElement("style");
globalStyles.innerHTML = `
@keyframes fadeIn {
from { opacity: 0; }
to { opacity: 1; }
}
@keyframes slideUp {
from {
opacity: 0;
transform: translateY(30px);
}
to {
opacity: 1;
transform: translateY(0);
}
}
@keyframes pulse {
0% { transform: scale(0.8); }
50% { transform: scale(1.1); }
100% { transform: scale(1); }
}
@keyframes float {
0% { transform: translateY(0) rotate(0deg); }
50% { transform: translateY(-20px) rotate(5deg); }
100% { transform: translateY(0) rotate(0deg); }
}
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
-webkit-appearance: none;
margin: 0;
}
`;
document.head.appendChild(globalStyles);
export default App;
