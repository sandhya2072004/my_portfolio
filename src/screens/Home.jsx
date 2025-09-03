import React, { useEffect, useState ,useContext} from "react";
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
import { useTheme } from "@mui/material/styles";
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
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { ThemeContext } from "../ThemeContext";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};



export default function Home() {
  const theme = useTheme(); 
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState(null);
  const { toggleTheme, mode } = useContext(ThemeContext);


  const handleMenu = (event) => setAnchorEl(event.currentTarget);
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
  },


    [charIndex, deleting, titleIndex]);

  const skills = [
    { label: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", percentage: 95, category: "Frontend" },
    { label: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", percentage: 90, category: "Frontend" },
    { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", percentage: 85, category: "Frontend" },
    { label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", percentage: 80, category: "Frontend" },
    { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", percentage: 75, category: "Frontend" },
    { label: "Tailwind CSS", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuF7o_QNyY4w0wWYb0R3bYbqjE-x3npu5ZQA&s", percentage: 85, category: "Frontend" },
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
        backgroundColor: "white",
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
                backgroundColor: "#79BAEC",
                "& .MuiLinearProgress-bar": {
                  backgroundColor: "#960D51",
                },
              }}
            />
          </Box>
        ))}
    </Box>
  );

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      handleClose(); // close menu on mobile
    }
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];


  return (
    <Box sx={{ width: '100%', overflowX: 'hidden' }}>

      <AppBar position="fixed" sx={{ background: 'white', boxShadow: 3 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#960D51"
            }}
          >
            Miss Sandhya..
          </Typography>

          {isMobile ? (
            <>
              <IconButton size="large" color="inherit" onClick={handleMenu}>
                <MenuIcon sx={{ color: 'black' }} />
              </IconButton>
              <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                {navLinks.map((link) => (
                  <MenuItem key={link.label} onClick={() => handleScroll(link.id)}>
                    {link.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (


              <Box>
                {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    style={{
                      color: "#000",
                      margin: "0 1rem",
                      textDecoration: "none",
                      fontWeight: "bold",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      transition: "all 0.2s ease",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.textDecoration = "underline";
                      e.target.style.textDecorationColor = "#960D51";
                      e.target.style.color = "#960D51"; // ✅ Set hover text color to yellow
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.textDecoration = "none";
                      e.target.style.color = "#000"; // ✅ Reset to original color
                    }}
                    onFocus={(e) => {
                      e.target.style.textDecoration = "underline";
                      e.target.style.textDecorationColor = "#960D51"; // ✅ Corrected (was invalid before)
                      e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
                    }}
                    onBlur={(e) => {
                      e.target.style.boxShadow = "none";
                      e.target.style.textDecoration = "none";
                      e.target.style.color = "#960D51";
                    }}
                  >
                    {item}
                  </a>
                ))}
              </Box>
          
          
          
          )}

        </Toolbar>
      </AppBar>

      <Toolbar /> 

      {/*hero Sections */}
      <Box id="home">
        <motion.div
          className="min-h-screen text-white flex flex-col justify-center items-center px-6 mt-20"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-7xl">
            {/* Profile Image */}
            <motion.div
              className="flex-1 flex justify-center items-center"
              variants={fadeInUp}
            >
              <div
                style={{
                  width: "300px",
                  height: "300px",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                  borderRadius: "50%",
                  border: "5px solid #960D51",
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
                    borderRadius: "50%",
                  }}
                />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              className="flex-1 flex flex-col justify-center items-start space-y-6"
              variants={fadeInUp}
            >
              <h1>
                <span className="text-4xl font-bold  bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-transparent">
                  Hi,
                </span>{" "}
                <span className="text-4xl font-bold">👋</span>
                <span className="text-4xl font-bold  bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 text-transparent">
                  I'm Sandhya Sahu
                </span>
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
                <Button
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    textTransform: "none",
                    borderRadius: "30px",
                    backgroundColor: "#960D51",
                  }}
                >
                  Hire me
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  sx={{
                    textTransform: "none",
                    borderRadius: "30px",
                    color: "#960D51",
                    borderColor: "#960D51",
                  }}
                  href="https://github.com/sandhya2072004"
                  target="_blank"
                >
                  Github
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<LinkedInIcon />}
                  sx={{
                    textTransform: "none",
                    borderRadius: "30px",
                    color: "#960D51",
                    borderColor: "#960D51",
                  }}
                  href="https://www.linkedin.com/in/sandhya-sahu-0a8aa9269/"
                  target="_blank"
                >
                  LinkedIn
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <KeyboardArrowDownIcon className="text-[#960D51] animate-bounce" fontSize="large" />
          </motion.div>
        </motion.div>
      </Box>


      {/*About section*/}
      <Box id="about" className="relative overflow-hidden">
        {/* 🔵 Animated Background */}
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-white-300 via-purple-300 to-blue-300 bg-[length:400%_400%]" />

        {/* 🔵 Section Content */}
        <motion.div
          className="relative z-10 px-6 py-20 flex flex-col items-center justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h1 className="text-4xl font-bold text-center mb-10 text-black drop-shadow-md">
            About Me
          </h1>

          <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-full max-w-6xl">
            {/* Vertical Line */}
            <div className="hidden lg:block h-[450px] w-[4px] bg-gradient-to-b from-[#960D51] via-purple-400 to-pink-500 rounded-full animate-pulse" />

            {/* Left Info Box */}
            <Box
              sx={{
                height: 450,
                width: { xs: "100%", md: 470 },
                p: 4,
                display: "flex",
                flexDirection: "row",
                alignItems: "start",
                gap: 3,
                fontWeight: "bold",
                borderRadius: 2,
                boxShadow: 4,
                backgroundColor: "#ffffffcc", // semi-transparent white
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="flex flex-col gap-4 text-left text-gray-800 text-lg leading-7">
                <p>
                  Hello! I'm <span className="font-semibold text-purple-600">Sandhya Sahu</span>, I am an engineering student currently in my 3rd year studying at Viswavidyalaya Engineering College Ambikapur (CG), in the field of Computer Science and Engineering (CSE).
                </p>
                <p>
                  I’m a passionate and detail-oriented <strong>Full Stack Developer</strong> who enjoys building responsive, scalable, and secure web applications. I specialize in user-friendly frontends with React and Tailwind CSS, and robust backends with Node.js, Express, and MongoDB.
                </p>
                <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                  <Button
                    variant="outlined"
                    startIcon={<SaveAltIcon />}
                    href="#"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#960D51",
                      color: "white",
                      borderRadius: "50px",
                    }}
                  >
                    Download CV
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<PermContactCalendarIcon />}
                    href="#contact"
                    sx={{
                      textTransform: "none",
                      backgroundColor: "#960D51",
                      color: "white",
                      borderRadius: "50px",
                    }}
                  >
                    Contact
                  </Button>
                </Box>
              </div>
            </Box>

            {/* Right Cards */}
            <Box
              sx={{
                height: 450,
                width: { xs: "100%", md: 470 },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                flexWrap: "wrap",
                backgroundColor: "#ffffffcc",
                backdropFilter: "blur(10px)",
                boxShadow: 4,
                borderRadius: 2,
              }}
            >
              <Box className="bg-blue-100 p-6 rounded-xl shadow-md flex flex-col items-center w-[140px] h-[140px] justify-center">
                <WorkIcon sx={{ fontSize: 30, color: "#1565c0", mb: 1 }} />
                <h2 className="text-xl font-semibold text-blue-800">
                  Experience
                </h2>
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
        </motion.div>
      </Box>


      {/*skill section*/}
      <Box id="skills" className="relative overflow-hidden">
        {/* 🔵 Animated Background */}
        <div className="absolute inset-0 z-0 animate-gradient bg-gradient-to-r from-white-200 via-blue-200 to-purple-200 bg-[length:400%_400%]" />

        {/* 🔵 Content */}
        <motion.div
          className="relative z-10 min-h-screen flex flex-col items-center justify-center py-10 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Box sx={{ mb: 4, textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{
                color: "black",
                fontWeight: "bold",
                fontSize: { xs: "28px", md: "36px" },
                mb: 2,
              }}
            >
              Skills
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              justifyContent: "center",
              flexWrap: "wrap",
              zIndex: 10,
            }}

          >
            <div className="hidden lg:block h-[450px] w-[4px] bg-gradient-to-b from-[#960D51] via-purple-400 to-pink-500 rounded-full animate-pulse" />

            {renderCategory("Frontend", "Frontend", "#E3F2FD")}
            {renderCategory("Backend", "Backend", "#FCE4EC")}
            {renderCategory("Database", "Database", "#FFFFF0")}
          </Box>
        </motion.div>
      </Box>


      {/*experience section*/}
      <Box id="experience" sx={{ p: 4 }}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            mb: 4,
            textAlign: "center",
            // color: "#1565c0",
            color:"black"
          }}
        >
          Experience
        </Typography>
        <div id="experience" className=" py-10 px-4 flex  justify-center">
          {/* <div className="hidden lg:block h-[450px] w-[10px] bg-gradient-to-b from-[#960D51] via-purple-400 to-pink-500 rounded-full animate-pulse" /> */}

          <Box
            sx={{

              display: "flex",
              flexDirection: "column",
              alignItems: "center",

              padding: { xs: 3, md: 6 },
            }}
          >


            <Box
              sx={{
                width: "90%",
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 4,
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  height:"300px",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  boxShadow: 4,
                  padding: { xs: 3, md: 6 },
                  gap: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                  🗓️ 1 Year of Full Stack Development
                </Typography>
                <Typography variant="body1" sx={{ color: "#555", fontSize: "18px", lineHeight: 1.8 }}>
                  Over the past year, I have worked on designing and developing responsive web applications using the MERN stack — MongoDB, Express.js, React, and Node.js. I focused on frontend UI/UX and backend RESTful API integration.
                </Typography>
              </Box>

              <Box
                sx={{
                  height: "300px",
                  borderRadius: 3,
                  boxShadow: 4,
                  padding: { xs: 3, md: 6 },
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#333" }}>
                  🤝 Team Collaboration
                </Typography>
                <Typography variant="body1" sx={{ color: "#555", fontSize: "18px", lineHeight: 1.8 }}>
                  As part of a collaborative team, I helped build a complete website platform from scratch. We followed Agile methodology and used Git, GitHub, and Trello for team coordination and version control.
                </Typography>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>



      {/*projects section*/}
      <Box id="projects" sx={{ px: 4, py: 8,  }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", textAlign: "center", mb: 6, color: "black" }}
        >
          Projects
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {/* Ticket Booking Project */}
          <Box
            sx={{
              maxWidth: "500px",
              flex: 1,
              p: 4,
              bgcolor: "#F8F8FF",
              borderRadius: 2,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#b71c1c" }}>
              🎟️ Ticket_wale: Booking Website
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://media.istockphoto.com/id/1158450069/photo/teen-girl-travelling-by-bus.jpg?s=612x612&w=0&k=20&c=vuJag8mVR0a7PphuAOEIqKhSG5E43rgnt4SrJDj0sHo="
                alt="Ticket Booking"
                width="200"
                style={{ borderRadius: "8px" }}
              />
            </Box>

            <Typography variant="body2" sx={{ lineHeight: 1.7, fontSize: "18px", color: "#444" }}>
              The primary objective of the Ticket Booking Website is to develop a real-time,
              user-friendly, and efficient web application that enables users to browse,
              book, and manage tickets for services such as movies, events, travel, or shows.
              <br />
              <br />
              Built using the <strong>MERN Stack</strong> — MongoDB, Express.js, React.js,
              and Node.js — for seamless full-stack integration and performance.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {["MongoDB", "Express", "React.js", "Node.js", "HTML", "CSS", "JavaScript"].map((tech) => (
                <Button key={tech} variant="outlined" size="small" sx={{
                  borderRadius: 3, backgroundColor: "#960D51", color:"white", textTransform:"none"                }}>
                  {tech}
                </Button>
              ))}
            </Box>
          </Box>

          {/* Shopping Project */}
          <Box
            sx={{
              maxWidth: "500px",
              height: "625px",
              flex: 1,
              p: 4,
              bgcolor: "#F8F8FF",
              borderRadius: 2,
              boxShadow: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold", color: "#b71c1c" }}>
              🛍️ Shopping Website
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg0ykWtdxGrF_SZD5UuMKPICBnXNxRKr9IXQ&s"
                alt="Shopping App"
                width="200"
                style={{ borderRadius: "8px" }}
              />
            </Box>

            <Typography variant="body2" sx={{ lineHeight: 1.7, fontSize: "18px", color: "#444" }}>
              A responsive e-commerce platform where users can browse products, add to cart,
              and place orders with ease.
              <br />
              <br />
              Built using the <strong>MERN Stack</strong> and styled with Tailwind CSS.
              Includes product filtering, cart management, and secure payment integration.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {["MongoDB", "Express", "Next.js", "Node.js", "HTML", "CSS", "JavaScript"].map((tech) => (
                <Button key={tech} variant="outlined" size="small" sx={{ borderRadius: 3, backgroundColor: "#960D51", color: "white", textTransform: "none" }}>
                  {tech}
                </Button>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>



      {/*contact section*/}
      <Box id="contact" sx={{ p: 4,  }}>

        <div className="  flex flex-col items-center justify-center text-white px-4 py-10 ">
          <h1 className="text-4xl font-bold mb-10 text-black">Contact Me</h1>

          {/* First Row */}
          <div className=" w-full max-w-5xl rounded-lg p-6 mb-6 flex flex-col md:flex-row justify-around items-center gap-6">
            <Box
              sx={{
                color: "black",
                p: 2,
                borderRadius: 2,
                textAlign: "center",
                width: 260,
                boxShadow: 4
              }}
            >
              <PhoneIcon sx={{
                fontSize: 30, mb: 1, color: "#960D51"
              }} />
              <h2 className="text-xl font-semibold">Call Me On:</h2>
              <p className="text-lg">94242429847</p>
            </Box>

            <Box
              sx={{
                color: "black",
                p: 2,
                borderRadius: 2,
                textAlign: "center",
                width: 260,
                boxShadow: 4

              }}
            >
              <EmailIcon sx={{
                fontSize: 30, mb: 1, color: "#960D51"
              }} />
              <h2 className="text-xl font-semibold">E-Mail:</h2>
              <p className="text-lg">sandhya2072004@gmail.com</p>
            </Box>

            <Box
              sx={{
                color: "black",
                p: 2,
                borderRadius: 2,
                textAlign: "center",
                width: 260,
                boxShadow: 4

              }}
            >
              <InstagramIcon sx={{
                fontSize: 30, mb: 1, color: "#960D51"
 }} />
              <h2 className="text-xl font-semibold">Instagram:</h2>
              <p className="text-lg">_sandhya_sahu4</p>
            </Box>
          </div>

          {/* Second Row */}
          <div className=" w-full max-w-5xl rounded-lg p-6 text-black flex flex-col md:flex-row justify-around items-center gap-6">
            <Box
              sx={{
                // bgcolor: "red",
                p: 2,
                borderRadius: 2,
                textAlign: "center",
                width: 260,
                color: "black",
                boxShadow: 4

              }}
            >
              <LinkedInIcon sx={{
                fontSize: 30, mb: 1, color: "#960D51"
 }} />
              <h2 className="text-xl font-semibold">LinkedIn:</h2>
              <p className="text-lg">_sandhya_sahu4</p>
            </Box>

            <Box
              sx={{
                color: "black",
                p: 2,
                borderRadius: 2,
                textAlign: "center",
                width: 260,
                boxShadow: 4

              }}
            >
              <GitHubIcon sx={{
                fontSize: 30, mb: 1, color: "#960D51"
 }} />
              <h2 className="text-xl font-semibold">GitHub:</h2>
              <p className="text-lg">sandhya2072004</p>
            </Box>

            <Box
              sx={{
                color: "black",
                p: 2,
                borderRadius: 2,
                textAlign: "center",
                width: 260,
                boxShadow: 4

              }}
            >
              <LocationOnIcon sx={{
                fontSize: 30, mb: 1, color: "#960D51"
 }} />
              <h2 className="text-xl font-semibold">Location:</h2>
              <p className="text-lg">Bhopal</p>
            </Box>
          </div>
        </div>

        <div className=" flex flex-col items-center justify-center  px-4">
          <div>
            <h1 style={{color:"#960D51"}} className="text-3xl font-bold mb-2">Send me an email</h1>
            <p className="text-lg mb-6">I'm very responsive to messages.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4">
            <input
              style={{ borderRadius: "30px" }}
              type="text"
              placeholder="Your Name"
              className="border-none border-transparent px-4 py-2 bg-gray-100 focus:outline-none focus:ring-0 focus:ring-pink-500 hover:shadow-md transition duration-200"
            />

            <input
              style={{ borderRadius: "30px" }}
              type="email"
              placeholder="Your Email"
              className="border-none border-transparent px-4 py-2 bg-gray-100 focus:outline-none focus:ring-0 focus:ring-pink-500 hover:shadow-md transition duration-200"
            />

            <textarea
              style={{ borderRadius: "15px" }}
              placeholder="Your Message"
              rows={4}
              className="border-none border-transparent px-4 py-2 bg-gray-100 resize-none focus:outline-none focus:ring-0 focus:ring-pink-500 hover:shadow-md transition duration-200"
            />

            <div className="flex justify-center">
              <Button
                style={{
                  textTransform: "none",
                  borderRadius: "50px",
                  backgroundColor: "#960D51",
                }}
                variant="contained"
                color="error"
              >
                Send Message
              </Button>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
}