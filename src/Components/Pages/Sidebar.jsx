import React, { useState } from "react";
import { userRoutes } from "../../routes/routes";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= MOBILE MENU BUTTON ================= */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="
            fixed top-1 left-4 z-[60]
            md:hidden
            flex items-center justify-center
            w-6 h-9
            bg-white/80
            text-slate-700
            hover:bg-white
            transition-all
          "
          aria-label="Open menu"
        >
          {/* Hamburger */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {/* ================= MOBILE OVERLAY ================= */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed inset-0
            z-40
            bg-black/30
            md:hidden
          "
        />
      )}

      {/* ================= SIDEBAR ================= */}
      <aside
        className={`
          fixed md:sticky
          top-0 left-0
          z-50
          h-screen
          w-[264px]
          min-w-[264px]

          transform
          transition-transform
          duration-300
          ease-in-out

          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
        aria-label="Sidebar navigation"
      >
        <div
          className="
            relative
            w-full
            h-full
            flex
            flex-col
            overflow-y-auto
            py-6
            px-4
            shadow-2xl
            backdrop-blur-sm
            bg-white/30
            border-r
            border-slate-300

            [&::-webkit-scrollbar]:hidden
          "
        >
          {/* ================= LOGO ================= */}
          <div className="mb-8 flex items-center justify-between">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="
                ml-14
                md:ml-2
                text-2xl
                font-bold
                text-blue-700
                whitespace-nowrap
              "
            >
              Endpoints
            </Link>

            {/* Mobile Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="
                md:hidden
                w-9 h-9
                flex
                items-center
                justify-center
                rounded-lg
                hover:bg-slate-100
                transition-colors
              "
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* ================= NAVIGATION ================= */}
          <nav className="flex-1" aria-label="Primary sidebar navigation">
            <div className="space-y-2">
              {userRoutes.map((res) => (
                <div key={res.Label}>
                  {/* Parent Menu */}
                  <button
                    type="button"
                    className="
                      flex
                      items-center
                      gap-2.5
                      cursor-pointer
                      w-full
                      text-sm
                      text-slate-800
                      font-medium
                      text-left
                      group

                      hover:text-slate-900
                      hover:bg-slate-100

                      rounded-md
                      px-3
                      py-2

                      transition-colors
                    "
                  >
                    {/* Home/API Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[18px] h-[18px] fill-current"
                      viewBox="0 0 512 512"
                      aria-hidden="true"
                    >
                      <path d="M426 495.983H86c-25.364 0-46-20.635-46-46v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 7.72 6.28 14 14 14h340c7.72 0 14-6.28 14-14v-242.02c0-8.836 7.163-16 16-16s16 7.164 16 16v242.02c0 25.364-20.635 46-46 46" />

                      <path d="M496 263.958a15.95 15.95 0 0 1-11.313-4.687L285.698 60.284c-16.375-16.376-43.02-16.376-59.396 0L27.314 259.272c-6.248 6.249-16.379 6.249-22.627 0-6.249-6.248-6.249-16.379 0-22.627L203.675 37.656c28.852-28.852 75.799-28.852 104.65 0l198.988 198.988c6.249 6.249 6.249 16.379 0 22.627A15.94 15.94 0 0 1 496 263.958" />
                    </svg>

                    <span className="flex-1">{res.Label}</span>

                    {/* Arrow */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3 h-3 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.016 18a1.5 1.5 0 0 1-1.065-.434l-9-9a1.506 1.506 0 0 1 2.13-2.13l7.935 7.95L19.95 6.45a1.5 1.5 0 0 1 2.115 2.115l-9 9a1.5 1.5 0 0 1-1.05.435" />
                    </svg>
                  </button>

                  {/* Sub Menu */}
                  <ul
                    className="
                      space-y-1
                      text-sm
                      text-slate-600
                      font-medium
                      px-3
                      my-1
                    "
                  >
                    {res.subLink.map((res1) => (
                      <li key={res1.path}>
                        <Link
                          to={res1.path}
                          onClick={() => setIsOpen(false)}
                          className="
                            block
                            hover:text-slate-900
                            hover:bg-slate-100
                            rounded-md
                            px-3
                            py-2
                            transition-colors
                          "
                        >
                          {res1.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>

          {/* ================= USER ================= */}
          <div
            className="
              flex
              flex-wrap
              items-center
              gap-4
              rounded-md
              mt-6
            "
          >
            <img
              src="https://readymadeui.com/team-2.webp"
              className="
                w-10
                h-10
                rounded-md
                border
                border-slate-300
              "
              alt="User avatar"
            />

            <div>
              <p className="text-sm text-slate-800 font-medium">John Doe</p>

              <p className="text-xs text-slate-500 mt-0.5">
                Active free account
              </p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
