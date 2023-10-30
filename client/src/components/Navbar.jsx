import React, { useState } from "react";
import { AvatarIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import logo from "../assets/logo.png";
import LoginSignupDialog from "./LoginSignupDialog";
import DropdownMenuDemo from "../dumped codes/DropdownMenuDemo";
import NavigationMenuDemo from "./NavigationMenuDemo";
import { useNavigate } from "react-router-dom";
function SearchBar({ placeholder, onSearch }) {
  return (
    <div className="flex items-center rounded-full bg-white-400 px-3 shadow-md border border-gray-100">
      <div className="rounded-full w-8 h-8 bg-crimson flex items-center justify-center">
        <MagnifyingGlassIcon className="h-5 w-5 text-white font-bold" />
      </div>
      <input
        id="search"
        className="bg-transparent p-2 text-gray-700 outline-none w-96 sm:w-60 md:w-80 h-12"
        type="text"
        placeholder={placeholder}
        onKeyUp={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

function AvatarDropdown() {
  return (
    <div className="relative group">
      <NavigationMenuDemo />
    </div>
  );
}

function Navbar() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();
  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div>
      <div className="px-4 sm:px-20 shadow-sm">
        <div className="flex items-center justify-between max-w-8xl mx-auto p-5 relative">
          <div className="h-35 w-35">
            <img
              onClick={() => navigate("/")}
              src={logo}
              alt="Logo"
              className="h-15 w-20 cursor-pointer"
            />
          </div>

          <SearchBar
            placeholder="Search..."
            onSearch={(query) => console.log(query)}
          />
          <button>
            <LoginSignupDialog />
          </button>
          <div className="relative group">
            <AvatarDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
