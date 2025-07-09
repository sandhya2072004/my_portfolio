import React, { useEffect, useState } from "react";
import { Button, Box } from '@mui/material';
import san from '../images/san.jpg';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SendIcon from '@mui/icons-material/Send';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './style.css'; // Your custom CSS file

export default function HomeScreen() {
  const titles = [
    "Full Stack Developer",
    "Web Developer",
    "DSA Developer",
    "Machine Learning Engineer",
    "AI Enthusiast",
    "Open Source Contributor",
  ];

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const speed = deleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(currentTitle.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);

        if (charIndex + 1 === currentTitle.length) {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        setText(currentTitle.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, titleIndex]);

  return (
    <Box className="min-h-screen text-white flex flex-col justify-center items-center px-6">
      <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl">
        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center items-start space-y-6">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Hi, I'm Sandhya Sahu
          </h1>
          <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-800">
            {text}<span className="animate-pulse">|</span>
          </h3>
          <p className="font-bold text-xl leading-relaxed text-gray-600">
            I’m a Full Stack Developer skilled in building responsive and scalable web apps using React, Tailwind CSS, Node.js, Express, and MongoDB. I handle both front-end and back-end development, from UI/UX design to API and database management.
          </p>
          <div className='flex flex-row gap-5'>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              style={{ textTransform: "none", borderRadius: "30px" }}
            >
              Hire me
            </Button>
            <Button
              variant="outlined"
              style={{ textTransform: "none", borderRadius: "30px" }}
              href="https://github.com/sandhya2072004"
              target="_blank"
            >
              <GitHubIcon style={{ height: "20px" }} /> Github
            </Button>
            <Button
              variant="outlined"
              style={{ textTransform: "none", borderRadius: "30px" }}
              href="https://www.linkedin.com/in/sandhya2072004"
              target="_blank"
            >
              <LinkedInIcon style={{ height: "20px" }} /> LinkedIn
            </Button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <div
            style={{
              width: "300px",
              height: "300px",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
              borderRadius: "40%",
              border: "4px solid transparent",
              overflow: "hidden",
              transition: "0.4s",
            }}
          >
            <img
              src={san}
              alt="San"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {/* Bouncing Icon */}
      <div className="mt-10">
        <KeyboardArrowDownIcon className="text-blue-500 animate-bounce" fontSize="large" />
      </div>

      
    </Box>
  );
}
