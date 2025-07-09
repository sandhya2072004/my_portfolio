import { Box, Typography, LinearProgress } from '@mui/material';
import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import WebIcon from '@mui/icons-material/Web';

export default function Skills() {
  const skills = [
    { label: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", percentage: 95, category: "Frontend" },
    { label: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", percentage: 90, category: "Frontend" },
    { label: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", percentage: 85, category: "Frontend" },
    { label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", percentage: 80, category: "Frontend" },
    { label: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", percentage: 75, category: "Frontend" },
    {
      label: "Tailwind CSS",
      icon: "https://cdn.creazilla.com/icons/3254431/tailwindcss-icon-icon-sm.png",
      percentage: 85,
      category: "Frontend",
    },
    { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", percentage: 80, category: "Backend" },
    { label: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", percentage: 70, category: "Backend" },
    { label: "Loopback", icon: "https://blog.theodo.com/_astro/loopback_logo.DqM7B1_j_1W7JSI.webp", percentage: 75, category: "Backend" },
    { label: "Api", icon: "https://icons.veryicon.com/png/o/education-technology/internet-blue-line-icon/api-interface.png", percentage: 75, category: "Backend" },
    { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", percentage: 75, category: "Database" },
    { label: "My SQL", icon: "https://e7.pngegg.com/pngimages/252/959/png-clipart-mysql-database-server-microsoft-sql-server-others-text-logo.png", percentage: 70, category: "Database" },
  ];

  // Icon mapping for each category
  const categoryIcons = {
    Frontend: <WebIcon sx={{ fontSize: 30, color: '#1565c0', mb: 1 }} />,
    Backend: <DnsIcon sx={{ fontSize: 30, color: '#c2185b', mb: 1 }} />,
    Database: (
      <img
        src="https://e7.pngegg.com/pngimages/931/769/png-clipart-database-icon-database-free-blue-background-blue-angle.png"
        alt="Clean Database Design Icon"
        width={32}
        height={32}
        style={{ marginBottom: '8px' }}
      />

    ),

  };


  const renderCategory = (title, category, color) => (
    <Box
      key={category}
      sx={{
        backgroundColor: color,
        width: { xs: '90%', sm: '300px' },
        padding: 3,
        borderRadius: 2,
        boxShadow: 3,
        textAlign: 'center',
      }}
    >
      {/* Category Icon and Title */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {categoryIcons[category]}
        <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
          {title}
        </Typography>
        
      </Box>

      {/* Skills List */}
      {skills
        .filter(skill => skill.category === category)
        .map(skill => (
          <Box key={skill.label} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <img src={skill.icon} alt={skill.label} width={24} height={24} />
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                {skill.label} - {skill.percentage}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={parseInt(skill.percentage)}
              sx={{
                height: 6,
                borderRadius: 5,
                mt: 0.5,
                backgroundColor: '#e0e0e0',
                '& .MuiLinearProgress-bar': {
                  backgroundColor: '#1976d2',
                },
              }}
            />
          </Box>
        ))}
    </Box>
  );

  return (
    <div className="bg-white min-h-screen flex flex-col items-center py-10">
      {/* Heading */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 4 }}>
        {/* <CodeIcon sx={{ fontSize: 40, color: '#7b1fa2' }} /> */}
        <Typography
          variant="h6"
          sx={{
            color: '#7b1fa2',
            px: 2,
            py: 0.5,
            fontWeight: 'bold',
            fontSize:"30px",
            mt: 1,
          }}
        >
          Skills
        </Typography>
      </Box>

      {/* Skill Boxes */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {renderCategory('Frontend', 'Frontend', '#E3F2FD')}
        {renderCategory('Backend', 'Backend', '#FCE4EC')}
        {renderCategory('Database', 'Database', '#FFFFF0')}
      </Box>
    </div>
  );
}

