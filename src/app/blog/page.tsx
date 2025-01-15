"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import "tailwindcss/tailwind.css";

const Blog: React.FC = () => {
  const [showMoreFirst, setShowMoreFirst] = useState(false);
  const [showMoreSecond, setShowMoreSecond] = useState(false);
  const [expandedStates, setExpandedStates] = useState<{
    [key: number]: boolean;
  }>({});
  const [languageExpandedStates, setLanguageExpandedStates] = useState<{
    [key: number]: boolean;
  }>({});

  const toggleExpand = (index: number) => {
    setExpandedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleLanguageExpand = (index: number) => {
    setLanguageExpandedStates((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="min-h-screen p-4">
      {/*Section 1*/}
      <section className="text-center py-10 ">
        <h1 className="text-5xl font-bold mb-7 animate-fadeIn">
          Getting Started with Programming
        </h1>
        <p className="mb-10">
          Before diving deeper in the programming and their details, let's clear
          that:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto gap-y-12 p-4">
          <div className="text-black bg-yellow-100 backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slideIn h-fit ">
            <h2 className="text-3xl font-semibold mb-4">
              What is programming?
            </h2>
            <div className="flex justify-center mb-6">
              <img
                src="/images/17.jpg"
                alt="Laptop"
                className="h-56 w-96 rounded-lg"
              />
            </div>
            <p>
              Programming is the process of creating a set of instructions
              (code) that a computer can follow to perform tasks. Computers are
              incredibly fast but not smart on their own. They can&apos;t think
              or make decisions without clear, step-by-step instructions.
            </p>
            {!showMoreFirst && (
              <Button
                className="m-3 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setShowMoreFirst(!showMoreFirst)}
              >
                Read More
              </Button>
            )}

            {showMoreFirst && (
              <>
                <p>
                  Think of a computer as a chef who can follow a recipe
                  perfectly but doesn&apos;t know what to cook unless you give
                  them the recipe. Programming is like writing that recipe in a
                  language the computer understands, such as Python, JavaScript,
                  or C++.
                </p>
                <p>
                  For example, if you want a computer to add two numbers,
                  you&apos;d write:
                </p>
                <pre className="relative bg-[#1e1e1e] text-white rounded-lg font-mono p-4 my-4">
                  <div className="flex items-center justify-between mb-2 border-b border-gray-700 pb-2">
                  <span className="text-xs text-gray-400">JavaScript</span>
                  <button
                    className="bg-[#2d2d2d] hover:bg-[#3d3d3d] text-gray-300 text-xs px-3 py-1 rounded-md flex items-center gap-2 transition-colors"
                    onClick={() => {
                    navigator.clipboard.writeText(
                      `let sum = 5 + 3;\nconsole.log(sum); // The computer outputs 8`
                    );
                    const btn = document.createElement("span");
                    btn.textContent = "Copied!";
                    btn.className =
                      "absolute top-2 right-2 bg-gtext-yellow-600 hite px-2 py-1 rounded text-xs";
                    document.querySelector("pre")?.appendChild(btn);
                    setTimeout(() => btn.remove(), 2000);
                    }}
                  >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    >
                    <rect
                      x="9"
                      y="9"
                      width="13"
                      height="13"
                      rx="2"
                      ry="2"
                    ></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                    Copy code
                  </button>
                  </div>
                  <code className="block text-sm leading-relaxed">
                  <span className="text-[#569CD6]">let</span> sum ={" "}
                  <span className="text-[#b5cea8]">5</span> +{" "}
                  <span className="text-[#b5cea8]">3</span>;
                  <br />
                  <span className="text-[#9CDCFE]">console</span>.
                  <span className="text-[#DCDCAA]">log</span>(sum);{" "}
                  <span className="text-[#6A9955] break-words whitespace-normal">
                    // The computer outputs 8
                  </span>
                  </code>
                </pre>
                <p>
                  Here, the computer follows the instruction to add 5 and 3 and
                  then displays the result. Computers understand these
                  instructions because programming languages translate them into
                  a binary code (1s and 0s) that the computer&apos;s hardware
                  can process.
                </p>
                <Button
                  className="m-3 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => setShowMoreFirst(!showMoreFirst)}
                >
                  Show Less
                </Button>
              </>
            )}
          </div>
          <div className="text-black bg-yellow-100 backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slideIn h-fit ">
            <h2 className="text-3xl font-semibold mb-4">
              Why programming is essential?
            </h2>
            <div className="flex justify-center mb-6">
              <img
                src="/images/18.png"
                alt="Laptop"
                className="h-56 w-96 rounded-lg"
              />
            </div>
            <p>
              Programming is the backbone of the digital age. Everything from
              the apps on your phone to websites, self-driving cars, and even
              the devices in your home runs on programs. It's the language that
              shapes how we interact with technology in lives.
            </p>
            {!showMoreSecond && (
              <Button
                className="m-3 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setShowMoreSecond(!showMoreSecond)}
              >
                Read More
              </Button>
            )}

            {showMoreSecond && (
              <>
                <p className="mt-4"> Here&apos;s why it&apos;s essential:</p>
                <h3 className="text-xl font-semibold mt-4">Automation:</h3>
                <p>
                  Programming helps automate repetitive tasks, saving time and
                  effort. For example, businesses use programs to process
                  payments or manage inventory.
                </p>

                <h3 className="text-xl font-semibold mt-4">Problem-Solving:</h3>
                <p>
                  It allows us to create solutions to real-world problems. For
                  instance, healthcare apps use programming to analyze patient
                  data and suggest treatments.
                </p>

                <h3 className="text-xl font-semibold mt-4">Innovation:</h3>
                <p>
                  New technologies like AI, virtual reality, and blockchain rely
                  on programming to function and evolve.
                </p>

                <h3 className="text-xl font-semibold mt-4">
                  Career Opportunities:
                </h3>
                <p>
                  In today's job market, programming skills are in high demand,
                  offering exciting careers in fields like web development, data
                  science, and cybersecurity.
                </p>

                <h3 className="text-xl font-semibold mt-4">Empowerment:</h3>
                <p>
                  Learning programming empowers individuals to turn their ideas
                  into reality, whether it's building a personal website,
                  creating a game, or launching a startup.
                </p>

                <Button
                  className="m-3 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => setShowMoreSecond(!showMoreSecond)}
                >
                  Show Less
                </Button>
              </>
            )}
          </div>
        </div>
        <div className="p-6 pb-1 text-center">
          <p className="leading-[1.7] ">
            In summary, programming is how we communicate with computers to
            perform tasks, <br />
            and it&apos;s vital because it drives innovation, solves problems,
            and shapes the modern world.
          </p>
        </div>
      </section>
      <div className="border-b"></div>

      {/* Section 2 */}
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold mb-5 animate-fadeIn">
          Programming Languages and Frameworks
        </h2>
        <p className="mb-8">
          Choosing the right programming language or framework depends on your
          goals, interests, and the type of projects you want to create.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto gap-y-12 p-4">
          <div className="text-black bg-yellow-100 backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slideIn h-fit">
            <h3 className="text-2xl font-semibold mb-4">
              Fundamental to Advanced Web Development languages
            </h3>
            <div className="flex justify-center mb-6">
              <img
                src="/images/19.jpg"
                alt="Laptop"
                className="h-64 w-[30rem] rounded-lg"
              />
            </div>
            <p>
              Web development languages are the foundation for creating websites
              and web applications. They are used to structure, style, and add
              interactivity to web pages. They enable dynamic functionality and
              backend processing.
            </p>
            {!languageExpandedStates[0] ? (
              <Button
                className="mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => toggleLanguageExpand(0)}
              >
                Read More
              </Button>
            ) : (
              <div>
                <div className="text-center mt-6">
                  <div className="mb-5">
                    <h4 className="text-xl font-semibold mb-2">
                      Foundational Knowledge:
                    </h4>
                    <p>
                      Learn HTML for structure, CSS for styling, and JavaScript
                      for interactivity to build the core of any web
                      application.
                    </p>
                  </div>
                  <div className="mb-5">
                    <h4 className="text-xl font-semibold mb-2">
                      Progression to Advanced Languages:
                    </h4>
                    <p>
                      {" "}
                      Advance to TypeScript for type-safe coding, Python for
                      back-end development, and SQL for database management.
                    </p>
                  </div>
                  <div className="mb-5">
                    <h4 className="text-xl font-semibold mb-2">
                      Versatility Across Domains:{" "}
                    </h4>
                    <p>
                      These languages form the backbone of various fields,
                      including web development, automation, data science, and
                      AI.
                    </p>
                  </div>
                </div>
                <Button
                  className="mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => toggleLanguageExpand(0)}
                >
                  Show Less
                </Button>
              </div>
            )}
          </div>

          <div className="text-black bg-yellow-100 backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slideIn h-fit">
            <h3 className="text-2xl font-semibold mt-2 mb-4">
              Basics to Advanced in Frameworks
            </h3>
            <div className="flex justify-center mb-6">
              <img
                src="/images/20.webp"
                alt="Laptop"
                className="h-64 w-[30rem] rounded-lg"
              />
            </div>
            <p>
              Frameworks are pre-built tools that simplify coding and speed up
              development. They are used to create responsive designs, manage
              complex applications, and streamline workflows for building
              modern, scalable web solutions and also enhance efficiency and
              maintainability for professional development.
            </p>
            {!languageExpandedStates[1] ? (
              <Button
                className="mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => toggleLanguageExpand(1)}
              >
                Read More
              </Button>
            ) : (
              <>
                <div className="mb-4 mt-6">
                  <h4 className="text-xl font-semibold mt-2 mb-2">
                    Efficiency and Speed:
                  </h4>
                  <p>
                    Frameworks like Bootstrap and TailwindCSS accelerate
                    styling, while React and Next.js simplify front-end and
                    full-stack development.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="text-xl font-semibold mt-2 mb-2">
                    Scalability and Performance:
                  </h4>
                  <p>
                    Advanced frameworks like Django and Express.js enable the
                    creation of secure, scalable, and high-performing web
                    applications.
                  </p>
                </div>
                <div className="mb-5">
                  <h4 className="text-xl font-semibold mt-2 mb-2">
                    Ecosystem and Community Support:
                  </h4>
                  <p>
                    Frameworks come with rich ecosystems of plugins, libraries,
                    and active communities, making development faster and
                    troubleshooting easier.
                  </p>
                </div>
                <Button
                  className="mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => toggleLanguageExpand(1)}
                >
                  Show Less
                </Button>
              </>
            )}
          </div>
        </div>
      </section>
      <div className="border-b"></div>

      {/* Section 3 */}
      <section className="text-center py-10 px-4">
        <h2 className="text-4xl font-bold mb-8 animate-fadeIn">
          The Journey of a Programmer <br /> From Beginner to Expert
        </h2>
        <p className="mb-10">
          Becoming a skilled programmer is a rewarding journey that unfolds in
          stages, with each phase building on the last.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-12 max-w-[95%] mx-auto">
          {[
            {
              title: "Beginner",
              subtitle: "Understanding the Basics",
              image: {
                src: "/images/21.jpeg",
                alt: "Beginner Programming",
              },
              content:
                "Start with basic concepts like variables, loops, and functions. Initially only focus on one programming language and build simple programs.",
              expanded: (
                <div>
                  <h3 className="font-semibold mt-4">What You Learn:</h3>
                  <ul className="list-disc list-inside pl-5  mt-2">
                    <li>
                      The fundamentals of programming languages (e.g., HTML,
                      CSS, JavaScript, or Python)
                    </li>
                    <li>
                      Concepts like variables, loops, conditions, and functions
                    </li>
                    <li>
                      How to write simple programs and build basic projects like
                      a static website or a calculator
                    </li>
                  </ul>
                  <h3 className="font-semibold mt-4">Key Milestone:</h3>
                  <p>
                    Writing your first piece of working code, like printing
                    "Hello, World!" to the screen.
                  </p>
                  <h3 className="font-semibold mt-4">Challenges:</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Understanding syntax and logic</li>
                    <li>Debugging errors for the first time</li>
                  </ul>
                  <h3 className="font-semibold mt-4">Tips:</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Focus on one language initially</li>
                    <li>Practice regularly with small exercises</li>
                    <li>
                      Use beginner-friendly resources like tutorials and
                      interactive platforms (e.g., FreeCodeCamp, Codecademy)
                    </li>
                  </ul>
                </div>
              ),
            },
            {
              title: "Intermediate",
              subtitle: "Building Projects and Exploring",
              image: {
                src: "/images/22.jpg",
                alt: "Intermediate Programming",
              },
              content:
                "Master data structures and algorithms. Start working with frameworks and libraries. Build more complex applications.",
              expanded: (
                <div>
                  <h3 className="font-semibold mt-4">What You Learn:</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Applying programming concepts to real-world projects.
                    </li>
                    <li>
                      Exploring libraries, frameworks, or tools like React,
                      TailwindCSS, or Django.
                    </li>
                    <li>
                      Understanding how different technologies work together
                      (e.g., front-end, back-end, databases).
                    </li>
                  </ul>
                  <h3 className="font-semibold mt-4">Key Milestone:</h3>
                  <p>
                    Building complete projects like a portfolio website, to-do
                    app, or blog platform.
                  </p>
                  <h3 className="font-semibold mt-4">Challenges:</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Handling larger codebases.</li>
                    <li>Learning about version control (e.g., Git).</li>
                  </ul>
                  <h3 className="font-semibold mt-4">Tips:</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Work on practical projects to solidify knowledge.</li>
                    <li>
                      Join coding communities or pair-programming sessions.
                    </li>
                    <li>
                      Start solving coding challenges on platforms like
                      HackerRank or LeetCode.
                    </li>
                  </ul>
                </div>
              ),
            },
            {
              title: "Advanced",
              subtitle: "Mastering Problem Solving and Specialization",
              image: {
                src: "/images/22.webp",
                alt: "Advanced Programming",
              },
              content:
                "Understand advanced concepts like design patterns and system architecture. Specialize in specific domains.",
              expanded: (
                <div>
                  <h3 className="font-semibold mt-4">What You Learn:</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Advanced programming concepts like algorithms, data
                      structures, and design patterns.
                    </li>
                    <li>Optimizing code for performance and scalability.</li>
                    <li>
                      Specializing in areas like web development, data science,
                      AI, mobile apps, or cybersecurity.
                    </li>
                  </ul>
                  <h3 className="font-semibold mt-4">Key Milestone:</h3>
                  <p>
                    Developing high-quality, efficient code and contributing to
                    open-source projects.
                  </p>
                  <h3 className="font-semibold mt-4">Challenges:</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Staying up-to-date with rapidly evolving technologies.
                    </li>
                    <li>
                      Tackling complex problems requiring creative solutions.
                    </li>
                  </ul>
                  <h3 className="font-semibold mt-4">Tips:</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Deepen your knowledge with advanced courses and technical
                      books.
                    </li>
                    <li>Collaborate on team projects and internships.</li>
                    <li>
                      Keep building and experimenting to refine your skills.
                    </li>
                  </ul>
                </div>
              ),
            },
            {
              title: "Expert",
              subtitle: "Innovating and Mentoring",
              image: {
                src: "/images/23.avif",
                alt: "Expert Programming",
              },
              content:
                "Lead complex projects, architect solutions, and contribute to the programming community through mentoring and knowledge sharing to comnity.",
              expanded: (
                <div>
                  <h3 className="font-semibold mt-4">What You Learn:</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>
                      Becoming proficient in multiple technologies and
                      frameworks.
                    </li>
                    <li>
                      Designing systems, leading projects, and mentoring others.
                    </li>
                    <li>
                      Staying adaptable to new trends like cloud computing or
                      blockchain.
                    </li>
                  </ul>
                  <h3 className="font-semibold mt-4">Key Milestone:</h3>
                  <p>
                    Being recognized as a thought leader or expert in your
                    field.
                  </p>
                  <h3 className="font-semibold mt-4">Challenges:</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Balancing learning, teaching, and innovating.</li>
                    <li>
                      Maintaining a growth mindset as the industry evolves.
                    </li>
                  </ul>
                  <h3 className="font-semibold mt-4">Tips:</h3>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Share knowledge through blogs, talks, or tutorials.</li>
                    <li>Network with industry professionals.</li>
                    <li>Keep experimenting and innovating.</li>
                  </ul>
                </div>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="text-black bg-yellow-100 backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slideIn h-fit"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              {item.subtitle && (
                <h4 className="text-xl mb-3">{item.subtitle}</h4>
              )}
              <div className="flex justify-center mb-6">
                <img
                  src={item.image.src}
                  alt={item.image.alt}
                  className="h-56 w-96 rounded-lg"
                />
              </div>
              <p>{item.content}</p>
              {item.expanded && !expandedStates[index] && (
                <Button
                  className="mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => toggleExpand(index)}
                >
                  Read More
                </Button>
              )}
              {expandedStates[index] && (
                <>
                  <div className="mt-4">{item.expanded}</div>
                  <Button
                    className="mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => toggleExpand(index)}
                  >
                    Show Less
                  </Button>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      <div className="border-b"></div>

      {/* Section 4 */}
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold mb-5 animate-fadeIn">
          Learning Resources and Tips
        </h2>
        <p className="mb-4">
          Learning programming and web development can feel overwhelming, but
          the right resources and approach can make it manageable and enjoyable.
        </p>
        <p className="mb-10">
          Below is a concise list of recommended resources and tips to help you
          succeed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-y-12 p-4 mb-8 max-w-6xl mx-auto">
          <div className="text-black bg-yellow-100 backdrop-blur-md p-6 rounded-lg shadow-lg w-fit transform transition duration-500 hover:scale-105 animate-slideIn">
            <h3 className="text-2xl font-semibold mb-4">Websites & Courses</h3>
            <h5 className="text-[18px] font-semibold mb-4">
              Here are some of them:
            </h5>
            <ul className="text-center space-y-7">
              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  A free online learning platform offering comprehensive coding
                  courses. Perfect for beginners with structured learning paths
                  and certifications.
                </p>
                <a
                  href="https://www.freecodecamp.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/2.png"
                    alt="freeCodeCamp"
                    className="w-40 h-24 rounded-lg"
                  />
                  <span>freeCodeCamp</span>
                </a>
              </li>

              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  Interactive coding platform with hands-on learning experience.
                  Offers both free and premium courses in multiple programming
                  languages.
                </p>
                <a
                  href="https://www.codecademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/3.webp"
                    alt="Codecademy"
                    className="w-40 h-24 rounded-lg"
                  />
                  <span>Codecademy</span>
                </a>
              </li>
              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  Premier coding education platform with expert instructors.
                  Specializes in competitive programming and interview
                  preparation.
                </p>
                <a
                  href="https://codingblocks.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/4.png"
                    alt="Coding Blocks"
                    className="w-40 h-24 rounded-lg"
                  />
                  <span>Coding Blocks</span>
                </a>
              </li>
              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  World's largest web developer site with comprehensive
                  tutorials. Offers free resources and references for web
                  technologies.
                </p>
                <a
                  href="https://www.w3schools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/5.png"
                    alt="W3Schools"
                    className="w-40 h-24 rounded-lg"
                  />
                  <span>W3Schools</span>
                </a>
              </li>
              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  Leading programming education platform in South Asia. Known
                  for quality courses and placement assistance.
                </p>
                <a
                  href="https://www.codingninjas.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/6.webp"
                    alt="Coding Ninjas"
                    className="w-40 h-24 rounded-lg"
                  />
                  <span>Coding Ninjas</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="text-black bg-yellow-100 backdrop-blur-md p-6 rounded-lg shadow-lg w-fit transform transition duration-500 hover:scale-105 animate-slideIn">
            <h3 className="text-2xl font-semibold mb-4">YouTube Channels</h3>
            <h5 className="text-[18px] font-semibold mb-4">
              Here are some of them:
            </h5>
            <ul className="space-y-7">
              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  Popular channel for web development tutorials and courses.
                  Known for practical, project-based learning approach.
                </p>
                <a
                  href="https://www.youtube.com/c/TraversyMedia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/7.jpg"
                    alt="Traversy Media"
                    className="w-24 h-24 rounded-full"
                  />
                  <span>Traversy Media</span>
                </a>
              </li>
              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  Focused on explaining complex concepts in simple terms. Great
                  for understanding web development fundamentals.
                </p>
                <a
                  href="https://www.youtube.com/c/WebDevSimplified"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/8.jpg"
                    alt="Web Dev Simplified"
                    className="w-24 h-24 rounded-full"
                  />
                  <span>Web Dev Simplified</span>
                </a>
              </li>

              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  Comprehensive programming tutorials in Hindi and English.
                  Covers wide range of technologies with detailed explanations.
                </p>
                <a
                  href="https://www.youtube.com/c/CodeWithHarry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/9.jpeg"
                    alt="Code With Harry"
                    className="w-24 h-24 rounded-full"
                  />
                  <span>Code With Harry</span>
                </a>
              </li>

              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  Modern web development tutorials with clear explanations.
                  Excellent for learning latest frameworks and technologies.
                </p>
                <a
                  href="https://www.youtube.com/c/TheNetNinja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/10.jpg"
                    alt="The Net Ninja"
                    className="w-24 h-24 rounded-full"
                  />
                  <span>The Net Ninja</span>
                </a>
              </li>

              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  Popular Indian coding channel with focus on DSA and placement
                  prep. Provides structured learning path for career
                  development.
                </p>
                <a
                  href="https://www.youtube.com/@ApnaCollegeOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/11.jpg"
                    alt="Thapa Technical"
                    className="w-24 h-24 rounded-full"
                  />
                  <span>Apna College</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="text-black bg-yellow-100 backdrop-blur-md p-6 rounded-lg shadow-lg w-fit transform transition duration-500 hover:scale-105 animate-slideIn">
            <h3 className="text-2xl font-semibold mb-4">Coding Platforms</h3>
            <h5 className="text-[18px] font-semibold mb-4">
              Here are some of them:
            </h5>
            <ul className="space-y-7">
              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  World's leading platform for version control and
                  collaboration. Essential for project hosting and open source
                  contributions.
                </p>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/12.png"
                    alt="GitHub"
                    className="w-40 h-24 rounded-lg"
                  />
                  <span>GitHub</span>
                </a>
              </li>

              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  Online code editor and social development environment for
                  front-end development. Perfect for creating, testing, and
                  sharing web snippets instantly.
                </p>
                <a
                  href="https://codepen.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/13.jpg"
                    alt="CodePen"
                    className="w-40 h-24 rounded-lg"
                  />
                  <span>CodePen</span>
                </a>
              </li>

              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  Online IDE and cloud development platform for web application
                  development. Great for prototyping and sharing full projects
                  with support.
                </p>
                <a
                  href="https://codesandbox.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/14.webp"
                    alt="CodeSandbox"
                    className="w-40 h-24 rounded-lg"
                  />
                  <span>CodeSandbox</span>
                </a>
              </li>

              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  Comprehensive platform for programming practice and learning.
                  Excellent resource for DSA and interview preparation.
                </p>
                <a
                  href="https://practice.geeksforgeeks.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/15.png"
                    alt="GeeksforGeeks"
                    className="w-40 h-24 rounded-lg"
                  />
                  <span>GeeksforGeeks</span>
                </a>
              </li>

              <li className="flex flex-col items-center gap-2">
                <p className="mb-2">
                  Popular platform for coding interview preparation. Features
                  extensive collection of algorithmic problems.
                </p>
                <a
                  href="https://leetcode.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-600 underline flex flex-col items-center space-y-2"
                >
                  <img
                    src="/images/16.png"
                    alt="LeetCode"
                    className="w-40 h-24 rounded-lg"
                  />
                  <span>LeetCode</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center w-full mb-8 pt-5">
          <div className="text-black bg-yellow-100 backdrop-blur-md p-8 rounded-lg shadow-lg w-fit transform transition duration-500 hover:scale-110 animate-slideIn">
            <h3 className="text-2xl font-semibold mb-4">
              Tips for Efficient Learning
            </h3>
            <ul className="text-center space-y-2 list-disc list-inside">
              <li>Start with fundamentals and build gradually</li>
              <li>Code daily, even if just for 30 minutes</li>
              <li>Build projects to apply what you learn</li>
              <li>Join coding communities and forums</li>
              <li>Take breaks to avoid burnout</li>
              <li>Document your learning journey</li>
              <li>Learn to read documentation</li>
              <li>Practice debugging skills</li>
            </ul>
          </div>
        </div>

        <p className="text-lg">
          With consistent practice and curiosity, you can turn programming
          challenges into achievements. <br /> Remember, every expert was once a
          beginner stay patient and keep learning!
        </p>
      </section>
      <div className="border-b"></div>

      {/*Section 5*/}
      <section className="text-center py-10">
        <h2 className="text-4xl font-bold mb-5 animate-fadeIn">
          Real-World Applications and Growth as a Programmer
        </h2>
        <p className="mb-4">
          It is in exploring the practical uses of programming, from creating
          impactful projects to solving real-world problems.
        </p>
        <p className="mb-10">
          It also delves into common challenges programmers face and provides
          strategies to overcome them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto gap-y-12 p-4">
          <div className="text-black bg-yellow-100 backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slideIn h-fit">
            <h3 className="text-2xl font-semibold mb-4">
              Practical Applications and Projects
            </h3>
            <div className="flex justify-center mb-6">
              <img
                src="/images/24.avif"
                alt="Laptop"
                className="h-56 w-60 rounded-lg"
              />
            </div>
            <p className="mb-4">
              Programming and web development skills can be applied to create
              impactful solutions in various domains. Understanding these
              applications helps in choosing the right career path and
              developing relevant skills.
            </p>
            <h4 className="text-xl font-semibold mb-3">
              Practical Applications
            </h4>
            <ul className="list-disc list-inside pl-5 mb-4">
              <li>
                E-commerce platforms, online marketplaces for global reach
              </li>
              <li>
                Social media applications and comprehensive networking tools
              </li>
              <li>
                Educational platforms and advanced learning management systems
              </li>
              <li>
                Mobile apps for enhanced productivity and lifestyle management
              </li>
              <li>Healthcare management systems with patient data security</li>
              <li>Financial technology solutions with secure transactions</li>
              <li>Content management systems with advanced features</li>
            </ul>
            {!languageExpandedStates[2] ? (
              <Button
                className="mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => toggleLanguageExpand(2)}
              >
                Read More
              </Button>
            ) : (
              <>
                <h4 className="text-xl font-semibold mb-3">
                  Development Lifecycle:
                </h4>
                <ul className="list-disc list-inside pl-5 mb-4">
                  <li>Planning and requirements gathering</li>
                  <li>System design and architecture</li>
                  <li>Database management</li>
                  <li>Deployment and monitoring</li>
                  <li>Maintenance and updates</li>
                  <li>Documentation and feedback</li>
                  <li>Feature improvements</li>
                </ul>
                <h4 className="text-xl font-semibold mb-3">Best Practices:</h4>
                <ul className="list-disc list-inside pl-5 mb-4">
                  <li>Writing clean, maintainable code</li>
                  <li>Implementing version control</li>
                  <li>Creating documentation</li>
                  <li>Following security guidelines</li>
                  <li>Optimizing performance</li>
                  <li>Using modern tools</li>
                  <li>Implementing testing</li>
                  <li>Following standards</li>
                </ul>
                <Button
                  className="mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => toggleLanguageExpand(2)}
                >
                  Show Less
                </Button>
              </>
            )}
          </div>

          <div className="text-black bg-yellow-100 backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slideIn h-fit">
            <h3 className="text-2xl font-semibold mb-4">
              Professional Growth and Development
            </h3>
            <div className="flex justify-center mb-6">
              <img
                src="/images/25.jpeg"
                alt="Laptop"
                className="h-56 w-60 rounded-lg"
              />
            </div>
            <p className="mb-4">
              Growing as a programmer requires continuous learning, adaptation
              to new technologies, and development of both technical and soft
              skills. Success in this field comes from a balanced approach to
              professional development.
            </p>
            <h4 className="text-xl font-semibold mb-3">Key Growth Areas:</h4>
            <ul className="list-disc list-inside pl-5 mb-4">
              <li>Advanced technical skill development and mastery</li>
              <li>Complex problem-solving capabilities in real scenarios</li>
              <li>Effective communication strategies with teams</li>
              <li>Project management expertise with modern methodologies</li>
              <li>Industry trends and innovations awareness</li>
              <li>Leadership and comprehensive team management</li>
              <li>Architecture and system design principles</li>
              <li>Code optimization techniques and best practices</li>
            </ul>
            {!languageExpandedStates[3] ? (
              <Button
                className="mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => toggleLanguageExpand(3)}
              >
                Read More
              </Button>
            ) : (
              <>
                <h4 className="text-xl font-semibold mb-3">
                  Career Advancement:
                </h4>
                <ul className="list-disc list-inside pl-5 mb-4">
                  <li>Creating portfolios</li>
                  <li>Building networks</li>
                  <li>Contributing to open source</li>
                  <li>Attending conferences</li>
                  <li>Learning new tech</li>
                  <li>Getting certified</li>
                  <li>Writing blogs</li>
                  <li>Mentoring others</li>
                </ul>
                <h4 className="text-xl font-semibold mb-3">Soft Skills:</h4>
                <ul className="list-disc list-inside pl-5 mb-4">
                  <li>Team collaboration</li>
                  <li>Time management</li>
                  <li>Client communication</li>
                  <li>Problem-solving</li>
                  <li>Adaptability</li>
                  <li>Cultural awareness</li>
                  <li>Conflict resolution</li>
                  <li>Emotional intelligence</li>
                </ul>
                <Button
                  className="mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => toggleLanguageExpand(3)}
                >
                  Show Less
                </Button>
              </>
            )}
          </div>

          <div className="text-black bg-yellow-100 backdrop-blur-md p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 animate-slideIn h-fit">
            <h3 className="text-2xl font-semibold mb-4">
              Common Challenges and Solutions
            </h3>
            <div className="flex justify-center mb-6">
              <img
                src="/images/26.png"
                alt="Laptop"
                className="h-56 w-60 rounded-lg"
              />
            </div>
            <p className="mb-4">
              Every programmer faces obstacles during their journey.
              Understanding these challenges and having effective strategies to
              overcome them is crucial for long-term success in the programming field and
              professional growth.
            </p>
            <h4 className="text-xl font-semibold mb-3">
              Technical Challenges:
            </h4>
            <ul className="list-disc list-inside pl-5 mb-4">
              <li>Adapting to rapidly evolving technologies landscape</li>
              <li>Debugging complex system issues effectively</li>
              <li>Managing large-scale codebases efficiently</li>
              <li>Understanding and maintaining legacy systems</li>
              <li>Implementing advanced performance optimizations</li>
              <li>Ensuring comprehensive code security</li>
              <li>Handling system scalability challenges</li>
              <li>Managing technical debt effectively</li>
            </ul>
            {!languageExpandedStates[4] ? (
              <Button
                className="mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => toggleLanguageExpand(4)}
              >
                Read More
              </Button>
            ) : (
              <>
                <h4 className="text-xl font-semibold mb-3">Solutions:</h4>
                <ul className="list-disc list-inside pl-5 mb-4">
                  <li>Problem analysis</li>
                  <li>Debug methods</li>
                  <li>Documentation</li>
                  <li>Team support</li>
                  <li>Code reviews</li>
                  <li>Testing</li>
                  <li>Profiling</li>
                  <li>Analysis</li>
                </ul>
                <h4 className="text-xl font-semibold mb-3">Mental Aspects:</h4>
                <ul className="list-disc list-inside pl-5 mb-4">
                  <li>Managing stress</li>
                  <li>Work-life balance</li>
                  <li>Motivation</li>
                  <li>Learning</li>
                  <li>Pressure handling</li>
                  <li>Career growth</li>
                  <li>Confidence</li>
                  <li>Focus</li>
                </ul>
                <Button
                  className="mt-4 transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => toggleLanguageExpand(4)}
                >
                  Show Less
                </Button>
              </>
            )}
          </div>
        </div>
        <p className="mt-12">
          Embrace challenges as learning opportunities. With persistence and the
          right mindset, you will grow into a skilled programmer.
        </p>
      </section>
      <div className="border-b"></div>

      {/* Last Section */}
      <section className="text-center py-12">
        <h2 className="text-4xl font-bold mb-8 animate-fadeIn">
          Your Journey Awaits
        </h2>
        <p className="mb-10">
          Starting your programming journey is an exciting adventure. There will
          be challenges, discoveries, and moments of triumph. But:
        </p>
        <div className="max-w-2xl mx-auto px-4 py-1 mb-4">
          <div className="bg-yellow-100 text-gray-900 backdrop-blur-md p-8 rounded-lg shadow-lg transition duration-500 hover:scale-105 mx-2 my-4">
        <div className="flex justify-center mb-6">
          <img
            src="/images/27.jpg"
            alt="Laptop"
            className="h-60 w-[32rem] rounded-lg"
          />
        </div>
        <p className="text-lg mb-6">
          Remember, every line of code you write is a step forward in your
          journey. Programming is not just about syntax and algorithms, it
          is about creativity, problem-solving, and continuous growth.
        </p>
        <p className="text-lg mb-6">
          There will be challenges, bugs that seem impossible to fix, and
          moments of doubt. But with each obstacle you overcome, you become
          stronger, more skilled, and more resilient.
        </p>
        <p className="text-lg mb-6">
          The world of programming is vast and ever-evolving, offering
          endless opportunities to learn, create, and innovate. Your unique
          perspective and ideas matter, they could be the solution someone
          needs.
        </p>
        <p className="text-lg font-semibold">
          So keep coding, keep learning, and most importantly, keep
          believing in yourself. Your next breakthrough might be just one
          line of code away.
        </p>
          </div>
        </div>
        <p className="mt-8 text-xl">
          <strong>Good luck on your programming journey!</strong>
        </p>
        <p className="text-lg mt-3 mb-4">
          May you build amazing projects, solve complex problems, and inspire
          others with your passion for coding.
        </p>
      </section>
      <div className="border-b"></div>
    </div>
  );
};

export default Blog;
