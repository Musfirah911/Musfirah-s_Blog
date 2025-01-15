"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "../button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ui/theme-btn";

const Navbar: React.FC = () => {
  return (
    <nav className="p-5 bg-background/50 sticky top-0 backdrop-blur border-b z-10">
      <div className="container mx-auto flex items-center justify-between relative">
      <Link
        href="/"
        className="text-xl font-bold cursor-pointer items-center transition-all duration-200"
      >
        Musfirah Tabassum&apos;s Blog
      </Link>
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
        <Link
        href="/home"
        className="hover:scale-105 hover:font-bold transition-transform duration-300"
        >
        Home
        </Link>
        <Link
        href="/blog"
        className="hover:scale-105 hover:font-bold transition-transform duration-300"
        >
        Blog
        </Link>
        <Link
        href="/about"
        className="hover:scale-105 hover:font-bold transition-transform duration-300"
        >
        About
        </Link>
        <Link
        href="/contact"
        className="hover:scale-105 hover:font-bold transition-transform duration-300"
        >
        Contact
        </Link>
      </div>
      <div className="hidden md:flex items-center space-x-2">
        <ModeToggle />
      </div>
      <div className="md:hidden flex items-center space-x-2">
        <ModeToggle />
        <Sheet>
        <SheetTrigger>
            <svg
            className="w-6 h-6 dark:stroke-white stroke-black"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
            ></path>
            </svg>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
          <SheetTitle>
            Blog by <br />{" "}
            <span className="text-pink-600 font-black ">
            Musfirah Tabassum
            </span>
          </SheetTitle>
          <SheetDescription>
            <div className="md:hidden flex flex-col items-center space-y-4 mt-4">
            <Link href="/home" className="transition-colors duration-300">
              Home
            </Link>
            <Link
              href="/blog"
              className="transition-colors duration-300"
            >
              Blog
            </Link>
            <Link href="/about" className="transition-colors duration-300">
              About
            </Link>
            <Link
              href="/contact"
              className="transition-colors duration-300"
            >
              Contact
            </Link>
            </div>
          </SheetDescription>
          </SheetHeader>
        </SheetContent>
        </Sheet>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
