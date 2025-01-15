import React from 'react';

const AboutPage = () => {
    return (
        <div className="flex justify-center items-center mt-10 mb-10">
            <div className="max-w-3xl px-4 m-4 bg-yellow-100 py-8 shadow-lg">
            <h1 className="text-4xl font-bold mb-6  text-gray-800 text-center">Welcome to <span className='text-yellow-600 text-4xl '> Musfirah Tabassum&apos;s Blog</span></h1>

            <div className="flex justify-center items-center mb-4">
                <img src="/images/28.avif" alt="About us" className="w-[32rem] h-64 rounded-lg" />
                </div>
            
            <div className="prose">
                <p className="mb-4 text-gray-800 text-center">
                Welcome to our blog, a space dedicated to sharing insights, stories, and 
                knowledge with our readers. We strive to provide valuable content that 
                informs, inspires, and engages.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-yellow-600 text-center">Our Mission</h2>
                <p className="mb-4 text-gray-800 text-center">
                Our goal is to create a community where ideas flourish and knowledge is 
                shared freely. We believe in the power of words to connect, educate, 
                and inspire change.
                </p>

                <h2 className="text-2xl font-semibold mt-6 mb-4 text-yellow-600 text-center">What We Offer</h2>
                <ul className="list-disc list-inside mb-4 text-gray-800 mx-auto pl-8 text-center">
                <li>Beginner-friendly web development tutorials</li>
                <li>Basic Web Development Concepts</li>
                <li>Tips and best practices for new web developers</li>
                <li>Resources to help start your coding journey</li>
                <li>Career guidance in tech industry</li>
                </ul>

                <p className="mt-6 text-gray-800 italic text-center">
                Join us on this journey of discovery and learning. Your presence here 
                makes our community stronger.
                </p>
            </div>
            </div>
        </div>
    );
};

export default AboutPage;