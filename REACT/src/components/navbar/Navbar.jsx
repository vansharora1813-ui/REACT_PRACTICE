import React from 'react'
import codeLogo from '../../assets/codejudge-logo.svg'
import userAvatar from '../../assets/user-avatar.png'

const Navbar = () => {
  return (
    <nav className="w-full bg-black flex items-center justify-between px-4 py-2 h-14 border-b border-gray-800">

      {/* ── LEFT SECTION: Logo + Problem navigation ── */}
      <div className="flex items-center gap-1">

        {/* Coding Logo */}
        <div className="flex items-center mr-3">
          <img
            src={codeLogo}
            alt="CodeJudge Logo"
            className="w-9 h-9"
          />
        </div>

        {/* Problem List Button */}
        <button
          type="button"
          disabled
          className="flex items-center gap-1 px-3 py-1.5 rounded  text-[#FFFFFF] text-lg font-medium cursor-default select-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="8" y1="6" x2="21" y2="6" />
            <line x1="8" y1="12" x2="21" y2="12" />
            <line x1="8" y1="18" x2="21" y2="18" />
            <line x1="3" y1="6" x2="3.01" y2="6" />
            <line x1="3" y1="12" x2="3.01" y2="12" />
            <line x1="3" y1="18" x2="3.01" y2="18" />
          </svg>
          Problem List
        </button>

        {/* Left + Right Arrows grouped with no gap */}
        <div className="flex items-center -space-x-5">
          {/* Left Arrow */}
          <button
            type="button"
            disabled
            className="flex items-center justify-center w-10 h-10 rounded text-[#949494] cursor-default select-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            type="button"
            disabled
            className="flex items-center justify-center w-10 h-10 rounded text-[#949494] cursor-default select-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* ── MIDDLE SECTION: Play + Submit ── */}
      <div className="flex items-center gap-2">

        {/* Play Button */}
        <button
          type="button"
          disabled
          className="flex items-center justify-center w-9 h-9 rounded cursor-default select-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            width="30"
            height="30"
          >
            <rect x="1" y="1" width="34" height="34" rx="7" fill="#1e1e1e" />
            <polygon points="13,10 13,26 27,18" fill="#949494" />
          </svg>
        </button>

        {/* Submit Button */}
        <button
          type="button"
          disabled
          className="flex items-center gap-1.5 px-4 py-1.5 rounded bg-green-700 text-white text-sm font-semibold cursor-default select-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 16 12 12 8 16" />
            <line x1="12" y1="12" x2="12" y2="21" />
            <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
          </svg>
          Submit
        </button>
      </div>

      {/* ── RIGHT SECTION: Settings + Profile ── */}
      <div className="flex items-center mr-20 gap-3 ">

        {/* Settings Button */}
        <button
          type="button"
          disabled
          className="flex items-center justify-center w-8 h-8 rounded text-gray-400 cursor-default select-none hover:bg-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </button>

        {/* Stopwatch Button */}
        <button
          type="button"
          disabled
          className="flex items-center justify-center w-9 h-9 rounded cursor-default select-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 36 36"
            width="32"
            height="32"
          >
            {/* Dark rounded bg — same style as play button */}
            <rect x="1" y="1" width="34" height="34" rx="7" fill="#1e1e1e" />
            {/* Crown/top buttons */}
            <rect x="15" y="4" width="6" height="2.5" rx="1.2" fill="#38BDF8" />
            <rect x="26" y="8" width="2.5" height="5" rx="1.2" fill="#38BDF8" transform="rotate(40 27 10)" />
            {/* Outer circle */}
            <circle cx="18" cy="21" r="10" fill="none" stroke="#38BDF8" strokeWidth="2" />
            {/* Inner tick line (12 o'clock hand) */}
            <line x1="18" y1="21" x2="18" y2="14" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
            {/* Small minute hand */}
            <line x1="18" y1="21" x2="23" y2="19" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {/* Profile Button */}
        <button
          type="button"
          disabled
          className="flex items-center justify-center w-9 h-9 rounded-full cursor-default select-none overflow-hidden"
        >
          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-9 h-9 rounded-full object-cover"
          />
        </button>
      </div>

    </nav>
  )
}

export default Navbar

