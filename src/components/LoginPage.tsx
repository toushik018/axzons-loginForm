"use client";

import { useState } from "react";
import { MapPin, Building2, Eye, EyeOff, User, Lock } from "lucide-react";
import Image from "next/image";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: login logic here
    console.log("Login attempted with:", username, password);
  };

  return (
    <div className="relative min-h-screen bg-gray-50 flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Title at the top */}
      <h1 className="absolute top-32 sm:top-32 left-0 sm:left-1/2 w-full sm:w-auto sm:transform sm:-translate-x-1/2 text-gray-600 text-xl sm:text-3xl font-semibold text-center mb-8 px-4 sm:px-0">
        Axzons Home care Admin Dashboard login
      </h1>

      <div className="absolute top-4 left-4 sm:left-8 z-10">
        <Image
          src="/axzons-logo.png"
          width={200}
          height={200}
          alt="Logo"
          className="w-24 sm:w-32 md:w-52"
        />
      </div>

      <div className="absolute inset-0 z-0 opacity-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 left-0 w-full"
        >
          <path
            fill="#7E22CE"
            fillOpacity="1"
            d="M0,96L80,80C160,64,320,32,480,16C640,0,800,0,960,32C1120,64,1280,128,1360,160L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="bg-white p-8 sm:p-10 rounded-lg shadow-lg w-full max-w-lg z-10 mt-24 sm:mt-0 min-h-[400px] flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-800 mb-8">
          LOG IN
        </h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="relative">
            <User className="absolute top-2 left-0 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Username"
              className="w-full pl-8 pb-3 text-lg text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-[#7E22CE] transition-colors"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="relative">
            <Lock className="absolute top-2 left-0 text-gray-400 w-6 h-6" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-8 pr-10 pb-3 text-lg text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-[#7E22CE] transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-0 top-2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? (
                <EyeOff className="w-6 h-6" />
              ) : (
                <Eye className="w-6 h-6" />
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-[#7E22CE] text-white py-3 rounded-md text-lg font-semibold hover:bg-[#6B21A8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#7E22CE] focus:ring-opacity-50"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
