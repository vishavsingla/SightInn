import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Tabs from "@radix-ui/react-tabs";
import { Cross2Icon } from "@radix-ui/react-icons";
import axiosClient from "../utils/axiosClient";
import { Link, useNavigate } from "react-router-dom";
import { KEY_ACCESS_TOKEN, setItem } from "../utils/localStorageManager";

export default function LoginSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await axiosClient.post("/auth/login", {
        email,
        password,
      });
      if (response.status === "ok" && response.statusCode === 200) {
        const accessToken = response.result.accessToken;
        setItem(KEY_ACCESS_TOKEN, accessToken);
        navigate("/admin");
      } else {
        console.error("Login failed:", response.error);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  async function handleSignup(e) {
    e.preventDefault();
    try {
      const response = await axiosClient.post("/auth/signup", {
        name,
        email,
        password,
      });
      console.log("Sign-up result:", response);
    } catch (error) {
      console.error("Sign-up error:", error);
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-violet11 shadow border border-grau-100 hover:bg-mauve3 inline-flex h-[45px] items-center justify-center rounded-[4px] bg-white px-[20px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          Sign Up
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 opacity-1 backdrop-blur-[5px] transition-opacity duration-300 ease-in-out" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[600px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%7%_/_35%)_0px_10px_38px-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px-15px] focus:outline-none">
          <Tabs.Root defaultValue="signup">
            <Tabs.List
              className="shrink-0 flex border-b border-mauve6"
              aria-label="Sign Up or Login"
            >
              <Tabs.Trigger
                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                value="signup"
              >
                Sign Up
              </Tabs.Trigger>
              <Tabs.Trigger
                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                value="login"
              >
                Login
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              value="signup"
            >
              <p className="mb-5 text-mauve11 text-[16px] leading-normal">
                Create your account. It's quick and easy.
              </p>
              <form onSubmit={handleSignup}>
                <fieldset className="mb-[20px]">
                  <label
                    className="text-violet11 w-[90px] text-right text-[16px]"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[45px] w-full flex-1 items-center justify-center rounded-[4px] px-[15px] text-[16px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </fieldset>
                <fieldset className="mb-[20px]">
                  <label
                    className="text-violet11 w-[90px] text-right text-[16px]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[45px] w-full flex-1 items-center justify-center rounded-[4px] px-[15px] text-[16px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="mb-[20px]">
                  <label
                    className="text-violet11 w-[90px] text-right text-[16px]"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[45px] w-full flex-1 items-center justify-center rounded-[4px] px-[15px] text-[16px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="password"
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  type="submit"
                  className="bg-crimson text-white hover:bg-red4 focus:shadow-red7 inline-flex h-[45px] w-full items-center justify-center rounded-[4px] px-[20px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                  Sign Up
                </button>
              </form>
            </Tabs.Content>
            <Tabs.Content
              className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              value="login"
            >
              <p className="mb-5 text-mauve11 text-[16px] leading-normal">
                Welcome back. Please log in.
              </p>
              <form onSubmit={handleLogin}>
                <fieldset className="mb-[20px]">
                  <label
                    className="text-violet11 w-[90px] text-right text-[16px]"
                    htmlFor="loginEmail"
                  >
                    Email
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[45px] w-full flex-1 items-center justify-center rounded-[4px] px-[15px] text-[16px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </fieldset>
                <fieldset className="mb-[20px]">
                  <label
                    className="text-violet11 w-[90px] text-right text-[16px]"
                    htmlFor="loginPassword"
                  >
                    Password
                  </label>
                  <input
                    className="text-violet11 shadow-violet7 focus:shadow-violet8 inline-flex h-[45px] w-full flex-1 items-center justify-center rounded-[4px] px-[15px] text-[16px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="loginPassword"
                    name="password"
                    type="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </fieldset>
                <button
                  type="submit"
                  className="bg-crimson text-white hover:bg-red4 focus:shadow-red7 inline-flex h-[45px] w-full items-center justify-center rounded-[4px] px-[20px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
                >
                  Log In
                </button>
              </form>
            </Tabs.Content>
          </Tabs.Root>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover-bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[35px] w-[35px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
