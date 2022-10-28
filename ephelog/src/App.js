/*global chrome*/
import { useState, React } from "react";
import axios from "axios";
import logo from "./logo512.png";

export default function App() {
  let [currentCookie, setCurrentCookie] = useState("");
  let [displayToken, setDisplayToken] = useState("");

  function setCookies(domain, name, value, callback) {
    chrome.cookies.set({ url: domain, name: name, value: value });
  }
  function getCookies(domain, name, callback) {
    chrome.cookies.get({ url: domain, name: name }, (cookie) => {
      console.error(cookie.value);
      if (callback) {
        callback(cookie.value);
      }
    });
  }

  return (
    <div className="">
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
      <div>
        <img src={logo}></img>
      </div>
      <form id="user" className="bg-white px-8 pt-6 pb-8 mb-4 ">
      <h3 className="text-2xl font-semibold text-gray-800 text-center">
           User
        </h3>
        {/* <h3 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">
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
        </div> */}
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
        <div className="flex flex-col items-center justify-between">
          <div>
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
            onClick={() => {
              getCookies(
                "https://tkmce.etlab.in",
                "TKMSESSIONID",
                async (cookie) => {
                  let response = await axios({
                    method: "post",
                    url: "http://172.104.206.120/templogin/login/",
                    data: {
                      site: "https://tkmce.etlab.in",
                      sessionCookie: cookie,
                      sessionCookieName: "TKMSESSIONID",
                    },
                  });
                  setDisplayToken(response.data["sessionId"]);
                }
              );
            }}
          >
            Generate
          </button>
          </div>
          <div className="text-center">{displayToken}</div>
          Share It!
          {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a> */}
        </div>
      </form>
      {/* <p className="text-center text-gray-500 text-xs">
    &copy;2022 Ephelog. All rights reserved.
  </p> */}
      <form id="Iuser" className="bg-white px-8 pt-6 pb-8 mb-4 ">
        <h3 className="text-2xl font-semibold text-gray-800 text-center">
          Intended User
        </h3>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Enter Temporary Password"
            onChange={(e) => {
              setCurrentCookie(e.target.value);
            }}
          />
        </div>
        <div className="flex flex-col items-center">
          <div>
          <button
            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-center"
            type="button"
            onClick={async () => {
              let response = await axios({
                method: "get",
                url: "http://172.104.206.120/templogin/login/",
                params: { sessionId: currentCookie },
              });
              setCookies(
                "https://tkmce.etlab.in",
                "TKMSESSIONID",
                response.data["sessionCookie"],
                () => {
                  console.log("Cookie set");
                  chrome.tabs.query(
                    { active: true, currentWindow: true },
                    function (arrayOfTabs) {
                      var code = "window.location.reload();";
                      chrome.tabs.executeScript(arrayOfTabs[0].id, {
                        code: code,
                      });
                    }
                  );
                }
              );
            }}
          >
            Login
          </button>
          </div>
          
          {/* <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          Forgot Password?
        </a> */}
        </div>
      </form>
    </div>
  );
}
