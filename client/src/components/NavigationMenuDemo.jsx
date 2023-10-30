import React, { useState } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AvatarIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal"; // Import the modal library
import LoginSignupDialog from "../components/LoginSignupDialog";
function DropdownMenuDemo() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleSignup = () => {
    <LoginSignupDialog />; // Open the dialog when Signup is clicked
  };

  const closeDialog = () => {
    setIsDialogOpen(false); // Close the dialog when needed
  };

  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <DropdownMenu.Root>
        {/* Trigger button */}
        <DropdownMenu.Trigger asChild>
          <button
            className="rounded-full w-[35px] h-[35px] inline-flex items-center justify-center text-violet11 bg-white shadow-[0_2px_10px] shadow-blackA4 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-black"
            aria-label="Customize options"
          >
            <AvatarIcon className="h-10 w-10 text-crimson cursor-pointer" />
          </button>
        </DropdownMenu.Trigger>

        {/* Dropdown content */}
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            className="min-w-[150px] bg-white rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade"
            sideOffset={5}
          >
            <DropdownMenu.Item className="text-[13px] leading-none text-violet11 px-2 py-1 cursor-pointer">
              <li>
                <button onClick={handleSignOut}>Sign Out</button>
              </li>
            </DropdownMenu.Item>
            <DropdownMenu.Item
              onClick={() => handleNavigate("/new-window")}
              className="text-[13px] leading-none text-violet11 px-2 py-1 cursor-pointer"
            >
              New Window
            </DropdownMenu.Item>
            <DropdownMenu.Item
              onClick={handleSignup}
              className="text-[13px] leading-none text-violet11 px-2 py-1 cursor-pointer"
            >
              Signup
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>

      {/* Dialog component */}
      <Modal
        isOpen={isDialogOpen}
        onRequestClose={closeDialog}
        contentLabel="Signup Dialog"
      >
        {/* Your Signup Form and Content */}
        <h2>Signup Form</h2>
        {/* Add your signup form and content here */}
        <button onClick={closeDialog}>Close</button>
      </Modal>
    </div>
  );
}

export default DropdownMenuDemo;
