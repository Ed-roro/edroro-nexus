"use client";

import { Box, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { poppins600 } from '@/styles';
import { Section } from '@/components/layout';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import MovieIcon from '@mui/icons-material/Movie';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '@/lib/context/ThemeContext';

// Styled components
const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '2.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(1),
  textAlign: 'center',
  
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}));

const SectionSubtitle = styled(Typography)(({ theme, mode }) => ({
  fontSize: '1.25rem',
  marginBottom: theme.spacing(6),
  textAlign: 'center',
  color: mode === 'dark' ? '#cccccc' : '#666666',
  maxWidth: '800px',
  margin: '0 auto',
  marginBottom: theme.spacing(6),
  fontWeight: 500, // Slightly bolder for better readability
}));

const ServiceCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: theme.shadows[8],
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  
  '& svg': {
    fontSize: '40px',
  },
}));

const ServiceTitle = styled(Typography)(({ theme, mode }) => ({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: theme.spacing(2),
  color: mode === 'dark' ? '#ffffff' : '#333333',
}));

/**
 * Services/Skills section for the homepage
 */
export const ServicesSection = () => {
  const { mode } = useTheme();
  const services = [
    {
      title: '3D Animation',
      description: 'Creating stunning 3D animations and visual effects for various media projects.',
      icon: <MovieIcon />,
    },
    {
      title: 'Game Development',
      description: 'Designing and developing engaging video games with immersive gameplay experiences.',
      icon: <VideogameAssetIcon />,
    },
    {
      title: 'Music Production',
      description: 'Composing and producing original music and sound design for games, videos, and more.',
      icon: <MusicNoteIcon />,
    },
    {
      title: 'Web Development',
      description: 'Building modern, responsive websites and web applications with cutting-edge technologies.',
      icon: <CodeIcon />,
    },
  ];

  return (
    <Section background={mode === 'dark' ? 'default' : '#f8f9fa'} id="services">
      <SectionTitle
        variant="h2"
        className={poppins600.className}
        color={mode === 'dark' ? '#ffffff' : '#333333'}
      >
        Services & Expertise
      </SectionTitle>
      
      <SectionSubtitle variant="subtitle1" mode={mode}>
        Specialized in creating digital content across multiple disciplines, combining technical skills with creative vision.
      </SectionSubtitle>
      
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <ServiceCard elevation={3}>
              <IconWrapper>
                {service.icon}
              </IconWrapper>
              
              <ServiceTitle variant="h5" className={poppins600.className} mode={mode}>
                {service.title}
              </ServiceTitle>
              
              <Typography
                variant="body2"
                sx={{
                  color: mode === 'dark' ? '#cccccc' : '#666666',
                  fontWeight: 500
                }}
              >
                {service.description}
              </Typography>
            </ServiceCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
};

export default ServicesSection;