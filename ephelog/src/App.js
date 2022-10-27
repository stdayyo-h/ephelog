/*global chrome*/
import { useState, React } from "react";

export default function App() {
  let [currentCookie, setCurrentCookie] = useState("");
  function setCookies(domain, name, value, callback) {
    chrome.cookies.set({ url: domain, name: name, value: value });
  }

  return (
    <div className="w-full max-w-xs ">
      <div className="flex flex-col items-center">
        {/* <div className="inline-flex mt-2 xs:mt-0">
          <button className="py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <a href="#user"></a>
              Prev
          </button>
          <button className="py-2 px-4 text-sm font-medium text-white bg-blue-500 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <a href="#Iuser"></a>
              Next
          </button>
      </div> */}
      </div>
      <form id="user" className="bg-white px-8 pt-6 pb-8 mb-4 ">
        <h3 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">
          User
        </h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="sitelink"
          >
            Site Link
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Site Link"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="**************"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="intendedusername"
          >
            Intended Username
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Generate
          </button>
          {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a> */}
        </div>
      </form>
      {/* <p className="text-center text-gray-500 text-xs">
    &copy;2022 Ephelog. All rights reserved.
  </p> */}
      <form id="Iuser" className="bg-white px-8 pt-6 pb-8 mb-4 ">
        <h3 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">
          Intended User
        </h3>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Site Link"
            onChange={(e) => {
              setCurrentCookie(e.target.value);
            }}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              setCookies(
                "https://tkmce.etlab.in",
                "TKMSESSIONID",
                currentCookie,
                () => {
                  console.log("Cookie set");
                }
              );
            }}
          >
            Login
          </button>
          {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a> */}
        </div>
      </form>
    </div>
  );
}
