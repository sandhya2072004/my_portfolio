import { Box } from '@mui/material';
import React from 'react';
import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';
import GroupIcon from '@mui/icons-material/Group';

export default function Aboute() {
  return (
    <div className="min-h-screen bg-white text-white px-6 py-10">
      <h1 className="text-4xl text-black font-bold text-center mb-6  drop-shadow-md">About Me</h1>

      <div className="flex flex-col lg:flex-row justify-center items-center gap-8 px-4">
        {/* Left box - About Text */}
        <Box
          sx={{
            backgroundColor: 'transparent',
            height: 400,
            width: { xs: '100%', md: 500 },
            padding: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            borderRadius: 2,
            boxShadow: 4,
            overflowY: 'auto',
          }}
        >
          <p className="text-lg leading-7 text-gray-800 text-center">
            Hello! I'm <span className="font-semibold text-purple-600">Sandhya Sahu</span>, a passionate and
            detail-oriented <strong>Full Stack Developer</strong> who enjoys building responsive, scalable, and
            secure web applications. I specialize in creating user-friendly frontends with React and Tailwind CSS,
            and robust backend systems using Node.js, Express, and MongoDB.
          </p>
        </Box>

        {/* Right box - Info Cards */}
        <Box
          sx={{
            backgroundColor: 'transparent',
            height: '400px',
            width: '500px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            gap: 5
          }}
        >
          <Box className="bg-blue-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
            <WorkIcon sx={{ fontSize: 20, color: '#1565c0', mb: 1 }} />
            <h2 className="text-xl font-semibold text-blue-800">Experience</h2>
            {/* <p className="mt-2 text-sm text-gray-600">1+ years building dynamic full-stack applications.</p> */}
          </Box>

          <Box className="bg-green-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
            <FolderIcon sx={{ fontSize: 20, color: '#2e7d32', mb: 1 }} />
            <h2 className="text-xl font-semibold text-green-800">Projects</h2>
            {/* <p className="mt-2 text-sm text-gray-600">Built multiple MERN stack and frontend-only applications.</p> */}
          </Box>

          <Box className="bg-purple-100 p-6 rounded-xl shadow-md flex flex-col items-center justify-center">
            <GroupIcon sx={{ fontSize: 20, color: '#6a1b9a', mb: 1 }} />
            <h2 className="text-xl font-semibold text-purple-800">Team</h2>
            {/* <p className="mt-2 text-sm text-gray-600">Collaborated in teams using Git, Agile & code reviews.</p> */}
          </Box>
        </Box>
      </div>
    </div>
  );
}
