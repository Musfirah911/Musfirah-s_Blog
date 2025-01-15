"use client"; 

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <header className={`text-center mb-8 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                <h1 className="text-4xl font-bold transition duration-300 ease-in-out transform hover:scale-105">
                    Your Gateway to Programming and Frameworks
                </h1>
                <p className="mt-4 text-lg opacity-60">
                    Learn web development from scratch with detailed, easy-to-understand blogs crafted for absolute beginners.
                </p>
            </header>

            {/* Hero Section */}
            <div className={`relative w-full h-64 mb-8 overflow-hidden rounded-lg shadow-lg transition-transform duration-700 ${isVisible ? 'translate-y-0' : 'translate-y-10 opacity-0'}`}>
                <img
                    src="/images/1.jpg" 
                    alt="Coding Banner"
                    className="object-cover w-full h-full transition duration-500 ease-in-out transform hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <Link href={"/blog"}>
                    <Button className="transition duration-300 ease-in-out transform hover:scale-105">
                        Start Learning Now
                    </Button>
                    </Link>
                </div>
            </div>

            {/* Additional content can be added here */}
        </div>
    );
};

export default Home;