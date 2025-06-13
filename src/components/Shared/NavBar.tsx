import Image from "next/image";
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
type NavItem = {
  name: string | React.ReactElement;
  id: number;
  link?: string;
};

const items: NavItem[] = [
  {
    name: "Home",
    id: 0,
    link: "/",
  },
  {
    name: "Intro",
    id: 1,
    link: "#intro",
  },
  {
    name: "What we do",
    id: 2,
    link: "#about",
  },
  {
    name: (
      <Select>
        <SelectTrigger className="w-full md:w-[180px]">
          <SelectValue placeholder="Products" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Products</SelectItem>
          <SelectItem value="yarn">Yarn</SelectItem>
          <SelectItem value="cotton">Cotton</SelectItem>
        </SelectContent>
      </Select>
    ),
    id: 3,
  },
  {
    name: "Contact Us",
    id: 4,
    link: "#contact",
  },
];

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex flex-col md:flex-row p-4 md:p-8 items-start md:items-center justify-between bg-white shadow-sm">
      {/* Top section with logo and hamburger */}
      <div className="flex w-full md:w-auto items-center justify-between">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        
        {/* Hamburger menu button - only visible on mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col space-y-1 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-opacity duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-transform duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Navigation items */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row w-full md:w-auto items-start md:items-center justify-start md:justify-between gap-4 md:gap-10 mt-4 md:mt-0 transition-all duration-300`}
      >
        {items.map((item) => (
          <div key={item.id} className="w-full md:w-auto">
            {typeof item.name === "string" ? (
              item.link ? (
                <a
                  href={item.link}
                  className="block py-2 md:py-0 text-gray-700 hover:text-blue-600 transition-colors duration-200 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ) : (
                <p className="block py-2 md:py-0 text-gray-700 cursor-pointer">
                  {item.name}
                </p>
              )
            ) : (
              <div className="py-2 md:py-0 w-full">
                {React.cloneElement(item.name)}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;