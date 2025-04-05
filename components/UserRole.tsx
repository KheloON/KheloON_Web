import React, { useState, useEffect, useRef } from "react";
import { FaUserTie, FaClipboard, FaRunning, FaTimes, FaMobileAlt, FaDownload, FaApple, FaAndroid } from 'react-icons/fa';

interface RoleCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
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

interface LoginModalProps {
  type: 'admin' | 'coach' | null;
  onClose: () => void;
}

interface AppDownloadModalProps {
  onClose: () => void;
}

const RoleCard: React.FC<RoleCardProps> = React.memo(({
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
      className={`p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer transform hover:-translate-y-1 ${borderColor} ${hoverColor} animate-[slideUp_0.6s_ease-out] opacity-0`}
      style={{
        animationDelay,
        animationFillMode: 'forwards',
      }}
      onClick={onSelect}
    >
      <div
        className={`w-16 h-16 rounded-lg mb-4 flex items-center justify-center transition-colors ${selected ? color : lightColor}`}
      >
        <div className={`text-2xl ${textColor}`}>{icon}</div>
      </div>
      <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>{title}</h3>
      <p className="text-gray-600">{description}</p>
      {selected && (
        <div className="absolute top-3 right-3">
          <div className={`w-3 h-3 rounded-full ${color} animate-[pulse_0.5s_ease-in-out]`} />
        </div>
      )}
    </div>
  );
});

RoleCard.displayName = 'RoleCard';

const LoginModal: React.FC<LoginModalProps> = React.memo(({ type, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [coachId, setCoachId] = useState('');
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (type === 'admin') {
      if (!email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Invalid email format';
      }
    } else if (type === 'coach') {
      if (!coachId) {
        newErrors.coachId = 'Coach ID is required';
      }
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if (type === 'admin') {
        console.log('Admin login:', { email, password });
        // Add your admin login logic here
      } else if (type === 'coach') {
        console.log('Coach login:', { coachId, password });
        // Add your coach login logic here
      }
    }
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
    console.log('Google login clicked');
  };

  const handleRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ type, email, password, name });
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
            {type === 'admin' ? 'Admin Login' : 'Coach Login'}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          {type === 'admin' && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          )}
          {type === 'coach' && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Coach ID
              </label>
              <input
                type="text"
                value={coachId}
                onChange={(e) => setCoachId(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.coachId ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your coach ID"
              />
              {errors.coachId && (
                <p className="text-red-500 text-xs mt-1">{errors.coachId}</p>
              )}
            </div>
          )}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>
          {showRegistrationForm && (
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          )}
          {type === 'coach' && !showRegistrationForm && (
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Coach ID
              </label>
              <input
                type="text"
                value={coachId}
                onChange={(e) => setCoachId(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                placeholder="Enter your coach ID"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors !rounded-button whitespace-nowrap mb-4"
          >
            {showRegistrationForm ? 'Register' : 'Login'}
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors !rounded-button whitespace-nowrap mb-4 flex items-center justify-center"
          >
            <FaUserTie className="mr-2" />
            Continue with Google
          </button>
          {type === 'admin' && (
            <button
              type="button"
              onClick={() => setShowRegistrationForm(!showRegistrationForm)}
              className="w-full text-sm text-gray-600 hover:text-gray-800"
            >
              {showRegistrationForm
                ? 'Already have an account? Login'
                : "Don't have an account? Register"}
            </button>
          )}
        </form>
      </div>
    </div>
  );
});

LoginModal.displayName = 'LoginModal';

const AppDownloadModal: React.FC<AppDownloadModalProps> = React.memo(({ onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
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
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-green-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
            <FaMobileAlt className="text-white text-4xl" />
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
              <FaDownload className="mr-2" /> Download App
            </a>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center justify-center w-12 h-12 bg-black rounded-xl">
                <FaApple className="text-white text-2xl" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-green-600 rounded-xl">
                <FaAndroid className="text-white text-2xl" />
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
});

AppDownloadModal.displayName = 'AppDownloadModal';

const App: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAppDownloadModal, setShowAppDownloadModal] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationComplete(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
    if (role === 'athlete') {
      setShowAppDownloadModal(true);
    } else {
      setShowLoginModal(true);
    }
  };

  const closeModals = () => {
    setShowLoginModal(false);
    setShowAppDownloadModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Choose Your Role
          </h1>
          <p className="text-xl text-gray-600">
            Select your role to access the appropriate features
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <RoleCard
            title="Admin"
            description="Manage athletes, coaches, and view analytics"
            icon={<FaUserTie />}
            color="bg-blue-500"
            lightColor="bg-blue-100"
            textColor="text-blue-500"
            borderColor="border-blue-200"
            hoverColor="hover:border-blue-500"
            selected={selectedRole === 'admin'}
            onSelect={() => handleRoleSelect('admin')}
            animationDelay="0s"
            animationComplete={animationComplete}
          />
          <RoleCard
            title="Coach"
            description="Create training plans and track athlete progress"
            icon={<FaClipboard />}
            color="bg-green-500"
            lightColor="bg-green-100"
            textColor="text-green-500"
            borderColor="border-green-200"
            hoverColor="hover:border-green-500"
            selected={selectedRole === 'coach'}
            onSelect={() => handleRoleSelect('coach')}
            animationDelay="0.2s"
            animationComplete={animationComplete}
          />
          <RoleCard
            title="Athlete"
            description="Access workouts and track your progress"
            icon={<FaRunning />}
            color="bg-orange-500"
            lightColor="bg-orange-100"
            textColor="text-orange-500"
            borderColor="border-orange-200"
            hoverColor="hover:border-orange-500"
            selected={selectedRole === 'athlete'}
            onSelect={() => handleRoleSelect('athlete')}
            animationDelay="0.4s"
            animationComplete={animationComplete}
          />
        </div>
      </div>
      {showLoginModal && (
        <LoginModal
          type={selectedRole === 'admin' ? 'admin' : 'coach'}
          onClose={closeModals}
        />
      )}
      {showAppDownloadModal && <AppDownloadModal onClose={closeModals} />}

    </div>
  );
};

import '../styles/animations.css';

export default App;
