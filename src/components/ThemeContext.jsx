import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Box,
  Typography,
  LinearProgress,
  Button
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import WorkIcon from "@mui/icons-material/Work";
import FolderIcon from "@mui/icons-material/Folder";
import GroupIcon from "@mui/icons-material/Group";
import DnsIcon from "@mui/icons-material/Dns";
import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from '@mui/icons-material/Menu';
import san from "../images/san.jpg";
import "./style.css";

import SaveAltIcon from '@mui/icons-material/SaveAlt';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';



// ✅ Navbar link styles
const navLinkStyle = {
  color: "#000",
  margin: "0 1rem",
  textDecoration: "none",
  fontWeight: "bold",
};

export default function Home() {
  const theme = useTheme(); // ✅ Moved up
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

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

  const skills = [
    { label: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", percentage: 95, category: "Frontend" },
    { label: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", percentage: 90, category: "Frontend" },
    { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", percentage: 85, category: "Frontend" },
    { label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", percentage: 80, category: "Frontend" },
    { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", percentage: 75, category: "Frontend" },
    { label: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", percentage: 85, category: "Frontend" },
    { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", percentage: 80, category: "Backend" },
    { label: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", percentage: 70, category: "Backend" },
    { label: "Loopback", icon: "https://blog.theodo.com/_astro/loopback_logo.DqM7B1_j_1W7JSI.webp", percentage: 75, category: "Backend" },
    { label: "API", icon: "https://icons.veryicon.com/png/o/education-technology/internet-blue-line-icon/api-interface.png", percentage: 75, category: "Backend" },
    { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", percentage: 75, category: "Database" },
    { label: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", percentage: 70, category: "Database" },
  ];

  const categoryIcons = {
    Frontend: <WebIcon sx={{ fontSize: 30, color: "#1565c0", mb: 1 }} />,
    Backend: <DnsIcon sx={{ fontSize: 30, color: "#c2185b", mb: 1 }} />,
    Database: (
      <img
        src="https://cdn-icons-png.flaticon.com/512/906/906343.png"
        alt="Database Icon"
        width={32}
        height={32}
        style={{ marginBottom: 8 }}
      />
    ),
  };

  const renderCategory = (title, category, color) => (
    <Box
      key={category}
      sx={{
        backgroundColor: color,
        width: { xs: "90%", sm: "300px" },
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        textAlign: "center",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {categoryIcons[category]}
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          {title}
        </Typography>
      </Box>
      {skills
        .filter((skill) => skill.category === category)
        .map((skill) => (
          <Box key={skill.label} sx={{ mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <img src={skill.icon} alt={skill.label} width={24} height={24} />
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {skill.label} - {skill.percentage}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={skill.percentage}
              sx={{
                height: 6,
                borderRadius: 5,
                mt: 0.5,
                backgroundColor: "#e0e0e0",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#1976d2",
                },
              }}
            />
          </Box>
        ))}
    </Box>
  );


  

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", width: "100%" }}>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ background: "white", boxShadow: 3 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo/Name */}
          <Typography
            variant="h6"
            sx={{
              // background: "linear-gradient(90deg, #0A66C2, #4A90E2, #0072b1)",
              // backgroundClip: "text",
              // WebkitBackgroundClip: "text",
              // WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              color:"#960D51"
            }}
          >
            Miss Sandhya..
          </Typography>

          {/* Navigation */}
          {isMobile ? (
            <>
              <IconButton onClick={handleMenu}>
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                {["Home", "About", "Skills", "Experience", "Projects"].map((item) => (
                  <MenuItem
                    key={item}
                    onClick={handleClose}
                    component="a"
                    href={`#${item.toLowerCase()}`}
                  >
                    {item}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Box>
              {["Home", "About", "Skills", "Experience", "Projects"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: "#000", // visible on white AppBar
                    margin: "0 1rem",
                    textDecoration: "none",
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </a>
              ))}
            </Box>
          )}

          {/* CV & Contact Buttons */}
          {/* <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<SaveAltIcon />}
              component="a"
              href="#"
              sx={{ textTransform: "none" }}
            >
              CV
            </Button>

            <Button
              variant="contained"
              color="primary"
              startIcon={<PermContactCalendarIcon />}
              component="a"
              href="#contact"
              sx={{ textTransform: "none", color: "white", }}
            >
              Contact
            </Button>
          </Box> */}
        </Toolbar>
      </AppBar>









      {/* Hero Section */}
      <Box id="home" className="min-h-screen text-white flex flex-col justify-center items-center px-6 mt-20">
        <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl">
          <div className="flex-1 flex flex-col justify-center items-start space-y-6">
            <h1 className="">
              <span className="text-4xl font-bold  bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-transparent">Hi,</span>  <span className="text-4xl font-bold">👋</span><span className="text-4xl font-bold  bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-transparent">I'm Sandhya Sahu</span> 
             
            </h1>
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-400 to-pink-800">
              {text}
              <span className="animate-pulse">|</span>
            </h3>
            <p className="font-bold text-xl leading-relaxed text-gray-600">
              I’m a Full Stack Developer skilled in building responsive and scalable web apps using React,
              Tailwind CSS, Node.js, Express, and MongoDB. I handle both front-end and back-end development,
              from UI/UX design to API and database management.
            </p>
            <div className="flex flex-row gap-5">
              <Button variant="contained" endIcon={<SendIcon />} sx={{ textTransform: "none", borderRadius: "30px", backgroundColor: "#960D51" }}>
                Hire me
              </Button>
              <Button variant="outlined" sx={{ textTransform: "none", borderRadius: "30px", color: "#960D51", borderColor:"#960D51" }} href="https://github.com/sandhya2072004" target="_blank">
                <GitHubIcon sx={{ height: "20px", color:"#960D51" }} /> Github
              </Button>
              <Button variant="outlined" sx={{ textTransform: "none", borderRadius: "30px", color: "#960D51", borderColor:"#960D51"}} href="https://www.linkedin.com/in/sandhya-sahu-0a8aa9269/" target="_blank">
                <LinkedInIcon sx={{ height: "20px" }} /> LinkedIn
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div style={{
              width: "300px",
              height: "300px",
              boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
              borderRadius: "40%",
              border: "4px solid transparent",
              overflow: "hidden",
              transition: "0.4s",
            }}>
              <img src={san} alt="San" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <KeyboardArrowDownIcon className="text-blue-500 animate-bounce" fontSize="large" />
        </div>
      </Box>

      {/* About Section */}
      <div id="about" className="bg-white text-black px-6 py-10 flex flex-col items-center justify-center mt-20">
        <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-md">About Me</h1>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full max-w-6xl">
          <Box sx={{ height: 500, width: { xs: "100%", md: 600 }, padding: 4, display: "flex", flexDirection: "column", gap: 10, alignItems: "center", justifyContent: "center", fontWeight: "bold", borderRadius: 2, boxShadow: 2, backgroundColor: "#FAFAFA", overflowY: "auto" }}>
            {/* #f9f9f9 */}
            <p className="text-lg leading-7 text-gray-800 text-left flex flex-col gap-2">
              {/* <span className="font-semibold text-purple-600">Sandhya Sahu</span>, */}
              <p className="text-lg leading-7 text-gray-800 text-left">
                Hello! I'm <span className="font-semibold text-purple-600">Sandhya Sahu</span>,
                i am a Engineering student, Right now i'm in 3rd year. i am  studing in viswavidyalaya Engineering Collage Ambikapur (CG), in the Field of Computer
                science and Engineering(CSE).
                </p>
                <p>
                   a passionate and
                detail-oriented <strong>Full Stack Developer</strong> who enjoys building responsive, scalable, and
                secure web applications. I specialize in creating user-friendly frontends with React and Tailwind CSS,
                and robust backend systems using Node.js, Express, and MongoDB.
                </p>
             
              
            </p>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="outlined"
                color="primary"
                startIcon={<SaveAltIcon />}
                component="a"
                href="#"
                sx={{ textTransform: "none",backgroundColor:"#960D51", color:"white" , borderRadius:"50px"}}
              >
               Download CV
              </Button>

              <Button
                variant="contained"
                color="primary"
                startIcon={<PermContactCalendarIcon />}
                component="a"
                href="#contact"
                sx={{ textTransform: "none", backgroundColor: "#960D51", color: "white", borderRadius:"50px" }}
              >
                Contact
              </Button>
            </Box>
          </Box>

          <Box sx={{ height: 500, width: { xs: "100%", md: 500 }, display: "flex", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" ,backgroundColor:"#FAFAFA", boxShadow:4 }}>
            <Box className="bg-blue-100 p-6 rounded-xl shadow-md flex flex-col items-center w-[140px] h-[140px] justify-center">
              <WorkIcon sx={{ fontSize: 30, color: "#1565c0", mb: 1 }} />
              <h2 className="text-xl font-semibold text-blue-800">Experience</h2>
            </Box>
            <Box className="bg-green-100 p-6 rounded-xl shadow-md flex flex-col items-center w-[140px] h-[140px] justify-center">
              <FolderIcon sx={{ fontSize: 30, color: "#2e7d32", mb: 1 }} />
              <h2 className="text-xl font-semibold text-green-800">Projects</h2>
            </Box>
            <Box className="bg-purple-100 p-6 rounded-xl shadow-md flex flex-col items-center w-[140px] h-[140px] justify-center">
              <GroupIcon sx={{ fontSize: 30, color: "#6a1b9a", mb: 1 }} />
              <h2 className="text-xl font-semibold text-purple-800">Team</h2>
            </Box>
          </Box>
        </div>
      </div>

      {/* Skills Section */}
      <div id="skills" className="bg-white min-h-screen flex flex-col items-center py-10">
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
          <Typography variant="h6" sx={{ color: "#7b1fa2", fontWeight: "bold", fontSize: "30px", mt: 1 }}>
            Skills
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4, justifyContent: "center", flexWrap: "wrap" }}>
          {renderCategory("Frontend", "Frontend", "#E3F2FD")}
          {renderCategory("Backend", "Backend", "#FCE4EC")}
          {renderCategory("Database", "Database", "#FFFFF0")}
        </Box>
      </div>


      {/*Experience Section*/}
      <div id="experience" className="bg-gray-100 py-10 px-4 flex justify-center">
        <Box
          sx={{
            width: "100%",
            maxWidth: "1000px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 3,
            boxShadow: 4,
            padding: { xs: 3, md: 6 },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 4,
              textAlign: "center",
              color: "#1565c0",
            }}
          >
            Experience
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                🗓️ 1 Year of Full Stack Development
              </Typography>
              <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8 }}>
                Over the past year, I have worked on designing and developing responsive web applications using the MERN stack — MongoDB, Express.js, React, and Node.js. I focused on frontend UI/UX and backend RESTful API integration.
              </Typography>
            </Box>

            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                🤝 Team Collaboration
              </Typography>
              <Typography variant="body1" sx={{ color: "#555", lineHeight: 1.8 }}>
                As part of a collaborative team, I helped build a complete website platform from scratch. We followed Agile methodology and used Git, GitHub, and Trello for team coordination and version control.
              </Typography>
            </Box>
          </Box>
        </Box>
      </div>

      
      <div className="bg-blue-400 h-screen ">
        <Typography>
          Features Of Projects
        </Typography>



        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuarY6prxvksmYyNRe-bg9mBPcYl7QFJO_mw&s"/>

        </div>
      </div>

    </Box>
  );
}
