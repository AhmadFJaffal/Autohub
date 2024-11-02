"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isLogged = false;
  return (
    <nav className="flex justify-around items-center p-4 bg-navFooterBg text-navFooterText">
      <div className="">
        {" "}
        <Link href="/" className="flex flex-shrink-0 items-center">
          <Image
            className="w-auto"
            src="/images/logo.png"
            alt="logo"
            width={50}
            height={50}
            priority={true}
          />
          <span className="hidden md:inline-block text-2xl  ml-2">AutoHub</span>
        </Link>
      </div>
      <div className=" hidden md:flex space-x-12">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/cars">Cars</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          Menu
        </button>
        {isMobileMenuOpen && (
          <div className="flex flex-col space-y-2 mt-4 md:hidden">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/cars">Cars</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </div>
        )}
      </div>
      <div className="hidden md:block md:ml-6">
        {isLogged ? (
          <Link href="/profile">Profile</Link>
        ) : (
          <Button asChild>
            <Link href="/login">Login</Link>
          </Button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
