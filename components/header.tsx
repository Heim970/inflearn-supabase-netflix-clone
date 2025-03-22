"use client";

import Logo from "./logo";

export default function Header() {
  return (
    <header className="flex items-center justify-between fixed top-0 left-0 right-0 px-4 py-2 bg-gray-900 z-50">
      <nav className="flex gap-2">
        <Logo />
        <ul className="flex gap-2 text-white">
          <li>Movies</li>
          <li>Dramas</li>
        </ul>
      </nav>
      <div className="flex gap-2 items-center w-full max-w-72 border border-white text-white rounded-md p-2">
        <i className="fas fa-search" />
        <input className="bg-transparent" placeholder="Search Movies" />
      </div>
    </header>
  );
}
