import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";
import Food from "./Food.jsx";
import Cure from "./Cure.jsx";
import Medicines from "./Medicines.jsx";
import Docter from "./Docter.jsx";
import Home from "./Home.jsx";

function Header() {
  return (
    <div>
      <Router>
        <div className="bg-[#fefae0] text-black fixed top-0  w-[60%] border-2 h-auto border-slate-600 rounded-lg left-[20%] ">
          <nav className="container mx-auto p-4 flex justify-between items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white py-2 px-4 rounded-full duration-1000"
                  : "py-2 px-4 rounded hover:bg-black text-black hover:rounded-full duration-300 hover:text-slate-300"
              }
            >
              <div className="text-2xl font-bold">MediCare</div>
            </NavLink>

            <ul className="flex space-x-2">
              <li>
                <NavLink
                  to="/food"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-white py-2 px-4 rounded-full duration-1000"
                      : "py-2 px-4 rounded hover:bg-black text-black hover:rounded-full duration-300 hover:text-slate-300"
                  }
                >
                  Food
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/cure"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-white py-2 px-4 rounded-full duration-1000"
                      : "py-2 px-4 rounded hover:bg-black text-black hover:rounded-full duration-300 hover:text-slate-300"
                  }
                >
                  Cure
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/medicine"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-white py-2 px-4 rounded-full duration-1000"
                      : "py-2 px-4 rounded hover:bg-black text-black hover:rounded-full duration-200 hover:text-slate-300"
                  }
                >
                  Medicine
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/docter"
                  className={({ isActive }) =>
                    isActive
                      ? "bg-black text-white py-2 px-4 rounded-full duration-400"
                      : "py-2 px-4 rounded hover:bg-black text-black hover:rounded-full duration-200 hover:text-slate-300"
                  }
                >
                  Docter
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        {/* <div>
          <textarea className="text-white" name="name" id="">
            name{" "}
          </textarea>
        </div> */}

        <div className="mt-16 container mx-auto p-4">
          <Routes>
            <Route path="/food" element={<Food />} />

            <Route path="/" element={<Home />} />

            <Route path="/cure" element={<Cure />} />

            <Route path="/docter" element={<Docter />} />

            <Route path="/medicine" element={<Medicines />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Header;
